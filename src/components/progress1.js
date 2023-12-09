import "./progress.css";

//DOM Elements
const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator"),
  buttons = document.querySelectorAll("button");

let currentStep = 1;

// function that updates the current step and updates the DOM
const updateSteps = (e) => {
  // update current step based on the button clicked
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  // loop through all circles and add/remove "active" class based on their index and current step
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });

  // update progress bar width based on current step
  progressBar.style.width = `${
    ((currentStep - 1) / (circles.length - 1)) * 100
  }%`;

  // check if current step is last step or first step and disable corresponding buttons
  if (currentStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currentStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
  }
};

// add click event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
});
function Progress() {
  return (
    <div className="pcontainer">
      <div className="steps">
        <span className="circle active">1</span>
        <span className="circle">2</span>
        <span className="circle">3</span>
        <div className="progress-bar">
          <span className="indicator"></span>
        </div>
      </div>
      <div className="buttons">
        <button id="prev" disabled>
          Prev
        </button>
        <button id="next">Next</button>
      </div>
    </div>
  );
}
export default Progress;
