import React, { useState } from 'react';

const SignUpForm = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // States for input validation
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  // Function to handle email input change
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(newEmail));
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate password length
    setPasswordValid(newPassword.length >= 8);
  };

  // Function to handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // Validate password match
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Check if all inputs are valid
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form. Please check your inputs.");
    }
  };

  return (
    <div>
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        style={{ border: emailValid ? '1px solid green' : '1px solid red' }}
      />
      {!emailValid && <p>Error: Please enter a valid email address</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ border: passwordValid ? '1px solid green' : '1px solid red' }}
      />
      {!passwordValid && <p>Error: Password must be at least 8 characters long</p>}

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        style={{
          border: confirmPasswordValid ? '1px solid green' : '1px solid red',
        }}
      />
      {!confirmPasswordValid && <p>Error: Passwords do not match</p>}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUpForm;
