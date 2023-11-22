"use client";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik, FormikValues } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import * as Yup from "yup";

const Admin = () => {
  const [credentials, setCredential] = useState({ email: "", password: "" });
  const loginValidation = Yup.object().shape({
    email: Yup.string()
      .email("*Please enter valid email")
      .required("*Email is required"),
    password: Yup.string().required("*Password is required"),
  });

  const router = useRouter();

  let [showpassword, setShowPassword] = useState("password");

  const login = (values: FormikValues, { resetForm }: any) => {
    console.log(values);
    // setSubmitting(false);
    
    resetForm();
    if (values) {
      router.push("admin/dashboard");
    }
  };
  return (
    <Grid
      container
      className="flex justify-center items-center h-screen bg-background_3"
    >
      <Grid item xs={4}>
        <Card className="p-5 shadow-none">
          <CardContent>
            <Formik
              initialValues={credentials}
              validationSchema={loginValidation}
              onSubmit={login}
            >
              {({ isValid, errors, touched, isSubmitting }) => (
                <Form>
                  <FormControl>
                    <Typography
                      variant="h6"
                      className="font-semibold"
                      component="h1"
                    >
                      Welcome Back
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="font-light text-gray-400"
                      component="p"
                    >
                      Login to your account
                    </Typography>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Field
                            size="small"
                            as={TextField}
                            type="email"
                            label="Email"
                            variant="outlined"
                            className="m-2"
                            name="email"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <MdEmail />
                                </InputAdornment>
                              ),
                            }}
                          />
                        }
                        label="Email"
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />
                      {touched.email && errors.email && (
                        <Typography color="error" variant="caption">
                          {errors.email}
                        </Typography>
                      )}
                      <FormControlLabel
                        control={
                          <Field
                            size="small"
                            as={TextField}
                            type={showpassword}
                            label="Password"
                            variant="outlined"
                            className="m-2"
                            name="password"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <Button
                                    onClick={() =>
                                      showpassword == "password"
                                        ? setShowPassword("text")
                                        : setShowPassword("password")
                                    }
                                    className="min-w-0 w-full p-0 text-gray-400"
                                    variant="text"
                                  >
                                    {showpassword == "password" ? (
                                      <FaEye className="cursor-pointer" />
                                    ) : (
                                      <FaEyeSlash className="cursor-pointer" />
                                    )}
                                  </Button>
                                </InputAdornment>
                              ),
                            }}
                          />
                        }
                        label="Password"
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />
                      {touched.password && errors.password && (
                        <Typography color="error" variant="caption">
                          {errors.password}
                        </Typography>
                      )}

                      <Button
                        className="float-left self-start ml-2"
                        variant="contained"
                        disabled={!isValid}
                        type="submit"
                      >
                        Login
                      </Button>
                    </FormGroup>
                  </FormControl>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Admin;
