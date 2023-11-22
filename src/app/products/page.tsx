"use client";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Rating,
  Slider,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { PiShoppingCart } from "react-icons/pi";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { sliceProducts } from "../redux/products";
import Layout from "../shared/userLayout";
import { useRouter } from "next/navigation";

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.value);
  const [priceRange, setPriceRange] = useState<number[]>([20, 30]);

  const router = useRouter();
  const navigateTo = (path: string) => {
    console.log(path);

    router.push(path);
  };
  
  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(sliceProducts({ start: 0, end: 5 }));
    }, 5000);

    return () => {
      timer;
    };
  }, []);

  // const generateMarks = (min: number, max: number) => {
  //   const marks = [];
  //   for (let i = min; i <= max; i++) {
  //     marks.push({ value: i, label: `$${i}` });
  //   }
  //   return marks;
  // };

  // const marks = generateMarks(0, 500);

  return (
    <Layout title="Products">
      <Grid container>
        <Grid item sm={12} xs={12} lg={9}>
          <Grid container className="p-5 ">
            <Grid
              container
              className="filters flex-wrap flex justify-between items-center "
            >
              <Grid item xs={12} sm={6} md={4} lg={3} className="filters flex justify-between px-5 items-center mt-5">
                <Button
                  variant="contained"
                  className="rounded-full w-full hover:bg-primary mx-1 hover:text-white text-gray-800 h-10 "
                >
                  <FiFilter className="mr-1" />
                  Filter
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={6} className="filters flex justify-between lg:justify-end px-5 items-center mt-5 ">
                <Typography
                  variant="subtitle2"
                  className="text-gray-400 full mt-5 lg:mt-0 lg:text-end   w-full text-center"
                >
                  Showing 1–12 of 16 results
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} className="filters flex justify-between px-5 items-center mt-5 lg:mt-0">
                <Autocomplete
                  limitTags={2}
                  color="primary"
                  options={[
                    { name: "Price : Low to High", value: 25 },
                    { name: "Price : High to Low", value: 25 },
                    { name: "Rating : Low to High", value: 25 },
                    { name: "Rating : High to Low", value: 25 },
                    { name: "Latest", value: 25 },
                    { name: "Rating", value: 25 },
                  ]}
                  size="small"
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Default Sorting"
                      placeholder="Sort By"
                    />
                  )}
                  sx={{ width: "200px" }}
                  className=" mt-5 w-full mx-1 "
                  id="sort"
                />
              </Grid>
              <Grid
                item
                xs={12} sm={6} md={4} lg={3}
                className="filters flex justify-between px-5 items-center mt-5 "
              >
                <Autocomplete
                  multiple
                  limitTags={2}
                  options={[
                    { name: "Yash", age: 25 },
                    { name: "John", age: 30 },
                    { name: "Alice", age: 28 },
                    { name: "Bob", age: 22 },
                    { name: "Eva", age: 35 },
                    { name: "David", age: 27 },
                    { name: "Grace", age: 31 },
                    { name: "Tom", age: 26 },
                    { name: "Sophie", age: 29 },
                    { name: "Michael", age: 32 },
                  ]}
                  size="small"
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Categories"
                      placeholder="Choose Categories"
                    />
                  )}
                  sx={{ width: "200px" }}
                  className="mx-1 w-full"
                  id="filter1"
                />
              </Grid>

              <Grid
                item
                xs={12} sm={6} md={4} lg={3}
                className="filters flex justify-between px-5 items-center mt-5 "
              >
                <Autocomplete
                  multiple
                  limitTags={2}
                  options={[
                    { name: "Yash", age: 25 },
                    { name: "John", age: 30 },
                    { name: "Alice", age: 28 },
                    { name: "Bob", age: 22 },
                    { name: "Eva", age: 35 },
                    { name: "David", age: 27 },
                    { name: "Grace", age: 31 },
                    { name: "Tom", age: 26 },
                    { name: "Sophie", age: 29 },
                    { name: "Michael", age: 32 },
                  ]}
                  size="small"
                  id="filter2"
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Categories"
                      placeholder="Choose Categories"
                    />
                  )}
                  sx={{ borderRadius: "9999px", width: "200px" }}
                  className="mx-1 w-full"
                />
              </Grid>
              <Grid
                item
                xs={12} sm={6} md={4} lg={3}
                className="filters flex justify-between px-5 items-center mt-5 "
              >
                <Autocomplete
                  multiple
                  limitTags={2}
                  options={[
                    { name: "Yash", age: 25 },
                    { name: "John", age: 30 },
                    { name: "Alice", age: 28 },
                    { name: "Bob", age: 22 },
                    { name: "Eva", age: 35 },
                    { name: "David", age: 27 },
                    { name: "Grace", age: 31 },
                    { name: "Tom", age: 26 },
                    { name: "Sophie", age: 29 },
                    { name: "Michael", age: 32 },
                  ]}
                  id="filter3"
                  size="small"
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Categories"
                      placeholder="Choose Categories"
                    />
                  )}
                  sx={{ borderRadius: "9999px", width: "200px" }}
                  className="mx-1 w-full"
                />
              </Grid>
              <Grid
                item
                xs={12} sm={6} md={4} lg={3}
                className="filters flex justify-between px-5 items-center mt-5 "
              >
                <Button
                  variant="contained"
                  className="rounded-full bg-primary text-white hover:bg-dark  h-10 w-full "
                >
                  Reset Filters{" "}
                </Button>
              </Grid>
            </Grid>

            {products.slice(0, 10).map((category, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={index} >
                  <Card
                    className="border-[1px] shadow-none sm:mx-auto relative sm:w-[280px] w-[300px] m-auto card hover:border-primary hover:shadow-box_shadow_3_hover rounded-2xl py-6 card my-2"
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
        <Grid item sm={12} xs={12} lg={3} className="p-5 mt-24  ">
          <Card
            variant="outlined"
            className="border-[1px] rounded-2xl relative shadow-box_shadow_3 my-5"
          >
            <CardContent>
              <Typography variant="h6" className="font-medium ">
                {" "}
                Filter By Price{" "}
              </Typography>
              <hr className="label-line" />
              <Slider
                getAriaLabel={() => "Price range"}
                value={priceRange}
                onChange={(_, newValue) => setPriceRange(newValue as number[])}
                valueLabelDisplay="auto"
                min={0}
                max={500}
                className="mt-5 text-primary "
              />

              <div className="ranges flex justify-around my-5">
                <TextField
                  id="outlined-basic1"
                  size="small"
                  value={priceRange[0]}
                  className="w-1/2 mx-1 rounded-lg"
                  type="number"
                  onInput={(e: ChangeEvent<HTMLInputElement>) =>
                    setPriceRange([+e.target.value, priceRange[1]])
                  }
                  variant="outlined"
                  error={priceRange[0] < 10}
                  helperText={
                    priceRange[0] < 10 && `Value should be between 10 and 500`
                  }
                  sx={{ borderRadius: "5px" }}
                />
                <TextField
                  id="outlined-basic2"
                  size="small"
                  value={priceRange[1]}
                  className="w-1/2 mx-1"
                  type="number"
                  onInput={(e: ChangeEvent<HTMLInputElement>) =>
                    setPriceRange([priceRange[0], +e.target.value])
                  }
                  variant="outlined"
                  error={priceRange[1] > 500}
                  helperText={
                    priceRange[1] > 500 && `Value should be between 10 and 500`
                  }
                />
              </div>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className={` absolute top-2 right-2 ${
                  priceRange[0] == 10 && priceRange[1] == 500 ? "hidden" : ""
                } `}
                onClick={(e) => setPriceRange([10, 500])}
              >
                Reset
              </Button>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            className="border-[1px] rounded-2xl relative shadow-box_shadow_3 my-5"
          >
            <CardContent>
              <Typography variant="h6" className="font-medium ">
                {" "}
                Product Category{" "}
              </Typography>
              <hr className="label-line" />

              <List className="mt-5">
                {[0, 1, 2, 3].map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem key={value} disablePadding disableGutters>
                      <ListItemButton role={undefined} dense>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={labelId}
                          primary={`Item ${value + 1}`}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
              <Button
                size="small"
                variant="contained"
                className="text-white ml-2"
              >
                Reset
              </Button>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            className="border-[1px] rounded-2xl relative shadow-box_shadow_3 my-5"
          >
            <CardContent>
              <Typography variant="h6" className="font-medium ">
                {" "}
                Filter By Stock{" "}
              </Typography>
              <hr className="label-line" />
              <div className="box flex items-center mt-5 ">
                <Checkbox aria-label="In Stock" defaultChecked />{" "}
                <Typography variant="body1"> In Stock</Typography>
              </div>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className={` absolute top-2 right-2`}
                onClick={(e) => setPriceRange([10, 500])}
              >
                Reset
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Products;
