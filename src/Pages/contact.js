import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-top: 50px;
    background-color:whitesmoke;
    padding:20px 5px;
`;

const ContactInput = styled.input`
    width: 80%;
    background-color:var(--primaryColor1);
    color:white;
    padding: 15px;
    margin-bottom: 20px;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const ContactTextArea = styled.textarea`
    width: 80%;
    background-color:var(--primaryColor1);
    color:white;
    height: 200px;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const ContactButton = styled.button`
    padding: 13px 40px;
    background-color: #227ab4;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: black;
        color:white;
    }
`;

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <ContactContainer>
            <h1>Contact Us</h1>
            <ContactForm onSubmit={handleSubmit}>
                <ContactInput type="text" placeholder="Name" required />
                <ContactInput type="email" placeholder="Email" required />
                <ContactTextArea placeholder="Message" required />
                <ContactButton type="submit">Send Reclamation</ContactButton>
            </ContactForm>
        </ContactContainer>
    );
};

export default Contact;
