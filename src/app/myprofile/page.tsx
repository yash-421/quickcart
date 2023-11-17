"use client"
import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Layout from "../shared/userLayout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const UserProfilePage = () => {
  // Assume user data is available in the Redux store
  const user = useSelector((state: RootState) => state.user.value);

  return (
    <Layout title="My Profile">
      <Grid container className="px-5" rowGap={5}>
        <Grid item xs={8} className="my-5">
          <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
            My Profile
          </Typography>
          <Box sx={{ color: "text.secondary" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Welcome, {user.name}!
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Name:</strong> {user.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Address:</strong> {user.address}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Mobile Number:</strong> {user.mobileNumber}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              To update your profile information, click the button below:
            </Typography>
            <Button variant="contained" color="primary">
              Update Profile
            </Button>
          </Box>
        </Grid>
        {/* Additional content or components can be added as needed */}
      </Grid>
    </Layout>
  );
};

export default UserProfilePage;
