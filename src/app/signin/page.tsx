"use client";
import React, { useState } from "react";
import Layout from "../shared/userLayout";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [credentials, setCredential] = useState({
    number: "",
    OTP: "",
    password: "",
    otpSent: false,
    otpVerified: false,
  });

  const loginValidation = Yup.object().shape({
    number: Yup.number()
      .required("*Number is Required")
      .min(1111111111, "*Number must be at least 10 digits")
      .max(9999999999, "*Number must be at most 10 digits"),
    OTP: Yup.number()
      .required("*OTP is Required")
      .test(
        "len",
        "*OTP should be exactly 4 digits",
        (val) => String(val).length === 4
      ),
    password: Yup.string().required("*Password is Required").min(5).max(8),
  });

  const login = (info: any, { setSubmitting, resetForm }: any) => {
    console.log(credentials, info);
    console.log("hegwehjw");
    setCredential({
      number: "",
      OTP: "",
      password: "",
      otpSent: false,
      otpVerified: false,
    });
    resetForm();
  };

  return (
    <Layout title="Sign In">
      <Grid
        container
        className="px-20 h-[500px] w-full object-contain rounded-xl bg-cover my-5 "
      >
        <Grid item xs={6} className="bg-[url('/login.png')]">
          <Box className=""></Box>
        </Grid>
        <Grid item xs={6} className="p-10 py-2">
          <Formik
            initialValues={credentials}
            onSubmit={login}
            validationSchema={loginValidation}
            validateOnChange
          >
            {({ errors, touched, isValid }) => (
              <Form className="border-[1px] border-gray-300 rounded-xl bg-background_3 flex justify-center p-5 items-center h-full ">
                <FormControl>
                  <FormGroup>
                    <Box className="flex  flex-col items-start">
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
                      {  !credentials.otpSent && (
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
                    </Box>

                    {credentials.otpSent ? (
                      <FormControlLabel
                        control={
                          <Field
                            className="my-3"
                            label="Otp"
                            size="small"
                            type="number"
                            as={TextField}
                            name="OTP"
                            id="otp"
                            disabled={credentials.otpVerified}
                          />
                        }
                        label="OTP"
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />
                    ) : (
                      <></>
                    )}

                    {credentials.otpSent && touched.OTP && errors.OTP && (
                      <Typography color="error" variant="caption">
                        {errors.OTP}
                      </Typography>
                    )}

                    {credentials.otpSent && !credentials.otpVerified && (
                      <Button
                        variant="text"
                        className="self-center"
                        disabled={!!errors.OTP}
                        onClick={() =>
                          setCredential((info) => ({
                            ...info,
                            otpVerified: true,
                          }))
                        }
                      >
                        Verify
                      </Button>
                    )}

                    <FormControlLabel
                      control={
                        <Field
                          className="my-3"
                          label="Password"
                          size="small"
                          as={TextField}
                          name="password"
                          id="password"
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

                    <Button
                      type="submit"
                      variant="contained"
                      disabled={!isValid && !credentials.otpVerified}
                    >
                      {" "}
                      Sign In
                    </Button>
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

export default Login;