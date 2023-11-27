"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Paper,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import Carousel from "react-material-ui-carousel";
import SliderProductList from "../components/sliderProductList";
import Layout from "../shared/userLayout";
import { useRouter } from "next/navigation";
const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    image: "banner-1.jpg",
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
    image: "banner-2.jpg",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    image: "banner-3.jpg",
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
  const router = useRouter();
  const navigateTo = (path: string) => {
    console.log(path);

    router.push(path);
  };
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

  return (
    <Layout title="Home">
      <Grid container>
        <Grid item xs={12} className="p-5 relative  ">
          <Carousel
            autoPlay
            animation="slide"
            duration={500}
            className="h-[300px] sm:h-[450px] "
            indicatorIconButtonProps={{
              className:
                "text-gray-700 opacity-10 hover:text-dark hover:opacity-100 mx-1 overflow-hidden ",
            }}
            indicatorContainerProps={{
              className: "absolute -bottom-5 h-12 z-50",
            }}
            activeIndicatorIconButtonProps={{
              className: "text-primary opacity-100",
            }}
            NextIcon={<IoIosArrowForward />}
            PrevIcon={<IoIosArrowBack />}
            stopAutoPlayOnHover
            navButtonsAlwaysVisible
            navButtonsProps={{
              className:
                "bg-gray-200 group-hover:text-white group-hover:opacity-[1!important] group-hover:bg-primary text-black  ",
            }}
            navButtonsWrapperProps={{
              className: "group",
            }}
          >
            {steps.map((item, index) => (
              <Paper
                key={index}
                className="relative h-full bg-center bg-cover transition ease-linear delay-500 overflow-hidden rounded-xl  "
              >
                <img
                  src={item.image}
                  alt={`Step ${index + 1}`}
                  className="w-full h-[300px] object-cover sm:h-[450px] "
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <Typography
                    variant="h4"
                    className="text-xs md:text-2xl sm:text-lg font-bold mb-2"
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    className="text-xxs sm:text-md"
                  >
                    {item.description}
                  </Typography>
                </div>
              </Paper>
            ))}
          </Carousel>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          className=" md:flex md:mt-2 md:items-center md:justify-start md:px-5"
        >
          <h6 className="pl-4 font-semibold text-center md:text-3xl text-base">
            Featued Items
          </h6>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          className="flex md:mt-2 items-center md:justify-start justify-around mt-5 px-2"
        >
          <Chip
            label="Bread and Eggs"
            className="text-xxs md:text-md mx-1 border-primary text-text hover:bg-primary hover:text-white cursor-pointer font-medium"
            variant="outlined"
                        onClick={()=>navigateTo('products')}
          />
          <Chip
            label="Dairy Products"
            className="text-xxs md:text-md mx-1 border-primary text-text hover:bg-primary hover:text-white cursor-pointer font-medium"
            variant="outlined"
                        onClick={()=>navigateTo('products')}
          />
          <Chip
            label="Snacks "
            className="text-xxs md:text-md mx-1 border-primary text-text hover:bg-primary hover:text-white cursor-pointer font-medium"
            variant="outlined"
                        onClick={()=>navigateTo('products')}
          />
        </Grid>

        <Grid xs={12} item className="my-5 flex flex-wrap justify-center">
          {categories.slice(0, 7).map((category, index) => {
            const colorClass = colorClasses[index % colorClasses.length];
            return (
              <Card
                className={` ${colorClass} hover:text-primary shadow-none text-secondary_text  m-6 w-36 rounded-xl border-border_color1 hover:border-border_color2 hover:border-[1px] hover:shadow-box_shadow_2 card`}
                key={index}
                onClick={()=>navigateTo('products')}
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
        <Grid item xs={12} sm={6} md={4} className=" ">
          <Box className=" my-2 w-11/12 mx-auto p-5  h-76 bg-cover bg-center flex items-center justify-start rounded-lg bg-[url('/banner-1.png')]">
            <div className="text-start flex flex-col items-center w-3/4">
              <span className="text-text text-2xl leading-9 mb-4 font-semibold ">
                Everyday Fresh & Clean with our products
              </span>
              <Button
                variant="contained"
                className="bg-primary mt-5 self-start text-white items-center justify-center"
              
              href="products">
                Shop now{" "}
                <AiOutlineArrowRight className="text-xl font-bold align-middle ml-1" />{" "}
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box className=" my-2 w-11/12 mx-auto p-5   h-76 bg-cover bg-center flex items-center justify-start rounded-lg bg-[url('/banner-2.png')]">
            <div className="text-start flex flex-col items-center w-3/4">
              <span className="text-text text-2xl leading-9 mb-4 font-semibold ">
                Everyday Fresh & Clean with our products
              </span>
              <Button
                variant="contained"
                className="bg-primary mt-5 self-start text-white items-center justify-center"
              
              href="products">
                Shop now{" "}
                <AiOutlineArrowRight className="text-xl font-bold align-middle ml-1" />{" "}
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} className=" sm:px-4 ">
          <Box className=" md:h-76 md:w-full my-2 sm:w-full w-11/12 mx-auto p-5  h-76 bg-cover bg-center flex items-center justify-start rounded-lg bg-[url('/banner-3.png')]">
            <div className="text-start flex flex-col items-center w-3/4">
              <span className="text-text text-2xl leading-9 mb-4 font-semibold ">
                Everyday Fresh & Clean with our products
              </span>
              <Button
                variant="contained"
                className="bg-primary md:mt-5 mt-5 md:self-start md:h-76 self-start text-white items-center justify-center"
                href="products"
              >
                Shop now{" "}
             <AiOutlineArrowRight className="text-xl font-bold align-middle ml-1" />{" "}
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} className="mt-5 px-5 ">
          <h2 className="text-3xl my-5 font-semibold">Popular Products</h2>
          <Grid container spacing={5} className=" justify-center ">
            {categories.slice(0, 10).map((category, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card
                    className="border-[1px] shadow-none relative sm:w-[280px] w-[300px] m-auto card hover:border-primary hover:shadow-box_shadow_3_hover rounded-2xl py-6 card"
                    onClick={() => navigateTo("products/1")}
                  >
                    <CardContent className="flex flex-col items-start">
                      <div className="onImgContent flex justify-center w-full relative ">
                        <img
                          src={category.image}
                          className="object-contain h-40 m-auto hover:scale-[1.05] "
                          alt=""
                        />
                        <div className="border-[1px] rounded-md options  top-1/2 border-primary justify-center flex text-2xl min-w-[84px] w-1/2  items-center bg-white text-primary absolute h-8">
                          <Tooltip
                            title="View"
                            placement="top"
                            arrow
                            className=" duration-500 w-1/2"
                          >
                            <IconButton className="justify-center items-center text-primary h-full  hover:text-secondary ">
                              <AiOutlineEye />
                            </IconButton>
                          </Tooltip>
                          <hr className="p-[0.5px] bg-primary h-8" />
                          <Tooltip
                            title="Wishlist"
                            placement="top"
                            arrow
                            className=" duration-500 w-1/2 "
                          >
                            <IconButton className="justify-center items-center text-primary h-full  hover:text-secondary">
                              <AiOutlineHeart />
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
                        id={`Rating${index}`}
                      />
                      <span className="text-text mt-2 text-md">
                        By <span className="text-primary"> Yash Choudhary</span>
                      </span>
                      <div className="details mt-2 flex justify-between w-full  items-center">
                        <div className="price">
                          <span className="underline text-primary font-semibold">
                            ₹ 22.50
                          </span>
                          <del className="text-gray-300 text-xs ml-1">
                            $23.50
                          </del>
                        </div>
                        <button className="bg-background_3 p-2 duration-500 flex items-center text-primary text-md font-semibold active:shadow-none hover:shadow-2xl hover:-translate-y-1 transition rounded-md ">
                          <PiShoppingCart /> Add
                        </button>
                      </div>
                      <div className="offer bg-primary py-2  px-5 text-center text-white font-semibold left-0 rounded-br-lg absolute top-0">
                        <span>9%</span>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} className="my-5 px-5">
          <h6 className=" text-xl  font-bold text-gray-700  mb-5">
            Daily Best Sells
          </h6>
          <Grid container className=" lg:items-center">
            <Grid
              item
              xs={12}
              lg={3.5}
              className="mt-5 px-5 banner-img sm:h-[300px] lg:p-10 lg:h-full  rounded-xl flex flex-col items-center justify-around py-5  "
            >
              <span className="banner-text text-3xl mt-10 px-5 font-semibold leading-snug ">
                Create a natural oasis within your home
              </span>
              <Button
                variant="contained"
                className="bg-primary lg:self-start rounded-md mt-2 lg:mt-5 self-center text-white items-center justify-center"
                href="products"
              >
                Shop now{" "}
                <AiOutlineArrowRight className="text-xl font-bold align-middle ml-1" />{" "}
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              lg={8.5}
              className="my-auto overflow-hidden  items-center"
            >
              <SliderProductList categories={categories} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} className="px-5 font-semibold">
          <h1 className="text-2xl mb-4">Top Selling</h1>
          <hr className="label-line mb-5" />
          {categories.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
              onClick={() => navigateTo("products/1")}
            >
              <CardContent className="flex">
                <CardMedia
                  component="img"
                  height="100"
                  width="100"
                  image={item.image}
                  alt={item.name}
                  className="h-[100px] w-[100px]"
                />
                <div className="details ml-3">
                  <Typography
                    variant="h6"
                    component="div"
                    className="mb-2 text-md"
                  >
                    {item.name}
                  </Typography>
                  <div className="flex items-center">
                    <Rating value={5} size="small" readOnly />
                    <Typography
                      variant="body2"
                      component="span"
                      className="ml-1 text-gray-400"
                      id={`rate${index}`}
                    >
                      5
                    </Typography>
                  </div>
                  <div className="price mt-1">
                    <span className="underline text-primary font-semibold">
                      ₹ 22.50
                    </span>
                    <del className="text-gray-300 text-xs ml-1">$23.50</del>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className="px-5 font-semibold">
          <h1 className="text-2xl mb-4">Trending Products</h1>
          <hr className="label-line mb-5" />
          {categories.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
              onClick={() => navigateTo("products/1")}
            >
              <CardContent className="flex">
                <CardMedia
                  component="img"
                  height="100"
                  width="100"
                  image={item.image}
                  alt={item.name}
                  className="h-[100px] w-[100px]"
                />
                <div className="details ml-3">
                  <Typography
                    variant="h6"
                    component="div"
                    className="mb-2 text-md"
                  >
                    {item.name}
                  </Typography>
                  <div className="flex items-center">
                    <Rating value={5} size="small" readOnly />
                    <Typography
                      variant="body2"
                      component="span"
                      className="ml-1 text-gray-400"
                      id={`Start${index}`}
                    >
                      5
                    </Typography>
                  </div>
                  <div className="price mt-1">
                    <span className="underline text-primary font-semibold">
                      ₹ 22.50
                    </span>
                    <del className="text-gray-300 text-xs ml-1">$23.50</del>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className="px-5 font-semibold">
          <h1 className="text-2xl mb-4">Recently added</h1>
          <hr className="label-line mb-5" />
          {categories.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
              onClick={() => navigateTo("products/1")}
            >
              <CardContent className="flex">
                <CardMedia
                  component="img"
                  height="100"
                  width="100"
                  image={item.image}
                  alt={item.name}
                  className="h-[100px] w-[100px]"
                />
                <div className="details ml-3">
                  <Typography
                    variant="h6"
                    component="div"
                    className="mb-2 text-md"
                  >
                    {item.name}
                  </Typography>
                  <div className="flex items-center">
                    <Rating
                      value={5}
                      size="small"
                      id={`ratingstar${index}`}
                      readOnly
                    />
                    <Typography
                      variant="body2"
                      component="span"
                      className="ml-1 text-gray-400"
                    >
                      5
                    </Typography>
                  </div>
                  <div className="price mt-1">
                    <span className="underline text-primary font-semibold">
                      ₹ 22.50
                    </span>
                    <del className="text-gray-300 text-xs ml-1">$23.50</del>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className="px-5 font-semibold">
          <h1 className="text-2xl mb-4">Top Rated</h1>
          <hr className="label-line mb-5" />
          {categories.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
              onClick={() => navigateTo("products/1")}
            >
              <CardContent className="flex">
                <CardMedia
                  component="img"
                  height="100"
                  width="100"
                  image={item.image}
                  alt={item.name}
                  className="h-[100px] w-[100px]"
                />
                <div className="details ml-3">
                  <Typography
                    variant="h6"
                    component="div"
                    className="mb-2 text-md"
                  >
                    {item.name}
                  </Typography>
                  <div className="flex items-center">
                    <Rating
                      value={5}
                      size="small"
                      id={`allStart${index}`}
                      readOnly
                    />
                    <Typography
                      variant="body2"
                      component="span"
                      className="ml-1 text-gray-400"
                    >
                      5
                    </Typography>
                  </div>
                  <div className="price mt-1">
                    <span className="underline text-primary font-semibold">
                      ₹ 22.50
                    </span>
                    <del className="text-gray-300 text-xs ml-1">$23.50</del>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
}
