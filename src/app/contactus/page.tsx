// ContactUsPage.jsx
"use client";
import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import Layout from "../shared/userLayout";

const ContactUsPage = () => {
  return (
    <Layout title="Contact Us">
      <Grid container spacing={4}>
        <Grid item xs={6} className="p-20">
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography>
            Have questions or feedback? Reach out to us using the form below.
          </Typography>
          <form>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Your Number"
              variant="outlined"
              fullWidth
              type="number"
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button variant="contained" color="primary" className="text-white" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
        <Grid xs={6} className="h-full flex items-center justify-center p-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15066.29968377462!2d72.97537758171663!3d19.257348918968702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bbf2c465948f%3A0xc7f8b5e5d69854f1!2sHiranandani%20Estate%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700146791853!5m2!1sen!2sin"
            width="600"
            height="500"
            allowFullScreen
            className="m-auto"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContactUsPage;
