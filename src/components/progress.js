import React from "react";
import "./progress.css"; // Make sure to adjust the import path for your CSS

function Progress(props) {
  
  return (
    <div className="pcontainer">
      <div className="steps">
        {props.circles.map((circleNumber, index) => (
          <span
            key={circleNumber}
            className={`circle ${index < (props.currentStep) ? "active" : ""}`}
          >
            {circleNumber}
          </span>
        ))}
        
        <div className="progress-bar">
          <span
            className="indicator"
            style={{
              width: `${((props.currentStep - 1) / (props.circles.length - 1)) * 100}%`,
            }}
          ></span>
        </div>
        </div>
      </div>
      
      
  );
}

export default Progress;
