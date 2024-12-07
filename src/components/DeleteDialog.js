import React, { useState } from "react";

const DeleteDialog = (props) => {
  const [result, setResult] = useState("");

  const deleteReview = async () => {
    try {
      const response = await fetch(
        `https://sound-check-server.onrender.com/api/songs/${props._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setResult("Review successfully deleted.");
        props.removeReview(props._id); 
        props.closeDialog();
      } else {
        const errorData = await response.json();
        setResult(errorData.message || "Failed to delete review.");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      setResult("An error occurred while deleting the review.");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>
              Are you sure you want to delete the review for {props.songName} by{" "}
              {props.artistName}?
            </h3>
            <section>
              <button onClick={deleteReview}>Yes</button>
              <button onClick={props.closeDialog}>No</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
