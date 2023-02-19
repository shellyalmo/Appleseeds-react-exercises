import React, { useRef } from "react";

function App() {
  const videoRef = useRef(null);
  const handlePause = () => {
    videoRef.current.pause();
  };
  const handleResume = () => {
    videoRef.current.play();
  };
  return (
    <div>
      <video width="500" ref={videoRef} src="./assets/video (1).mp4" controls />
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleResume}>Resume</button>
    </div>
  );
}
export default App;
