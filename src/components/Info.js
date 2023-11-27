import React from 'react';
import { FormContext } from './App';
import './Info.css';

const Info = ({ isFormValidRef }) => {
  const { formData, updateFormData } = React.useContext(FormContext);

  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const phoneRef = React.useRef(null);

  const [ nameError, setNameError ] = React.useState('');
  const [ emailError, setEmailError ] = React.useState('');
  const [ phoneError, setPhoneError ] = React.useState('');

  const isFormValid = () => {
    const nameInput = nameRef.current;
    const emailInput = emailRef.current;
    const phoneInput = phoneRef.current;

    let haveErrors = false;

    if (phoneInput.value === "") {
      phoneInput.focus();
      setPhoneError("Please enter your phone number.");
      haveErrors = true;
    }
    else {
      setPhoneError("");
    }

    if (emailInput.value === "") {
      emailInput.focus();
      setEmailError("Please enter your email.");
      haveErrors = true;
    }
    else {
      setEmailError("");
    }

    if (nameInput.value === "") {
      nameInput.focus();
      setNameError("Please enter your name.");
      haveErrors = true;
    }
    else {
      setNameError("");
    }
    return !haveErrors;
  }

  isFormValidRef.current = isFormValid;

  return (
    <React.Fragment>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      
      <form className="infoForm">
        <div>
          <label htmlFor="name">Name</label>
          <p className="formError">{nameError}</p>
        </div>
        <input ref={nameRef} type="text" id="name" name="name" placeholder="Name" className={nameError?"error":""}/>

        <div>
          <label htmlFor="email">Email Address</label>
          <p className="formError">{emailError}</p>
        </div>
        <input ref={emailRef} type="email" id="email" name="email" placeholder="Email" className={emailError?"error":""}/>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <p className="formError">{phoneError}</p>
        </div>
        <input ref={phoneRef} type="tel" id="phone" name="phone" placeholder="e.g. +1 234 567 890" className={phoneError?"error":""}/>
      </form>
    </React.Fragment>
  );
}

export default Info;
