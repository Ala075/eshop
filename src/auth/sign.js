import "../components/style.css";
import img from "../asserts/arbre.jpg";
import Progress from "../components/progress";
import { useState } from "react";
import axios from "axios";
import UsePFetch from "../Pages/usePFetch";

function Sign() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [otp,setOtp] = useState("Hello");

  const [currentStep, setCurrentStep] = useState(1);
  const circles = [1, 2, 3];

  const { isLoading, error, data, submitForm } = UsePFetch(
    "https://api-vs0.vercel.app/signup");
    
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the form data to send
    const formData = {
      name: user,
      password: pwd,
      email: email,
    };

    // Call the submitForm function to make the API request
    currentStep === circles.length && !error && submitForm(formData);
  };
  
  const handleNext = async () => {
      if (currentStep < circles.length) {
              const response = await axios("https://api-vs0.vercel.app/OTP", {
        method: "GET",
              });

              if (!response.data.ok) {
              setCurrentStep(currentStep + 1);
              setOtp(response.data.otp); // Assign the actual OTP value
              }
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
                <Progress
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  circles={circles}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                /><p>{otp}</p>
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
                  <div className="btns">
                    <button
                      id="prev"
                      onClick={handlePrev}
                      disabled={currentStep === 1}
                    >
                      <i className="fa-solid fa-reply"></i>
                    </button>

                    <button
                      type="submit"
                      id="next"
                      onClick={handleNext}
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create account"}
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
