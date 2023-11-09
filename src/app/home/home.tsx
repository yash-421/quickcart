"use client";
import {
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
  Typography
} from "@mui/material";
import { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineEye,
  AiOutlineHeart
} from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import Carousel from "react-material-ui-carousel";
import SliderProductList from "../components/sliderProductList";
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
    <Grid container>
      <Grid item xs={12} className="m-5 ">
        <Carousel
          autoPlay
          animation="slide"
          duration={500}
          height={"400px"}
          indicatorIconButtonProps={{
            className:
              "text-primary opacity-10 hover:text-dark hover:opacity-100 mx-1 overflow-hidden ",
          }}
          activeIndicatorIconButtonProps={{
            className: "text-dark opacity-100",
          }}
          className=""
          NextIcon={<IoIosArrowForward />}
          PrevIcon={<IoIosArrowBack />}
          stopAutoPlayOnHover
          navButtonsAlwaysVisible
          navButtonsProps={{
            className:'bg-gray-200 group-hover:text-white group-hover:opacity-[1!important] group-hover:bg-primary text-black  '
          }}
          navButtonsWrapperProps={{
            className:'group'
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
                className="w-full h-full object-cover "
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <Typography variant="h4" className="text-2xl font-bold mb-2">
                  {item.label}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
              </div>
            </Paper>
          ))}
        </Carousel>
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
                            <AiOutlineEye />
                          </IconButton>
                        </Tooltip>
                        <hr className="p-[0.5px] bg-primary h-8" />
                        <Tooltip
                          title="Wishlist"
                          placement="top"
                          arrow
                          className=" duration-500 "
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
        <h6 className="text-2xl font-bold text-gray-700  mb-5">
          Daily Best Sells
        </h6>
        <Grid container>
          <Grid
            item
            xs={3}
            className="mt-5 px-5 banner-img min-h-[483px] rounded-xl flex flex-col items-center justify-around py-5 h-[520px] "
          >
            <span className="banner-text text-3xl mt-10 px-5 font-semibold leading-snug ">
              Create a natural oasis within your home
            </span>
            <Button
              variant="contained"
              className="bg-primary rounded-md self-center text-white items-center justify-center"
            >
              Shop now{" "}
              <AiOutlineArrowRight className="text-xl font-bold align-middle ml-1" />{" "}
            </Button>
          </Grid>
          <Grid item xs={9} className="my-auto px-5  items-center">
            <SliderProductList categories={categories} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3} className="px-5 font-semibold">
        <h1 className="text-2xl mb-4">Top Selling</h1>
        <hr className="label-line mb-5" />
        {categories.slice(0, 3).map((item, index) => (
          <Card
            key={index}
            className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
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
      <Grid item xs={3} className="px-5 font-semibold">
        <h1 className="text-2xl mb-4">Trending Products</h1>
        <hr className="label-line mb-5" />
        {categories.slice(0, 3).map((item, index) => (
          <Card
            key={index}
            className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
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
      <Grid item xs={3} className="px-5 font-semibold">
        <h1 className="text-2xl mb-4">Recently added</h1>
        <hr className="label-line mb-5" />
        {categories.slice(0, 3).map((item, index) => (
          <Card
            key={index}
            className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
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
      <Grid item xs={3} className="px-5 font-semibold">
        <h1 className="text-2xl mb-4">Top Rated</h1>
        <hr className="label-line mb-5" />
        {categories.slice(0, 3).map((item, index) => (
          <Card
            key={index}
            className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
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

      <Grid
        item
        xs={12}
        className="banner-img10 p-20 min-h-[480px] relative mx-5 rounded-xl "
      >
        <h1 className="text-6xl w-4/5 leading-tight font-[700] mb-5">
          {" "}
          Stay home & get your daily needs from our shop
        </h1>
        <span className="text-gray-400 mt-5 text-xl">
          Start Your Daily Shopping with{" "}
          <span className="text-primary"> Nest Mart</span>
        </span>
        <div className="email mt-16 flex  bg-white w-[400px] rounded-full overflow-hidden ">
          <input
            type="email"
            name="subscriptionemail"
            id="subscriptionemail"
            className="w-[290px] outline-none px-3 text-primary h-[60px]"
            placeholder="Your Email Address"
          />
          <button className="bg-primary h-[60px] w-[110px] font-semibold text-white rounded-full">
            Subscribe
          </button>
        </div>
        <img
          src="/banner-9-min.png"
          className="absolute right-10 bottom-0 h-auto w-3/4 "
          alt=""
        />
      </Grid>

      <Grid
        item
        sm={2.2}
        className=" m-auto bg-background_3 flex p-4 items-center rounded-xl my-10 "
      >
        <div className="banner-icon p-5 w-[40%] mr-2  ">
          <img
            src="/icons/icon-1.png"
            className="min-w-[60px] min-h-[50px] h-[50px] "
            alt=""
          />
        </div>
        <div className="details flex flex-col">
          <span className="text-lg font-semibold">Best prices & offers</span>
          <span className="text-gray-400">Orders $50 or more</span>
        </div>
      </Grid>
      <Grid
        item
        sm={2.2}
        className=" m-auto bg-background_3 flex p-4 items-center rounded-xl my-10 "
      >
        <div className="banner-icon p-5 w-35%] mr-2  ">
          <img
            src="/icons/icon-2.png"
            className="min-w-[60px] min-h-[50px] h-[50px] "
            alt=""
          />
        </div>
        <div className="details flex flex-col">
          <span className="text-lg font-semibold">Free delivery</span>
          <span className="text-gray-400">24/7 amazing services</span>
        </div>
      </Grid>
      <Grid
        item
        sm={2.2}
        className=" m-auto bg-background_3 flex p-4 items-center rounded-xl my-10 "
      >
        <div className="banner-icon p-5 w-[35%] mr-2 ">
          <img
            src="/icons/icon-3.png"
            className="min-w-[60px] min-h-[50px] h-[50px] "
            alt=""
          />
        </div>
        <div className="details flex flex-col">
          <span className="text-lg font-semibold">Great daily deal</span>
          <span className="text-gray-400">When you sign up</span>
        </div>
      </Grid>
      <Grid
        item
        sm={2.2}
        className=" m-auto bg-background_3 flex p-4 items-center rounded-xl my-10 "
      >
        <div className="banner-icon p-5 w-[35%] mr-2 ">
          <img
            src="/icons/icon-4.png"
            className="min-w-[60px] min-h-[50px] h-[50px] "
            alt=""
          />
        </div>
        <div className="details flex flex-col">
          <span className="text-lg font-semibold">Wide assortment</span>
          <span className="text-gray-400">Mega Discounts</span>
        </div>
      </Grid>
      <Grid
        item
        sm={2.2}
        className=" m-auto bg-background_3 flex p-4 items-center rounded-xl my-10 "
      >
        <div className="banner-icon p-5 w-[35%] mr-2 ">
          <img
            src="/icons/icon-5.png"
            className="min-w-[60px] min-h-[50px] h-[50px] "
            alt=""
          />
        </div>
        <div className="details flex flex-col">
          <span className="text-lg font-semibold">Easy returns</span>
          <span className="text-gray-400">Within 30 days</span>
        </div>
      </Grid>
    </Grid>
  );
}
