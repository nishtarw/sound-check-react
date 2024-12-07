import React, { useState } from "react";

const EditDialog = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    songName: props.songName,
    artistName: props.artistName,
    reviewText: props.reviewText,
    prev_img: props.img,
  });
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const { name, files } = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: files[0], 
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData();
    formData.append("title", inputs.songName);
    formData.append("artist", inputs.artistName);
    formData.append("review", inputs.reviewText);
    if (inputs.img) formData.append("image", inputs.img);

    try {
      const response = await fetch(
        `https://sound-check-server.onrender.com/api/songs/${inputs._id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        const updatedReview = await response.json();
        setResult("Review successfully updated.");
        props.updateReview(updatedReview.updatedSong); // Update the song review in the parent component
        props.closeDialog(); // Close the dialog
      } else {
        const errorData = await response.json();
        setResult("Failed to update review: " + (errorData.message || "Unknown error."));
      }
    } catch (error) {
      console.error("Error updating review:", error);
      setResult("An error occurred while updating the review.");
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
          <form id="edit-review-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="songName">Song Name:</label>
              <input
                type="text"
                id="songName"
                name="songName" 
                value={inputs.songName}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="artistName">Artist Name:</label>
              <input
                type="text"
                id="artistName"
                name="artistName" 
                value={inputs.artistName}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="reviewText">Review Text:</label>
              <textarea
                id="reviewText"
                name="reviewText" 
                value={inputs.reviewText}
                onChange={handleChange}
                required
              />
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={inputs.img ? URL.createObjectURL(inputs.img) : inputs.prev_img}
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="image">Upload Image:</label>
                <input
                  type="file"
                  id="image"
                  name="img" 
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            </section>

            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
