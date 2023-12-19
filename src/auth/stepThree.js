import React from "react";

const StepThree = ({ otp, setOtp }) => (
  <>
    <label htmlFor="otp">OTP Verification</label>
    <input
      type="text"
      id="otp"
      placeholder="Enter the OTP"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
    />
  </>
);

export default StepThree;
