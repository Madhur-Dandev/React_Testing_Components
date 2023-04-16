import React, { useState } from "react";
import "./FullScreenPrompt.css";

const Prompt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the input value
    console.log("Input value:", inputValue);
    setInputValue("");
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Prompt</button>
      {isOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <textarea
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message here..."
            />
            <button type="submit">Submit</button>
            <button onClick={handleCloseModal} className="modal-close-btn">
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Prompt;
