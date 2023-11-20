"use client";
import React, { useEffect, useState } from "react";
import Layout from "../shared/userLayout";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const SignUp = () => {
  const [credentials, setCredential] = useState({
    name: "",
    number: "",
    address: "",
    city: "",
    state: "",
    OTP: "",
    password: "",
    otpSent: false,
    otpVerified: false,
  });

  const signUpValidation = Yup.object().shape({
    name: Yup.string().required("*Name is Required"),
    number: Yup.number()
      .required("*Number is Required")
      .min(1111111111, "*Number must be at least 10 digits")
      .max(9999999999, "*Number must be at most 10 digits"),
    address: Yup.string().required("*Address is Required"),
    city: Yup.string().required("*City is Required"),
    state: Yup.string().required("*State is Required"),
    OTP: Yup.number()
      .required("*OTP is Required")
      .test(
        "len",
        "*OTP should be exactly 4 digits",
        (val) => String(val).length === 4
      ),
    password: Yup.string().required("*Password is Required").min(5).max(8),
  });

  const handleAddressChange = (address: any) => {
    setCredential((info) => ({ ...info, address }));
  };

  const signUp = (info: any, { setSubmitting, resetForm }: any) => {
    console.log(credentials, info);
    console.log("Sign Up");

    // Additional logic for sign up

    setCredential({
      name: "",
      number: "",
      address: "",
      city: "",
      state: "",
      OTP: "",
      password: "",
      otpSent: false,
      otpVerified: false,
    });

    resetForm();
  };

  return (
    <Layout title="Sign Up">
      <Grid
        container
        className="px-20 w-full object-contain rounded-xl bg-cover my-5 "
      >
        <Grid
          item
          xs={6}
          className="bg-[url('/login.jpg')] bg-center bg-cover rounded-tl-xl rounded-bl-xl flex justify-center flex-col p-10 items-center "
        >
          <Typography
            variant="h5"
            component="h1"
            className="text-2xl my-5 font-bold"
          >
            Welcome To Quick Cart
          </Typography>
          <Typography
            variant="body1"
            className="mt-5 text-gray-950 backdrop-filter"
          >
            Discover a world of convenience and fast shopping at Quick Cart.
            Join us today for an amazing shopping experience!
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginBottom: "1rem",
              color: "#333",
              textAlign: "center",
            }}
            className="mt-5 text-gray-500"
          >
            Already have an account? <Link href={"/signin"} className="text-dark" >Login</Link>
          </Typography>
        </Grid>
        <Grid item xs={6} className="h-full ">
          <Formik
            initialValues={credentials}
            onSubmit={signUp}
            validationSchema={signUpValidation}
            validateOnChange
          >
            {({ errors, touched, isValid }) => (
              <Form className="border-[1px] border-gray-300 rounded-tr-xl rounded-br-xl   bg-background_3 flex justify-center p-5 items-center h-full ">
                <FormControl>
                  <FormGroup>
                    <Box className="flex  flex-col items-start">
                      {/* Name Field */}
                      <FormControlLabel
                        control={
                          <Field
                            className="my-3"
                            label="Name"
                            size="small"
                            as={TextField}
                            name="name"
                          />
                        }
                        label="Name"
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />
                      {touched.name && errors.name && (
                        <Typography color="error" variant="caption">
                          {errors.name}
                        </Typography>
                      )}

                      {/* Number Field */}
                      <FormControlLabel
                        control={
                          <Field
                            className="my-3"
                            label="Number"
                            size="small"
                            type="number"
                            as={TextField}
                            name="number"
                            disabled={credentials.otpSent}
                          />
                        }
                        label="Mobile Number"
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />
                      {touched.number && errors.number && (
                        <Typography color="error" variant="caption">
                          {errors.number}
                        </Typography>
                      )}
                      {touched.number &&
                        !errors.number &&
                        !credentials.otpSent && (
                          <Button
                            variant="text"
                            className="self-center"
                            disabled={!!errors.number}
                            onClick={() =>
                              setCredential((info) => ({
                                ...info,
                                otpSent: true,
                              }))
                            }
                          >
                            Send
                          </Button>
                        )}

                      {/* Address Field */}

                      {/* City Field */}
                      <FormControlLabel
                        control={
                          <Field
                            className="my-3"
                            label="City"
                            size="small"
                            as={TextField}
                            name="city"
                          />
                        }
                        label="City"
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />
                      {touched.city && errors.city && (
                        <Typography color="error" variant="caption">
                          {errors.city}
                        </Typography>
                      )}

                      {/* State Field */}
                      <FormControlLabel
                        control={
                          <Field
                            className="my-3"
                            label="State"
                            size="small"
                            as={TextField}
                            name="state"
                          />
                        }
                        label="State"
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />
                      {touched.state && errors.state && (
                        <Typography color="error" variant="caption">
                          {errors.state}
                        </Typography>
                      )}

                      {/* OTP Field */}
                      <FormControlLabel
                        control={
                          <Field
                            className="my-3"
                            label="OTP"
                            size="small"
                            type="number"
                            as={TextField}
                            name="OTP"
                            disabled={credentials.otpVerified}
                          />
                        }
                        label="OTP"
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />
                      {touched.OTP && errors.OTP && (
                        <Typography color="error" variant="caption">
                          {errors.OTP}
                        </Typography>
                      )}

                      {/* Password Field */}
                      <FormControlLabel
                        control={
                          <Field
                            className="my-3"
                            label="Password"
                            size="small"
                            as={TextField}
                            name="password"
                          />
                        }
                        label="Password"
                        className="flex  mx-0 flex-col-reverse items-start my-2"
                      />
                      {touched.password && errors.password && (
                        <Typography color="error" variant="caption">
                          {errors.password}
                        </Typography>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={!isValid && !credentials.otpVerified}
                      >
                        {" "}
                        Sign Up
                      </Button>
                    </Box>
                  </FormGroup>
                </FormControl>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default SignUp;
