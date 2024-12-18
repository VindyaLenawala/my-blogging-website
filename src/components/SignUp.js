import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import UserIcon from "../assets/icons/username-icon.png";
import EmailIcon from "../assets/icons/email-icon.png";
import PasswordIcon from "../assets/icons/password-icon.png";
import EyeClosed from "../assets/icons/eye-closed.png";
import EyeOpen from "../assets/icons/eye-open.png";
import GoogleIcon from "../assets/icons/continue-with-google.png";
import BackgroundImage from "../assets/images/sign-up-banner.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Card Container */}
      <Box
        sx={{
          width: 400,
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Join Us Today
        </Typography>

        {/* Full Name Input */}
        <TextField
          variant="outlined"
          placeholder="Full Name"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={UserIcon} alt="User Icon" width="20px" />
              </InputAdornment>
            ),
          }}
        />

        {/* Email Input */}
        <TextField
          variant="outlined"
          placeholder="Email"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={EmailIcon} alt="Email Icon" width="20px" />
              </InputAdornment>
            ),
          }}
        />

        {/* Password Input */}
        <TextField
          variant="outlined"
          placeholder="Password"
          fullWidth
          type={showPassword ? "text" : "password"}
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={PasswordIcon} alt="Password Icon" width="20px" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  <img
                    src={showPassword ? EyeOpen : EyeClosed}
                    alt="Toggle Password"
                    width="20px"
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Sign-Up Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "20px", fontWeight: "bold" }}
        >
          Sign Up
        </Button>

        {/* Divider */}
        <Divider sx={{ marginY: "20px" }} />

        {/* Continue with Google */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#f5f5f5",
            color: "#333",
            textTransform: "none",
            fontWeight: "bold",
          }}
          startIcon={<img src={GoogleIcon} alt="Google Icon" width="20px" />}
        >
          Continue With Google
        </Button>

        {/* Footer */}
        <Typography
          variant="body2"
          sx={{ marginTop: "10px", fontWeight: "bold" }}
        >
          Already a member?{" "}
          <Typography
            component="span"
            sx={{ color: "primary.main", cursor: "pointer" }}
          >
            Sign in here
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;