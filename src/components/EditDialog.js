import React, { useState } from "react";

const EditDialog = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    title: props.title,
    artist: props.artist,
    review: props.review,
    image: props.image,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("artist", inputs.artist);
    formData.append("review", inputs.review);
    if (inputs.image) {
      formData.append("image", inputs.image);
    }

    console.log("Editing song with ID:", inputs._id);  // Debugging line

    try {
      const response = await fetch(
        `https://sound-check-server.onrender.com/api/songs/${inputs._id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      const data = await response.json();
      if (response.ok) {
        props.onReviewUpdated(data.updatedSong);
      } else {
        alert("Error editing review: " + data.message);
      }
    } catch (error) {
      console.error("Error editing review:", error);
      alert("An error occurred while editing the review.");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="edit-content">
            <h3>Edit Review for {inputs.title}</h3>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="Song Title"
              />
              <input
                type="text"
                name="artist"
                value={inputs.artist}
                onChange={handleChange}
                placeholder="Artist"
              />
              <textarea
                name="review"
                value={inputs.review}
                onChange={handleChange}
                placeholder="Review"
              />
              <input
                type="file"
                name="image"
                onChange={(e) => setInputs({ ...inputs, image: e.target.files[0] })}
              />
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
