import React, { useRef } from "react";
import pencilsBlackAndWhite from "./assets/black-white.jpg";
import pencilsColor from "./assets/color.jpg";
import ballColor from "./assets/ballColor.jpg";
import ballBlackWhite from "./assets/ballBlackWhite.jpg";

function App() {
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);

  const handlerHover = (ref, img) => {
    ref.current.src = img;
  };

  const handlerLeaveHover = (ref, img) => {
    ref.current.src = img;
  };

  return (
    <div>
      <img
        style={{ width: "300px" }}
        onMouseOver={() => {
          handlerHover(imageRef, pencilsColor);
        }}
        onMouseLeave={() => {
          handlerLeaveHover(imageRef, pencilsBlackAndWhite);
        }}
        ref={imageRef}
        src={pencilsBlackAndWhite}
        alt="black and white"
      />
      <img
        style={{ width: "300px" }}
        onMouseOver={() => {
          handlerHover(imageRef2, ballColor);
        }}
        onMouseLeave={() => {
          handlerLeaveHover(imageRef2, ballBlackWhite);
        }}
        ref={imageRef2}
        src={ballBlackWhite}
        alt="black and white"
      />
    </div>
  );
}
export default App;
