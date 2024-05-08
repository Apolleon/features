import React, { useEffect, useRef, useState, memo } from "react";
import "./index.css";

const initText =
  "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text";

const smallText = "test";

const Text = () => {
  const div = useRef();
  const [fontSize, setFontSize] = useState(45);

  useEffect(() => {
    calculateFontSize();
  }, [div, fontSize]);

  const calculateFontSize = () => {
    if (!div.current) return;

    const blockHeight = div.current.scrollHeight;

    if (blockHeight > 101) setFontSize((prev) => prev - 1);
  };

  return (
    <div
      ref={div}
      className="text"
      style={{
        fontSize: fontSize + "px",
      }}
    >
      {initText}
    </div>
  );
};

export default memo(Text);
