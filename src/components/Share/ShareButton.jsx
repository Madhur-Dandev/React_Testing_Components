import React from "react";

function ShareButton() {
  const handleClick = async () => {
    console.log(navigator.canShare());
    try {
      await navigator.share({
        title: document.title,
        text: "Check out this link!",
        url: window.location.href,
      });
      console.log("Sharing succeeded");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <button onClick={handleClick} disabled={!navigator.share}>
      Share
    </button>
  );
}

export default ShareButton;
