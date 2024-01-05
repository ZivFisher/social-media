import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import AuthForm from "components/AuthForm/AuthForm";
import React from "react";

const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        bgcolor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Social Media
        </Typography>
      </Box>
      <Box
        p="2rem"
        m="2rem auto"
        width={isNonMobileScreens ? "50%" : "93%"}
        borderRadius="1.5rem"
        bgcolor={theme.palette.background.alt}
      >
        <Typography variant="h5" fontWeight="500" marginBottom="1.5rem">
          Welcome to social media, the social media for familiy and friends.
        </Typography>
        <AuthForm />
      </Box>
    </Box>
  );
};

export default Login;
