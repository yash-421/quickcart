"use client";
import AdminLayout from "@/app/shared/adminLayout";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Pagination,
  Button,
  Typography,
  Box,
  Modal,
  Backdrop,
  Fade,
  Divider,
  FormControl,
  FormGroup,
  FormControlLabel,
  TextField,
  styled,
} from "@mui/material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { FaPlus, FaRegEdit, FaTimes } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { MdDelete, MdFileUpload } from "react-icons/md";
import * as Yup from "yup";

interface Values {
  name: string;
  image: File | null;
}

const Category = () => {
  const [open, setOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateValue, setUpdateValue] = useState<{
    name: string;
    imagesrc: string;
    image: File | null;
  }>({
    name: "",
    imagesrc: "",
    image: null,
  });

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleSubmit = (values: any, FormikHelper: any) => {
    // Your form submission logic goes here
    console.log(values);

    // Close the modal
    setOpen(false);

    // Simulate an asynchronous operation
    setTimeout(() => {
      // Reset the form and set submitting to false
      FormikHelper.resetForm();
      FormikHelper.setSubmitting(false);
    }, 1000);
  };

  const addFormValidation = Yup.object().shape({
    name: Yup.string().required("*Category name is required"),
    image: Yup.mixed().required("*Image is required"),
  });

  return (
    <AdminLayout title="Category">
      <Paper
        sx={{ width: "100%", overflow: "hidden" }}
        className="p-10 border-[1px] shadow-none rounded-lg"
      >
        <div className="content flex justify-between mb-7 px-5">
          <Typography variant="h5" component="h1">
            Add Category
          </Typography>
          <Button variant="contained" onClick={() => setOpen(true)}>
            <FaPlus className="text-xl mr-1" /> Add
          </Button>
        </div>

        <TableContainer className="border-[1px]">
          <Table stickyHeader aria-label="sticky table">
            <TableHead className="bg-primary">
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Category Name </TableCell>
                <TableCell>Category Image </TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1 </TableCell>
                <TableCell>Eggs </TableCell>
                <TableCell>
                  <img
                    src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png"
                    alt="category image"
                    className="w-[100px] h-[100px]"
                  />{" "}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Typography
                      component="a"
                      variant="subtitle1"
                      onClick={() => {
                        setUpdateModal(true);
                        setUpdateValue({
                          name: "Eggs",
                          imagesrc:
                            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
                          image: null,
                        });
                      }}
                    >
                      <FaRegEdit className=" cursor-pointer text-xl mx-1" />
                    </Typography>
                    <Typography
                      component="a"
                      variant="subtitle1"
                      onClick={() => setDeleteModal(true)}
                    >
                      <MdDelete className=" cursor-pointer text-xl mx-1" />
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={10}
          color="primary"
          className=" mt-5 w-full"
          variant="outlined"
          shape="rounded"
        />
      </Paper>

      {/* Add Category */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="z-[9999999999] overflow-auto"
      >
        <Box className="bg-white md:max-w-[700px] sm:max-w-[100%] w-[500px] absolute left-1/2 top-10 -translate-x-1/2  rounded-xl">
          <div className="modal-header flex justify-between w-full p-5">
            <Typography component="h5" variant="h6">
              Category
            </Typography>
            <Button
              variant="text"
              className="text-2xl"
              onClick={() => setOpen(false)}
            >
              <LiaTimesSolid />
            </Button>
          </div>
          <Divider />
          <Formik
            initialValues={{ name: "", image: null }}
            validationSchema={addFormValidation}
            onSubmit={handleSubmit}
          >
            {({
              isSubmitting,
              isValid,
              touched,
              errors,
              values,
              setFieldValue,
            }) => (
              <Form className="flex w-full justify-start p-5 items-center">
                <Box className="flex w-full flex-col items-start">
                  <FormControl className="w-full">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Field
                            className="mt-2"
                            as={TextField}
                            name="name"
                            size="small"
                            label="Category"
                          />
                        }
                        label={"Category Name"}
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />
                      {touched.name && errors.name && (
                        <Typography
                          color="error"
                          variant="caption"
                          component="p"
                        >
                          {errors.name}
                        </Typography>
                      )}
                      <FormControlLabel
                        control={
                          values.image == null ? (
                            <Button
                              component="label"
                              variant="contained"
                              startIcon={<MdFileUpload />}
                            >
                              Upload file
                              <VisuallyHiddenInput
                                type="file"
                                accept="image/*"
                                name="image"
                                onChange={(event) => {
                                  const file =
                                    event.currentTarget.files &&
                                    event.currentTarget.files[0];
                                  setFieldValue("image", file || null);
                                }}
                              />
                            </Button>
                          ) : (
                            <div className=" relative mt-2">
                              <img
                                src={URL.createObjectURL(values.image)}
                                alt="Selected Image"
                                className="ml-3 max-h-20"
                              />
                              <FaTimes
                                className="absolute -right-4 text-2xl -top-3 text-red-600"
                                onClick={() => setFieldValue("image", null)}
                              />
                            </div>
                          )
                        }
                        label={"Category image"}
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />
                      {touched.image && errors.image && (
                        <Typography
                          color="error"
                          variant="caption"
                          component="p"
                        >
                          {errors.image}
                        </Typography>
                      )}
                    </FormGroup>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting || !isValid}
                      className="mt-2 self-center"
                    >
                      Submit
                    </Button>
                  </FormControl>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>

      {/* Update Category  */}

      <Modal
        open={updateModal}
        onClose={() => setUpdateModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="z-[9999999999] overflow-auto"
      >
        <Box className="bg-white md:max-w-[700px] sm:max-w-[100%] w-[500px] absolute left-1/2 top-10 -translate-x-1/2  rounded-xl">
          <div className="modal-header flex justify-between w-full p-5">
            <Typography component="h5" variant="h6">
              Update Category
            </Typography>
            <Button
              variant="text"
              className="text-2xl"
              onClick={() => setUpdateModal(false)}
            >
              <LiaTimesSolid />
            </Button>
          </div>
          <Divider />
          <Formik
            initialValues={updateValue}
            validationSchema={addFormValidation}
            onSubmit={handleSubmit}
          >
            {({
              isSubmitting,
              isValid,
              touched,
              errors,
              values,
              setFieldValue,
            }) => (
              <Form className="flex w-full justify-start p-5 items-center">
                <Box className="flex w-full flex-col items-start">
                  <FormControl className="w-full">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Field
                            className="mt-2"
                            as={TextField}
                            name="name"
                            size="small"
                            label="Category"
                          />
                        }
                        label={"Category name"}
                        // Remove the label prop for TextField
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />
                      {touched.name && errors.name && (
                        <Typography
                          color="error"
                          variant="caption"
                          component="p"
                        >
                          {errors.name}
                        </Typography>
                      )}
                      <FormControlLabel
                        control={
                          updateValue.imagesrc != "" ? (
                            <div className=" relative mt-2">
                              <img
                                src={updateValue.imagesrc}
                                alt="category image"
                                className="w-[100px] h-[100px]"
                              />
                              <FaTimes
                                className="absolute -top-4 -right-3 text-red-500"
                                onClick={() =>
                                  setUpdateValue((value) => ({
                                    ...value,
                                    imagesrc: "",
                                  }))
                                }
                              />
                            </div>
                          ) : (
                            <Button
                              component="label"
                              variant="contained"
                              startIcon={<MdFileUpload />}
                            >
                              Upload file
                              <VisuallyHiddenInput
                                type="file"
                                accept="image/*"
                                name="image"
                                onChange={(event) => {
                                  const file =
                                    event.currentTarget.files &&
                                    event.currentTarget.files[0];
                                  setFieldValue("image", file || null);
                                  setUpdateValue((value) => ({
                                    ...value,
                                    imagesrc: file
                                      ? URL.createObjectURL(file)
                                      : "",
                                    image: file || null,
                                  }));
                                }}
                              />
                            </Button>
                          )
                        }
                        label={"Category Image"}
                        className="flex mx-0 flex-col-reverse items-start my-2"
                      />

                      {touched.image && errors.image && (
                        <Typography
                          color="error"
                          variant="caption"
                          component="p"
                        >
                          {errors.image}
                        </Typography>
                      )}
                    </FormGroup>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting || !isValid}
                      className="mt-2 self-center"
                    >
                      Submit
                    </Button>
                  </FormControl>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>

      {/* Delete Modal */}

      <Modal
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="z-[9999999999] overflow-auto"
      >
        <Box className="bg-white md:max-w-[700px] sm:max-w-[100%] w-[500px] absolute left-1/2 top-10 -translate-x-1/2  rounded-xl">
          <div className="modal-header flex justify-between w-full p-5">
            <Typography component="h5" variant="h6">
              Delete Category
            </Typography>
            <Button
              variant="text"
              className="text-2xl"
              onClick={() => setDeleteModal(false)}
            >
              <LiaTimesSolid />
            </Button>
          </div>
          <Divider />

          <Typography variant="h6" component="h5" className="my-5 px-5">
            Are your sure want to delete ?
          </Typography>
          <Divider />

          <div className="buttons w-full flex justify-end my-5">
            <Button className="mx-2" variant="contained" color="secondary">Cancel</Button>
            <Button className="mx-2" variant="contained" color="primary">Confirm</Button>
          </div>
        </Box>
      </Modal>
    </AdminLayout>
  );
};

export default Category;
