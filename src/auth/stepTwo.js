import React from "react";

const StepTwo = ({ pwd, repeatPwd, setPwd, setRepeatPwd }) => (
  <>
    <label htmlFor="pwd">Password</label>
    <input
      type="password"
      id="pwd"
      placeholder="Enter a strong password"
      value={pwd}
      onChange={(e) => setPwd(e.target.value)}
    />
    <label htmlFor="repeatPwd">Repeat Password</label>
    <input
      type="password"
      id="repeatPwd"
      placeholder="Repeat the password"
      value={repeatPwd}
      onChange={(e) => setRepeatPwd(e.target.value)}
    />
  </>
);

export default StepTwo;
