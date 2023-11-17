"use client"
import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Layout from "../shared/userLayout";

const TwentyFourSevenPage = () => {
  return (
    <Layout title="24/7 Support">
      <Grid container className="px-5 flex justify-center mb-10" rowGap={5}>
        <Grid item xs={10} className="my-5">
          <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
            24/7 Customer Support
          </Typography>
          <Box sx={{ color: "text.secondary" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              At QuickCart, your convenience is our priority. Our 24/7 customer
              support is designed to provide assistance whenever you need it.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Whether you're facing issues with your orders, have product
              inquiries, or just want to share your feedback, our dedicated
              support team is here to help.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Ways to reach us:
            </Typography>
            <ul className="my-10">
              <li className="my-5">
                <strong>Email:</strong> support@quickcart.com
              </li>
              <li className="my-5">
                <strong>Phone:</strong> 1-800-123-4567
              </li>
              <li className="my-5">
                <strong>Live Chat:</strong> Available on our website
              </li>
            </ul>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Our team of knowledgeable and friendly support agents is committed
              to resolving your queries promptly. We understand that issues can
              arise at any time, and we're here to provide solutions 24 hours a
              day, 7 days a week.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Additionally, you can use our self-service options for quick
              assistance. Explore our{" "}
              <Button variant="text" color="primary">
                FAQ section
              </Button>{" "}
              to find answers to commonly asked questions.
            </Typography>
            <Typography variant="body1">
              Your satisfaction is our top priority. Thank you for choosing
              QuickCart, where support is just a click or call away!
            </Typography>
          </Box>
        </Grid>
        
      </Grid>
    </Layout>
  );
};

export default TwentyFourSevenPage;
