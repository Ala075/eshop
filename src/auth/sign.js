// Sign.js
import React, { useState } from "react";
import axios from "axios";
import Progress from "../components/progress";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import UsePFetch from "../Pages/usePFetch";
import "../components/style.css";
import img from "../asserts/arbre.jpg";

const Sign = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [repeatPwd, setRepeatPwd] = useState("");
    const [otp, setOtp] = useState("");
    const [currentStep, setCurrentStep] = useState(1);
    const circles = [1, 2, 3];

    const { isLoading, submitForm } = UsePFetch(
        "http://localhost:3001/signup",
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    const handleNext = async () => {
        // Add additional logic if needed before moving to the next step

        if (currentStep === 1) {
            // Validate StepOne fields if needed
            if (!user || !email) {
                alert("Please fill in all required fields.");
                return;
            } else {
                // If response is successful, move to the next step
                setCurrentStep(currentStep + 1);
                return;
            }
        } else if (currentStep === 2) {
            // Validate StepTwo fields if needed
            if (!pwd || !repeatPwd) {
                alert("Please fill in all required fields.");
                return;
            } else {
                // Fetch OTP from the API
                try {
                    const response = await axios("http://localhost:3001/OTP", {
                        method: "GET"
                    });

                    if (!response.data.ok) {
                        setOtp(response.data.otp); // Assign the actual OTP value
                    } else {
                        // Handle API response when 'ok' is false
                        console.error(
                            "Failed to fetch OTP:",
                            response.data.error
                        );
                        alert("Failed to fetch OTP. Please try again.");
                    }
                } catch (error) {
                    // Handle API call error
                    console.error("API call failed:", error.message);
                    alert("Failed to fetch OTP. Please try again.");
                }

                // If response is successful, move to the next step
                setCurrentStep(currentStep + 1);
                return;
            }
        } else if (currentStep === 3) {
            // Validate StepThree fields if needed
            if (!otp) {
                alert("Please enter the OTP.");
                return;
            }
        }
    };

    const handlePrev = () => {
        // Add additional logic if needed before moving to the previous step
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();

        handleNext();

        // If all steps are validated, create the form data to send
        const formData = {
            name: user,
            password: pwd,
            email: email,
            otp: otp
        };

        try {
            // Call the submitForm function to make the API request
            await submitForm(formData);

            // Move to the next step
            if (currentStep < circles.length) {
                setCurrentStep(currentStep + 1);
            }
        } catch (error) {
            // Handle API call error (display error message, log, etc.)
            console.error("API call failed:", error.message);
            alert("Failed to create an account. Please try again.");
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <StepOne
                        user={user}
                        email={email}
                        setUser={setUser}
                        setEmail={setEmail}
                    />
                );
            case 2:
                return (
                    <StepTwo
                        pwd={pwd}
                        repeatPwd={repeatPwd}
                        setPwd={setPwd}
                        setRepeatPwd={setRepeatPwd}
                    />
                );
            case 3:
                return <StepThree otp={otp} setOtp={setOtp} />;
            default:
                return null;
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
                            <form
                                className="form"
                                id="form1"
                                onSubmit={handleSubmit}
                            >
                                <div className="head_form">
                                    <span>Sign Up</span>
                                    <p>Create a new account</p>
                                </div>
                                <Progress
                                    currentStep={currentStep}
                                    setCurrentStep={setCurrentStep}
                                    circles={circles}
                                    handleNext={handleNext}
                                    handlePrev={handlePrev}
                                />

                                {renderStep()}

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
                                            disabled={isLoading}
                                        >
                                            {isLoading
                                                ? "Creating account..."
                                                : currentStep === 3
                                                ? "Submit"
                                                : "Next"}
                                        </button>
                                    </div>
                                    <p>
                                        Already have an account,{" "}
                                        <span>Sign-In</span>
                                    </p>
                                    <div className="or">
                                        <span>OR</span>
                                    </div>

                                    <p>
                                        <i className="fa-brands fa-google"></i>{" "}
                                        Sign in with Google
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sign;
