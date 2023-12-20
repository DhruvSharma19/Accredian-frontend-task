import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Alert,
  Stack,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

// Function to validate email format
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

// Main Login component
export default function Login() {
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State for input values
  const [emailInput, setEmailInput] = useState('');
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // State for input errors
  const [emailError, setEmailError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // State for overall form validity and success message
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handlers to toggle password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Validation for onBlur Email
  const handleEmail = () => {
    setEmailError(!isEmail(emailInput));
  };

  // Custom validation for onBlur UserName (Add your logic if needed)
  const handleUserName = () => {
    setUserNameError(false);
  };

  // Validation for onBlur Password
  const handlePassword = () => {
    const isValidPassword = passwordInput.length >= 5 && passwordInput.length <= 20;
    setPasswordError(!isValidPassword);
  };

  // Submission handler
  const handleSubmit = () => {
    setSuccess(null);

    // Check for errors before submission

    // If Email error is true
    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }

    // If Password error is true
    if (passwordError || !passwordInput) {
      setFormValid("Password is set between 5 - 20 characters long. Please Re-Enter");
      return;
    }

    // Reset form validity
    setFormValid(null);

    // Proceed to use the information passed

    // Show Successful Submission
    setSuccess("Form Submitted Successfully");
  };

  // JSX rendering
  return (
    <div>
      {/* Email input field */}
      <div style={{ marginTop: "5px" }}>
        <TextField
          label="Email Address"
          fullWidth
          error={emailError}
          variant="standard"
          sx={{ width: "100%" }}
          value={emailInput}
          size="small"
          onBlur={handleEmail}
          onChange={(event) => setEmailInput(event.target.value)}
        />
      </div>

      {/* UserName input field */}
      <div style={{ marginTop: "5px" }}>
        <TextField
          label="UserName"
          fullWidth
          error={userNameError}
          variant="standard"
          sx={{ width: "100%" }}
          value={userInput}
          size="small"
          onBlur={handleUserName}
          onChange={(event) => setUserInput(event.target.value)}
        />
      </div>

      {/* Password input field */}
      <div style={{ marginTop: "5px" }}>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel error={passwordError} htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            error={passwordError}
            onBlur={handlePassword}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(event) => setPasswordInput(event.target.value)}
            value={passwordInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      {/* Submit button */}
      <div style={{ marginTop: "10px" }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<LoginIcon />}
          onClick={handleSubmit}
        >
          LOGIN
        </Button>
      </div>

      {/* Display form error if any */}
      {formValid && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="error" size="small">
            {formValid}
          </Alert>
        </Stack>
      )}

      {/* Display success message if form is submitted successfully */}
      {success && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="success" size="small">
            {success}
          </Alert>
        </Stack>
      )}
    </div>
  );
}
