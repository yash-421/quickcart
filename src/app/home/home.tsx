"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  IconButton,
  MobileStepper,
  Paper,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  AiOutlineArrowRight,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import { PiShoppingCart } from "react-icons/pi";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { theme } from "../mui/theme";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    image: "images/banner-1.jpg",
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
    image: "images/banner-2.jpg",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    image: "images/banner-3.jpg",
  },
];
const colorClasses = [
  "bg-[#ECFFEC]",
  "bg-[#f2fce4]",
  "bg-[#feefea]",
  "bg-[#fff3ff]",
  "bg-[#f2fce4]",
  "bg-[#fff3eb]",
  "bg-[#fff3ff]",
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const [categories, setCategories] = useState([
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
  ]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };
  useEffect(() => {
    let next = setInterval(() => {
      handleNext();
    }, 5000);
    return () => {
      clearInterval(next);
    };
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className="flex flex-col items-center justify-center p-5 relative ">
          <Box className="min-w-[100%] min-h-[480px] flex flex-col justify-center  text-center relative ">
            <h6 className=" text-2xl font-extrabold text-center mb-5  ">
              {steps[activeStep].label}
            </h6>
            <span className=" text-center text-gray-950 font-semibold text-2xl w-2/3 self-center ">
              {steps[activeStep].description}
            </span>
            <img
              src={steps[activeStep].image}
              className="h-full w-full rounded-lg absolute opacity-60"
            />
          </Box>
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                className="absolute py-1 hover:bg-white hover:shadow-md active:shadow-none rounded-full px-1 min-w-[15px] top-[40%] right-10 bg-white -translate-x-2/4 translate-y-2/4   "
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                className="absolute py-1 hover:bg-white hover:shadow-md active:shadow-none rounded-full px-1 min-w-[15px] top-[40%] left-16 bg-white -translate-x-2/4 translate-y-2/4"
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <h6 className="pl-4 font-semibold text-lg">Featued Items</h6>
      </Grid>
      <Grid item xs={8} className="flex items-center justify-start">
        <Chip
          label="Chip Filled"
          className="mx-2 text-sm border-primary text-text hover:bg-primary hover:text-white cursor-pointer font-medium"
          variant="outlined"
        />
        <Chip
          label="Chip Filled"
          className="mx-2 text-sm border-primary text-text hover:bg-primary hover:text-white cursor-pointer font-medium"
          variant="outlined"
        />
        <Chip
          label="Chip Filled"
          className="mx-2 text-sm border-primary text-text hover:bg-primary hover:text-white cursor-pointer font-medium"
          variant="outlined"
        />
      </Grid>

      <Grid xs={12} item className="my-5 flex flex-wrap justify-center">
        {categories.slice(0, 7).map((category, index) => {
          const colorClass = colorClasses[index % colorClasses.length];
          return (
            <Card
              className={` ${colorClass} hover:text-primary shadow-none text-secondary_text  m-6 w-36 rounded-xl border-border_color1 hover:border-border_color2 hover:border-[1px] hover:shadow-box_shadow_2 card`}
              key={index}
            >
              <CardContent>
                <img
                  src={category.image}
                  className="object-contain hover:scale-[1.05]"
                  alt=""
                />
                <span className="font-semibold">{category.name} </span>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
      <Grid
        item
        xs={3.5}
        className=" ml-auto  h-76 bg-cover bg-center flex items-center justify-start rounded-lg  p-8"
        style={{
          backgroundImage:
            "url('https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-1.png')",
        }}
      >
        <div className="text-start flex flex-col items-center w-3/4">
          <span className="text-text text-2xl leading-9 mb-4 font-semibold ">
            Everyday Fresh & Clean with our products
          </span>
          <Button
            variant="contained"
            className="bg-primary mt-5 self-start text-white items-center justify-center"
          >
            Shop now{" "}
            <AiOutlineArrowRight className="text-xl font-bold align-middle ml-1" />{" "}
          </Button>
        </div>
      </Grid>
      <Grid
        item
        xs={3.5}
        className="h-76 mx-5   bg-cover bg-center flex items-center justify-start rounded-lg  p-8"
        style={{
          backgroundImage:
            "url('https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-2.png')",
        }}
      >
        <div className="text-start flex flex-col items-center w-3/4">
          <span className="text-text text-2xl leading-9 mb-4 font-semibold ">
            Everyday Fresh & Clean with our products
          </span>
          <Button
            variant="contained"
            className="bg-primary mt-5 self-start text-white items-center justify-center"
          >
            Shop now{" "}
            <AiOutlineArrowRight className="text-xl font-bold align-middle ml-1" />{" "}
          </Button>
        </div>
      </Grid>
      <Grid
        item
        xs={3.5}
        className=" h-76 bg-cover bg-center flex items-center justify-start rounded-lg  p-8 mr-auto"
        style={{
          backgroundImage:
            "url('https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-3.png')",
        }}
      >
        <div className="text-start flex flex-col items-center w-3/4">
          <span className="text-text text-2xl leading-9 mb-4 font-semibold ">
            Everyday Fresh & Clean with our products
          </span>
          <Button
            variant="contained"
            className="bg-primary mt-5 self-start text-white items-center justify-center"
          >
            Shop now{" "}
            <AiOutlineArrowRight className="text-xl font-bold align-middle ml-1" />{" "}
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} className="mt-5 px-5 ">
        <h2 className="text-3xl my-5 font-semibold">Popular Products</h2>
        <Grid container spacing={5} className=" justify-center ">
          {categories.slice(0, 10).map((category, index) => {
            return (
              <Grid item xs={2.3} key={index}>
                <Card className="border-[1px] shadow-none relative card hover:border-primary hover:shadow-box_shadow_3_hover rounded-2xl py-6 card">
                  <CardContent className="flex flex-col items-start">
                    <div className="onImgContent flex justify-center w-full relative ">
                      <img
                        src={category.image}
                        className="object-contain h-40 m-auto hover:scale-[1.05] "
                        alt=""
                      />
                      <div className="border-[1px] rounded-md options  top-1/2 border-primary justify-center overflow-hidden flex text-2xl min-w-[84px] w-1/2  items-center bg-white text-primary absolute h-8">
                        <Tooltip
                          title="View"
                          placement="top"
                          arrow
                         className=" duration-500"

                        >
                          <IconButton className="justify-center items-center text-primary h-full  hover:text-secondary ">
                            <AiOutlineEye className="" />
                          </IconButton>
                        </Tooltip>
                        <hr className="p-[0.5px] bg-primary h-8" />
                        <Tooltip
                          title="Wishlist"
                          placement="top"
                          arrow
                         className=" duration-500 "
                        >
                          <IconButton className="justify-center items-center text-primary h-full  hover:text-secondary" >
                            <AiOutlineHeart className="" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </div>
                    <p className="text-xxs text-secondary_text">
                      {category.name}
                    </p>
                    <span className="text-lg font-semibold">
                      {category.name}
                    </span>
                    <Rating
                      name="simple-controlled"
                      value={5}
                      size="small"
                      className=" mt-3"
                    />
                    <span className="text-text mt-2 text-md">
                      By <span className="text-primary"> Yash Choudhary</span>
                    </span>
                    <div className="details mt-2 flex justify-between w-full  items-center">
                      <div className="price">
                        <span className="underline text-primary font-semibold">
                          ₹ 22.50
                        </span>
                        <del className="text-gray-300 text-xs ml-1">$23.50</del>
                      </div>
                      <button className="bg-background_3 p-2 duration-500 flex items-center text-primary text-md font-semibold active:shadow-none hover:shadow-2xl hover:-translate-y-1 transition rounded-md ">
                        <PiShoppingCart /> Add
                      </button>
                    </div>
                    <div className="offer bg-blue-300 py-2  px-5 text-center text-white font-semibold left-0 rounded-br-lg absolute top-0">
                      <span>9%</span>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

    </Grid>
  );
}
