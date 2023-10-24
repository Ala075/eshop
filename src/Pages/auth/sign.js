import "../components/style.css";
import img from "../asserts/arbre.jpg";
import Progress from "../components/progress";
import { useState } from "react";
import UsePFetch from "../usePFetch";

function Sign() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  
  const [currentStep, setCurrentStep] = useState(1);
  const circles = [1, 2, 3];

  const { isLoading, error, data, submitForm } = UsePFetch(
    "http://localhost:8000/Users",
    {
      headers: {
        // Add any additional headers here if needed
        "Content-Type": "application/json",
      },
    }
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the form data to send
    const formData = {
      naame: user,
      password: pwd,
      email: email,
    };

    // Call the submitForm function to make the API request
    (currentStep == circles.length && !error) &&  submitForm(formData);
  };
  const handleNext = () => {
    if (currentStep < circles.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="content">
            <div className="img">
              <img src={img} alt="" />
            </div>

            <div className="box">
              <form className="form" id="form1" onSubmit={handleSubmit}>
                <div className="head_section">
                  <p>Sign Up</p>
                  <span>Create a new account</span>
                </div>
                <Progress currentStep={currentStep}
setCurrentStep={setCurrentStep} circles={circles} handleNext={handleNext} handlePrev={handlePrev}/>
                <label htmlFor="user">Username</label>
                <input
                  type="text"
                  id="user"
                  placeholder="Enter a name"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter an email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="pwd">Password</label>
                <input
                  type="password"
                  id="pwd"
                  placeholder="Enter a strong password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />

                <div className="log">
                  <div className="btns"><button id="prev" onClick={handlePrev} disabled={currentStep === 1}>
                      <i className="fa-solid fa-reply"></i>
                  </button>
                  
                  <button type="submit" id="next" onClick={handleNext} disabled={isLoading }>
                  {isLoading ? "Creating account..." : "Create account"}
                  <svg viewBox="0 0 36 26">
                      <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                      <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                  </svg>
                  </button>
                </div>
                   <p>
                    Already have an account, <span>Sign-In</span>
                  </p>
                  <div className="or">
                    <span>OR</span>
                    
                  </div>

                  <p>
                    <i className="fa-brands fa-google"></i> Sign in with google
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Sign;
