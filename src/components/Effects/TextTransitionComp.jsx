import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Forest", "Building", "Tree", "Color"];

const TextTransitionComp = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
    </div>
  );
};

export default TextTransitionComp;
