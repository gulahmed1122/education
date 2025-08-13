import React from "react";
import "../../index.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-wrapper">
        <video 
          className="custom-video" 
          src="https://www.w3schools.com/html/mov_bbb.mp4"  
          controls 
          autoPlay 
          muted 
        />
      </div>
    </section>
  );
};

export default VideoSection;
