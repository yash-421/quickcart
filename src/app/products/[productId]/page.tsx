"use client";
import Layout from "@/app/shared/userLayout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import { IoCheckmark } from "react-icons/io5";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import "./product.css";
import { useRef, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { sliceProducts } from "@/app/redux/products";

const allImages = [
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-7-1-100x100.jpg",
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-6-2-100x100.jpg",
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-6-1-100x100.jpg",
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-7-1-100x100.jpg",
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-7-1-100x100.jpg",
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-6-2-100x100.jpg",
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-6-1-100x100.jpg",
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-7-1-100x100.jpg",
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-7-1-100x100.jpg",
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-6-2-100x100.jpg",
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-6-1-100x100.jpg",
  "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-7-1-100x100.jpg",
];

const page = () => {
  const { productId: string } = useParams();
  const productImages = useRef<HTMLDivElement | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [collapse, setCollapse] = useState<boolean>(true);
  const similarProducts = useSelector(
    (state: RootState) => state.products.value
  );

  const handleScrollBack = () => {
    let container = productImages.current;
    if (container) {
      container.scrollLeft -= 100;
    }
  };

  const handleScrollNext = () => {
    let container = productImages.current;
    if (container) {
      container.scrollLeft += 100;
    }
  };

  return (
    <Layout title="Product Details">
      <Grid container className="px-5">
        <Grid xs={12} md={6} item className="px-5">
          <Card className="flex flex-col items-center justify-center border-[1px] rounded-xl border-primary">
            <CardMedia
              image={allImages[activeImage]}
              className="h-72 bg-auto w-4/5"
            />
          </Card>
          <div className="allimages-container relative">
            <div
              className="allImages flex overflow-scroll mt-5 snap-center  px-5 scroll-smooth "
              ref={productImages}
            >
              {allImages.map((image, index) => (
                <div className="img-container min-w-[30%] mx-1" key={index}>
                  <img
                    src={image}
                    alt=""
                    className="border-[1px] border-gray-400 rounded-xl"
                    onClick={() => setActiveImage(index)}
                  />
                </div>
              ))}
              <Button
                onClick={handleScrollBack}
                className="absolute top-[45%] left-0 py-2 border-2 border-gray-950 min-w-0 rounded-full bg-primary shadow-box_shadow_2 text-2xl -translate-y-1/2  text-white"
              >
                <IoIosArrowBack />
              </Button>
              <Button
                onClick={handleScrollNext}
                className="absolute top-[45%] -right-5  py-2 border-2 border-gray-950 min-w-0 rounded-full bg-primary shadow-box_shadow_2 text-2xl -translate-y-1/2  text-white"
              >
                <IoIosArrowForward />
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="flex flex-col justify-start  px-5 ">
          <Chip
            label="Sale !"
            className=" my-5 rounded-lg bg-color_1 text-primary self-start mb-3 "
          />
          <Typography variant="h5" component="h1" className=" text-lg">
            {" "}
            Canada Dry Ginger Ale – 2 L Bottle{" "}
          </Typography>
          <div className="price">
            <Typography
              variant="subtitle2"
              className="text-primary opacity-50 text-base"
              component="del"
            >
              $100.50
            </Typography>
            <Typography
              variant="subtitle1"
              className="text-primary ml-1 underline text-md"
              component="span"
            >
              $100.50
            </Typography>
          </div>

          <Typography
            variant="caption"
            className="my-2 mb-5 text-gray-400 text-sm"
            component="p"
          >
            Nutritious and healthy choice. Organically grown. Vibrant red color
            and firm texture. Versatile ingredient for various recipes. Easy to
            cook and saves time. Whole grain option with valuable nutrients and
            fiber. Gluten-free and suitable for special diets. Resealable
            packaging for freshness and convenience. Trusted brand with quality
            assurance.
          </Typography>

          <Typography
            variant="subtitle1"
            className=" text-amber-600 font-light my-2 "
            component="span"
          >
            52 in stock
          </Typography>
          <div className="quantity flex items-center my-2">
            <Button
              variant="contained"
              size="medium"
              className="min-w-0 rounded-full p-5 "
            >
              <LuMinusCircle />
            </Button>
            <TextField
              id="quantity"
              value={2}
              variant="outlined"
              type="number"
              className="w-1/4 px-3 text-white font-semibold rounded-full"
              inputProps={{ className: "w-full h-full text-center" }}
            />

            <Button
              variant="contained"
              size="medium"
              className="min-w-0 rounded-full p-5 "
            >
              <LuPlusCircle />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="w-1/4 p-2 sm:p-3 ml-4 bg-primary hover:bg-secondary text-white rounded-lg"
            >
              Add To Cart
            </Button>
          </div>

          <Grid container rowSpacing={1} className="mt-5">
            <Grid item xs={6}>
              <Typography
                className="text-gray-400"
                variant="subtitle1"
                component="span"
              >
                Weigth :{" "}
              </Typography>
              <Typography
                className="text-primary "
                variant="subtitle1"
                component="span"
              >
                20kg
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                className="text-gray-400"
                variant="subtitle1"
                component="span"
              >
                Type :{" "}
              </Typography>
              <Typography
                className="text-primary "
                variant="subtitle1"
                component="span"
              >
                Organic
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                className="text-gray-400"
                variant="subtitle1"
                component="span"
              >
                Weigth :{" "}
              </Typography>
              <Typography
                className="text-primary "
                variant="subtitle1"
                component="span"
              >
                20kg
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                className="text-gray-400"
                variant="subtitle1"
                component="span"
              >
                Weigth :{" "}
              </Typography>
              <Typography
                className="text-primary "
                variant="subtitle1"
                component="span"
              >
                20kg
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                className="text-gray-400"
                variant="subtitle1"
                component="span"
              >
                Weigth :{" "}
              </Typography>
              <Typography
                className="text-primary "
                variant="subtitle1"
                component="span"
              >
                20kg
              </Typography>
            </Grid>
          </Grid>

          <Box className="mt-5 bg-background_3 p-4 rounded-md my-5">
            <Typography
              variant="subtitle1"
              component="span"
              className="font-semibold my-2"
            >
              Free worldwide shipping for orders over $70{" "}
            </Typography>
            <Typography component="ul" className="mt-4">
              <Typography
                variant="body1"
                className=" leading-relaxed font-light flex items-center text-md"
                component="li"
              >
                <IoCheckmark className="mr-1" /> 1 Month easy returns
              </Typography>
              <Typography
                variant="body1"
                className=" leading-relaxed font-light flex items-center text-md"
                component="li"
              >
                <IoCheckmark className="mr-1" /> Order will dispatch with in 2
                Hours
              </Typography>
            </Typography>
          </Box>
          <img
            src="/localmarket.jpg"
            alt="Fresh Products"
            className="rounded-lg my-5"
          />
        </Grid>
        <Grid xs={12} md={6} item className="px-5 md:order-9">
          <div className="img-container relative mb-5">
            <img src="/banner-11-min.png" className="rounded-xl" alt="" />
            <div className="text absolute top-20 w-36 left-5 sm:w-3/4 sm:top-[50%] sm:-translate-y-1/2">
              <Typography
                variant="subtitle1"
                className=" text-gray-400"
                component="p"
              >
                Organic
              </Typography>
              <Typography
                variant="h5"
                component="h4"
                className="font-medium hover:-translate-y-[5px] transition md:text-2xl "
              >
                Save 17% on <span className="text-primary">Oganic </span>
                Juice
              </Typography>
            </div>
          </div>
          <Card className="rounded-lg shadow-lg border-[1px] my-5">
            <CardContent>
              <List>
                <ListItem className="border-[1px] rounded-lg border-gray-400 my-2">
                  <ListItemText>Uncategorized</ListItemText>
                </ListItem>
                <ListItem className="border-[1px] rounded-lg border-gray-400 my-2">
                  <Accordion className=" shadow-none my-1 w-full ">
                    <AccordionSummary
                      expandIcon={<IoIosArrowDown />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="p-0 m-0 min-h-0 "
                    >
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List>
                        <ListItem className="border-[1px] rounded-lg border-gray-400 my-2">
                          <ListItemText>Uncategorized</ListItemText>
                        </ListItem>
                        <ListItem className="border-[1px] rounded-lg border-gray-400 my-2">
                          <ListItemText>Uncategorized</ListItemText>
                        </ListItem>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </ListItem>
                <ListItem className="border-[1px] rounded-lg border-gray-400 my-2">
                  <ListItemText>Uncategorized</ListItemText>
                </ListItem>
                <ListItem className="border-[1px] rounded-lg border-gray-400 my-2">
                  <ListItemText>Uncategorized</ListItemText>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card className="rounded-lg shadow-lg border-[1px] my-5">
            <CardContent>
              <Typography component="h1" variant="h6">
                Similar Products
              </Typography>
              <hr className="label-line" />
              <List>
                {similarProducts.slice(0, 5).map((product, index) => (
                  <ListItem key={index} className="border-b px-0">
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt={product.name}
                          src={product.image}
                          className="rounded-none"
                        />
                      </ListItemAvatar>
                      <ListItemText className="ml-2 text-lg">
                        {product.name}
                      </ListItemText>
                      <Button variant="text" className="ml-auto">
                        View
                      </Button>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} className=" my-5">
          <Card className="rounded-xl">
            <CardContent>
              <Box className="flex justify-start flex-wrap">
                <Button
                  variant="outlined"
                  className=" rounded-2xl mx-5 w-full my-2 "
                  onClick={() => setCollapse(true)}
                >
                  Description
                </Button>

                <Button
                  variant="outlined"
                  className=" rounded-2xl mx-5 w-full my-2 "
                  onClick={() => setCollapse(true)}
                >
                  Additional information
                </Button>
                <Button
                  variant="outlined"
                  className=" rounded-2xl mx-5 w-full my-2"
                  onClick={() => setCollapse(true)}
                >
                  Reviews (0)
                </Button>
              </Box>
              <Box className="p-5">
                <Collapse in={collapse} timeout="auto" unmountOnExit>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      className="mt-5 text-gray-500"
                    >
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      className="mt-8 text-gray-500"
                    >
                      Spluttered narrowly yikes left moth in yikes bowed this
                      that grizzly much hello on spoon-fed that alas rethought
                      much decently richly and wow against the frequent fluidly
                      at formidable acceptably flapped besides and much circa
                      far over the bucolically hey precarious goldfinch mastodon
                      goodness gnashed a jellyfish and one however because.
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      component="ul"
                      className="my-8 ml-5 text-gray-500"
                    >
                      <Typography
                        variant="subtitle1"
                        component="li"
                        className="mt-8 ml-5 text-gray-500 list-disc mx-auto w-full  "
                      >
                        Type Of Packing
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bottle
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="li"
                        className="mt-8 ml-5 text-gray-500 list-disc mx-auto w-full  "
                      >
                        Type Of Packing
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bottle
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="li"
                        className="mt-8 ml-5 text-gray-500 list-disc mx-auto w-full  "
                      >
                        Type Of Packing
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bottle
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="li"
                        className="mt-8 ml-5 text-gray-500 list-disc mx-auto w-full  "
                      >
                        Type Of Packing
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bottle
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="li"
                        className="mt-8 ml-5 text-gray-500 list-disc mx-auto w-full  "
                      >
                        Type Of Packing
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bottle
                      </Typography>
                    </Typography>
                    <hr />
                    <Typography
                      variant="subtitle1"
                      component="p"
                      className="mt-8 text-gray-500"
                    >
                      Laconic overheard dear woodchuck wow this outrageously
                      taut beaver hey hello far meadowlark imitatively
                      egregiously hugged that yikes minimally unanimous pouted
                      flirtatiously as beaver beheld above forward energetic
                      across this jeepers beneficently cockily less a the
                      raucously that magic upheld far so the this where crud
                      then below after jeez enchanting drunkenly more much wow
                      callously irrespective limpet.
                    </Typography>

                    <Typography
                      variant="h5"
                      component="p"
                      className="my-8 text-gray-800 font-medium "
                    >
                      Packaging & Delivery
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      component="p"
                      className="mt-8 text-gray-500"
                    >
                      Laconic overheard dear woodchuck wow this outrageously
                      taut beaver hey hello far meadowlark imitatively
                      egregiously hugged that yikes minimally unanimous pouted
                      flirtatiously as beaver beheld above forward energetic
                      across this jeepers beneficently cockily less a the
                      raucously that magic upheld far so the this where crud
                      then below after jeez enchanting drunkenly more much wow
                      callously irrespective limpet.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      className="mt-8 text-gray-500"
                    >
                      Laconic overheard dear woodchuck wow this outrageously
                      taut beaver hey hello far meadowlark imitatively
                      egregiously hugged that yikes minimally unanimous pouted
                      flirtatiously as beaver beheld above forward energetic
                      across this jeepers beneficently cockily less a the
                      raucously that magic upheld far so the this where crud
                      then below after jeez enchanting drunkenly more much wow
                      callously irrespective limpet.
                    </Typography>

                    <Typography
                      variant="h5"
                      component="p"
                      className="my-8 text-gray-800 font-medium "
                    >
                      Suggested Use
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      component="p"
                      className="mt-8 text-gray-500"
                    >
                      Refrigeration not necessary.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      className="mt-8 text-gray-500"
                    >
                      Stir before serving
                    </Typography>
                  </Box>
                </Collapse>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default page;
