"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  FormControlLabel,
  FormControl,
  FormGroup,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { deepOrange } from "@mui/material/colors";
import { Formik, Field, Form, FormikFormProps, FormikValues } from "formik";
import * as Yup from "yup";
import Layout from "../shared/userLayout";
import { MdModeEdit } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const UserProfilePage = () => {
  const user = useSelector((state: RootState) => state.user.value);
  const [formDisable, setFormDisable] = useState<boolean>(true);

  // Extend the existing validation schema with email validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Your Name is required"),
    address: Yup.string().required("Your Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    number: Yup.number()
      .required("Your Number Is required")
      .test("len", "Number must be exactly 10 digits", (val: any) => {
        return val && val.toString().length === 10;
      }),
  });

  const handleSubmit = (values: FormikValues, { setSubmitting }: any) => {
    const allFieldsFilled = Object.values(values).every((value) => !!value);

    if (allFieldsFilled) {
      console.log(values);
      setSubmitting(false);
    }
  };

  return (
    <Layout title="My Profile">
      <Grid container className="px-5 my-5" rowGap={5}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            className=" text-center underline underline-offset-8 drop-shadow-2xl font-semibold"
            component="h1"
          >
            {" "}
            My Profile
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{ color: "text.secondary" }}
            className="flex flex-col items-center justify-center h-full"
          >
            <Avatar
              sx={{ bgcolor: deepOrange[500] }}
              className="h-40 w-40 text-5xl"
            >
              {user.name.charAt(0)}
            </Avatar>
            <Typography
              variant="body1"
              sx={{ mb: 2 }}
              className="mt-5 text-2xl"
            >
              Welcome, {user.name}!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Card className="rounded-2xl hover:shadow-xl shadow-none border-[1px] border-gray-300 relative p-5">
            <CardContent className="flex justify-center ">
              <Formik
                initialValues={{
                  name: user.name,
                  address: user.address,
                  email: user.email,
                  number: user.number,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange
              >
                {({ isSubmitting, isValid, touched, errors }) => (
                  <Form>
                    <FormControl
                      component="fieldset"
                      variant="standard"
                      disabled={formDisable}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Field size="small" as={TextField} name="name" />
                          }
                          label="Your Name"
                          className="flex mx-0 flex-col-reverse items-start my-4"
                        />
                        {touched.name && errors.name && (
                          <Typography color="error" variant="caption">
                            * {errors.name}
                          </Typography>
                        )}

                        <FormControlLabel
                          control={
                            <Field size="small" as={TextField} name="address" />
                          }
                          label="Your Address"
                          className="flex mx-0 flex-col-reverse items-start my-4"
                        />
                        {touched.address && errors.address && (
                          <Typography color="error" variant="caption">
                            * {errors.address}
                          </Typography>
                        )}

                        <FormControlLabel
                          control={
                            <Field size="small" as={TextField} name="email" />
                          }
                          label="Email"
                          className="flex mx-0 flex-col-reverse items-start my-4"
                        />
                        {touched.email && errors.email && (
                          <Typography color="error" variant="caption">
                            * {errors.email}
                          </Typography>
                        )}

                        <FormControlLabel
                          control={
                            <Field
                              size="small"
                              as={TextField}
                              type="number"
                              name="number"
                            />
                          }
                          label="Number"
                          className="flex mx-0 flex-col-reverse items-start my-4"
                        />
                        {touched.number && errors.number && (
                          <Typography color="error" variant="caption">
                            * {errors.number}
                          </Typography>
                        )}
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          className="mx-0 self-center mt-2 "
                          disabled={isSubmitting || !isValid || formDisable}
                        >
                          Update
                        </Button>
                      </FormGroup>
                    </FormControl>
                  </Form>
                )}
              </Formik>

              <Button
                variant="text"
                className=" absolute top-2 right-2 text-2xl"
                onClick={() => setFormDisable((state) => !state)}
              >
                <FiEdit />
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default UserProfilePage;
