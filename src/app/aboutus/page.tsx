"use client";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../shared/userLayout";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { PiWaveSineLight } from "react-icons/pi";
import { useInView } from "react-intersection-observer";

const aboutus = () => {
  const products = useSelector((state: RootState) => state.gridItems.value);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const imgContainer = useRef<HTMLDivElement | null>(null);
  const handleScrollBack = () => {
    let container = imgContainer.current;
    if (container) {
      container.scrollLeft -= 250;
    }
  };

  const handleScrollNext = () => {
    let container = imgContainer.current;
    if (container) {
      container.scrollLeft += 250;
    }

  };

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (inView) {
      // Increase the count from 0 to the desired value (e.g., 100) over a certain duration
      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount < 100 ? prevCount + 5 : prevCount));
      }, 20);

      return () => clearInterval(interval);
    }
  }, [inView]);
  
  return (
    <Layout title="About Us">
      <Grid container spacing={2} className="p-5">
        <Grid item xs={12} md={6} className=" ">
          <Box>
            <img
              src="/about-1.png"
              alt="About Us Image"
              className=" rounded-lg md:mt-24"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              className=" font-medium my-10 text-gray-700 "
              component="h5"
            >
              Welcome to Nest
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className="my-5 text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className="my-5 text-gray-400"
            >
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
              et Ut placerat legendos interpre.Donec vitae sapien ut libero
              venenatis faucibus. Nullam quis ante Etiam sit amet orci eget.
              Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt
              dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.
              Commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate id est laborum.
            </Typography>

            <Card className="mt-14 md:mt-0 shadow-none w-full">
              <CardContent className="relative">
                <div
                  className="img-container flex flex-nowrap overflow-x-auto  w-full scroll-smooth"
                  ref={imgContainer}
                >
                  {products.map((product, index) => {
                    return (
                      <div
                        className="img w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 min-w-[50%] p-10"
                        key={index}
                      >
                        <img
                          src={product.icon}
                          className=" object-contain"
                          alt={product.title}
                        />
                      </div>
                    );
                  })}
                  <Button
                    variant="contained"
                    className=" absolute min-w-0 p-2 rounded-full left-1 top-1/2 text-xl bg-slate-300 text-gray-700 z-10"
                    onClick={handleScrollBack}
                  >
                    <FaLongArrowAltLeft />
                  </Button>
                  <Button
                    variant="contained"
                    className=" absolute min-w-0 p-2 rounded-full right-1 top-1/2 text-xl bg-slate-300 text-gray-700 z-10"
                    onClick={handleScrollNext}
                  >
                    <FaLongArrowAltRight />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} className="text-center my-5">
          <Typography
            variant="h4"
            className=" font-medium relative"
            component="h5"
          >
            {" "}
            What We Provide?
            <div className="wave absolute flex left-1/2 text-7xl font-semibold -bottom-12 text-emerald-200 -translate-x-1/2">
              <PiWaveSineLight className="rotate " />
              <PiWaveSineLight className="rotate" />
            </div>
          </Typography>
        </Grid>
        {products.map((product, index) => {
          return (
            <Grid item xs={12} md={6} lg={4}  key={index}>
              <Card className="flex flex-col items-center p-5 border-[1px] border-gray-200 rounded-2xl shadow-none  hover:shadow-xl ">
                <CardMedia
                  image={product.icon}
                  component="img"
                  className="h-48 w-32 object-contain"
                />
                <CardContent className="flex flex-col items-center">
                  <Typography
                    variant="h5"
                    component="h1"
                    className=" font-medium text-center"
                  >
                    {product.title}{" "}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="mt-5 text-gray-400 text-center"
                  >
                    {product.description +
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus inventore soluta sit minima est? Repudiandae facilis quo a vero. Neque, eius magnam exercitationem dicta repudiandae nemo id quis consequuntur deleniti sequi fuga sit "}
                  </Typography>
                  <Button variant="text" className="mt-6 font-thin capitalize">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
        <Grid item xs={12} lg={4} md={6} className="my-5 p-5 px-10 ">
          <Typography variant="h4" className=" font-medium " component="h5">
            {" "}
            Who we are
          </Typography>

          <Typography
            variant="subtitle1"
            className="mt-5 text-gray-400"
            component="p"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            corporis ut excepturi quisquam iusto quidem! Perspiciatis adipisci
            quaerat suscipit doloribus!
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4} md={6} className="my-5 p-5 px-10 ">
          <Typography variant="h4" className=" font-medium " component="h5">
            {" "}
            Our history
          </Typography>

          <Typography
            variant="subtitle1"
            className="mt-5 text-gray-400"
            component="p"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            corporis ut excepturi quisquam iusto quidem! Perspiciatis adipisci
            quaerat suscipit doloribus!
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4} md={12} className="my-5 p-5 px-10 ">
          <Typography variant="h4" className=" font-medium " component="h5">
            {" "}
            Our mission
          </Typography>

          <Typography
            variant="subtitle1"
            className="mt-5 text-gray-400"
            component="p"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            corporis ut excepturi quisquam iusto quidem! Perspiciatis adipisci
            quaerat suscipit doloribus!
          </Typography>
        </Grid>
        <Grid xs={12} item className="  ">
          <Box
            sx={{ backgroundImage: 'url("/about-9.png")' }}
            className="bg-center bg-no-repeat bg-cover bg-fixed lg:h-72 transition-opacity rounded-2xl overflow-hidden "
            ref={ref}
          >
            <div className="allCounts lg:flex-row flex  flex-col items-center justify-around h-full bg-black opacity-50">
            <div className="count my-7 lg:px-2">
              <Typography
                component="h6"
                variant="h4"
                className=" font-semibold text-center text-white"
              >
                {" "}
                { count } +
              </Typography>
              <Typography
                component="h6"
                variant="h4"
                className=" font-semibold text-center text-white"
              >
                {" "}
                Glorious years
              </Typography>
            </div>
            <div className="count my-7 lg:px-2">
              <Typography
                component="h6"
                variant="h4"
                className=" font-semibold text-center text-white"
              >
                {" "}
                { count } +
              </Typography>
              <Typography
                component="h6"
                variant="h4"
                className=" font-semibold text-center text-white"
              >
                {" "}
                Happy clients
              </Typography>
            </div>
            <div className="count my-7 lg:px-2">
              <Typography
                component="h6"
                variant="h4"
                className=" font-semibold text-center text-white"
              >
                {" "}
                { count } +
              </Typography>
              <Typography
                component="h6"
                variant="h4"
                className=" font-semibold text-center text-white"
              >
                {" "}
                Projects complete
              </Typography>
            </div>
            <div className="count my-7 lg:px-2">
              <Typography
                component="h6"
                variant="h4"
                className=" font-semibold text-center text-white"
              >
                {" "}
                { count } +
              </Typography>
              <Typography
                component="h6"
                variant="h4"
                className=" font-semibold text-center text-white"
              >
                Team advisor
              </Typography>
            </div>
            <div className="count my-7 lg:px-2">
              <Typography
                component="h6"
                variant="h4"
                className=" font-semibold text-center text-white"
              >
                {" "}
                { count } +
              </Typography>
              <Typography
                component="h6"
                variant="h4"
                className=" font-semibold text-center text-white"
              >
                {" "}
                Products Sale
              </Typography>
            </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default aboutus;
