// StepOne.js
import React from "react";

const StepOne = ({ user, email, setUser, setEmail }) => (
    <>
        <label htmlFor="user">Username</label>
        <input
            type="text"
            id="user"
            placeholder="Enter a name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            aria-label="Username"
        />
        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            placeholder="Enter an email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
        />
    </>
);

export default StepOne;
