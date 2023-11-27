import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Collapse,
  Divider,
  Drawer,
  Grid,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  alpha,
  styled,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import * as React from "react";
import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { MdEmail, MdKeyboardArrowRight } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IoMdArrowDropdown, IoMdCall } from "react-icons/io";
import { deepOrange } from "@mui/material/colors";
import { FaAngleDoubleRight, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaMapLocation, FaSquareXTwitter } from "react-icons/fa6";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useRouter } from "next/navigation";
const Layout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const [sidebar, setSidebar] = useState(false);
  const [scrollClass, setScrollClass] = useState(
    "w-[95%] right-[50%] left-[50%] -translate-x-[50%] mt-2 rounded-xl fixed"
  );
  const router = useRouter();
  const gridItems: { icon: string; title: string; description: string }[] =
    useSelector((state: RootState) => state.gridItems.value);

  const [open, setOpen] = React.useState(false);
  const navigateTo=(path:string)=>{
    setSidebar(false)
    router.push(path)
  }

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 400) {
        setScrollClass(
          "w-[95%] right-[50%] left-[50%] -translate-x-[50%] mt-2 rounded-xl absolute"
        );
        return;
      }
      if (scrollPosition <= 450) {
        setScrollClass("-translate-y-full absolute");
      } else if (scrollPosition > 450) {
        setScrollClass(" fixed translate-y-0 transition1 delay-500");
      } else {
        setScrollClass(
          " w-[95%] right-[50%] left-[50%] -translate-x-[50%] mt-2 rounded-xl absolute"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppBar className={`${scrollClass} `} variant="elevation">
        <Container>
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={()=>navigateTo('/')}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setSidebar(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="left"
                open={sidebar}
                onClose={() => setSidebar(false)}
                className=" items-center"
              >
                <Box
                  sx={{
                    width: 250,
                  }}
                  className="py-5 flex flex-col items-center "
                  role="presentation"
                >
                  <Avatar
                    sx={{ bgcolor: deepOrange[500] }}
                    className=" p-5 w-10 h-10"
                    onClick={()=>navigateTo('myprofile')}
                  >
                    Y
                  </Avatar>
                  <Typography
                    component="h1"
                    variant="subtitle2"
                    className="mt-5"
                  >
                    Yash Choudhary
                  </Typography>

                  <Divider
                    variant="fullWidth"
                    orientation="horizontal"
                    className="w-full my-5"
                  />
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                  >
                    <ListItemButton onClick={handleClick}>
                      <ListItemText primary="Category" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={()=>navigateTo('products')} >
                          <ListItemText primary="All" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={()=>navigateTo('products')} >
                          <ListItemText primary="Dairy" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={()=>navigateTo('products')} >
                          <ListItemText primary="Cold Drinks" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={()=>navigateTo('products')} >
                          <ListItemText primary="Snack" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                    <ListItemButton onClick={()=>navigateTo('contactus')} >
                      <ListItemText>Contact Us</ListItemText>
                    </ListItemButton >
                    <ListItemButton onClick={()=>navigateTo('aboutus')}>
                      <ListItemText>About Us</ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={()=>navigateTo('refundpolicy')}>
                      <ListItemText>Refund Policy</ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={()=>navigateTo('privacypolicy')}>
                      <ListItemText>Privacy Policy</ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={()=>navigateTo('termandconditions')}>
                      <ListItemText>Term & Condition</ListItemText>
                    </ListItemButton>
                  </List>
                  <Divider />
                </Box>
              </Drawer>
            </Box>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={()=>navigateTo('/')}
            >
              LOGO
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              className="justify-start"
            >
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                className="mx-5 relative group flex"
              >
                Category <IoMdArrowDropdown />
                <List className="absolute hidden group-hover:block bg-white font-semibold shadow-2xl   w-40 top-[100%] rounded-lg border-t-2 border-secondary right-1/2 left-1/2 -translate-x-1/2 px-2 ">
                  <ListItem className="hover:bg-dark p-0 m-0 hover:text-color_9 text-gray-600" onClick={()=>{navigateTo('products')}}>
                    <ListItemButton className="m-0 py-1 ">
                      <ListItemText
                        primary="All"
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="hover:bg-dark p-0 m-0 hover:text-color_9 text-gray-600" onClick={()=>{navigateTo('products')}}>
                    <ListItemButton className="m-0 py-1 ">
                      <ListItemText
                        primary="Dairy"
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="hover:bg-dark p-0 m-0 hover:text-color_9 text-gray-600" onClick={()=>{navigateTo('products')}}>
                    <ListItemButton className="m-0 py-1 ">
                      <ListItemText
                        primary="Cold Drinks"
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="hover:bg-dark p-0 m-0 hover:text-color_9 text-gray-600" onClick={()=>{navigateTo('products')}}>
                    <ListItemButton className="m-0 py-1 ">
                      <ListItemText
                        primary="Snack"
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                className="mx-5 relative group flex"
                onClick={()=>{navigateTo('contactus')}}
              >
                Contact
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                className="mx-5 relative group flex"
                onClick={()=>{navigateTo('aboutus')}}
              >
                About Us
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                className="mx-5 relative group flex"
              >
                Help <IoMdArrowDropdown />
                <List className="absolute hidden group-hover:block bg-white font-semibold shadow-2xl   w-40 top-[100%] rounded-lg border-t-2 border-secondary right-1/2 left-1/2 -translate-x-1/2 px-2 ">
                  <ListItem className="hover:bg-dark p-0 m-0 hover:text-color_9 text-gray-600" onClick={()=>{navigateTo('refundpolicy')}}>
                    <ListItemButton className="m-0 py-1 ">
                      <ListItemText
                        primary="Refund Policy"
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="hover:bg-dark p-0 m-0 hover:text-color_9 text-gray-600" onClick={()=>{navigateTo('privacypolicy')}} >
                    <ListItemButton className="m-0 py-1 ">
                      <ListItemText
                        primary="Privacy Policy"
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="hover:bg-dark p-0 m-0 hover:text-color_9 text-gray-600" onClick={()=>{navigateTo('termandconditions')}}>
                    <ListItemButton className="m-0 py-1 ">
                      <ListItemText
                        primary="Term & Condition"
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Button>

              <Search className="mx-3 self-center ml-auto ">
                <SearchIconWrapper>
                  <FcSearch />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              <Button variant="text" className="text-white self-center" onClick={()=>navigateTo('signin')} >
                Login
              </Button>
              <Avatar className="bg-secondary self-center" onClick={()=>navigateTo('myprofile')} >N</Avatar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {title ? (
        <Breadcrumbs
          aria-label="breadcrumb"
          className="mt-24 border-2 p-5 border-x-0 "
        >
          <Stack direction="row" spacing={1}>
            <Chip
              label="Home"
              className="text-xs font-medium text-primary p-2 h-[33px]"
              variant="outlined"
              icon={<TiHomeOutline className="text-xl text-primary" />}
            />
            <MdKeyboardArrowRight className="m-auto text-2xl" />
            <Chip variant="filled" label={title} className="p-2" />
          </Stack>
        </Breadcrumbs>
      ) : (
        <></>
      )}
      <div className="mt-16"></div>
      <main>{children}</main>
      <footer>
        <Grid container>
          <Grid
            item
            xs={12}
            className=" w-full banner-img10 p-5 md:px-10 relative mx-5 rounded-xl "
          >
            <img
              src="/banner-9-min.png"
              className=" hidden sm:block sm:h-5/6 sm:absolute bottom-0 -right-2"
              alt=""
            />
            <h1 className=" mb:text-center md:text-2xl   text-base mt-5 leading-tight font-[700] mb-5 sm:w-3/4">
              {" "}
              Stay home & get your daily needs from our shop
            </h1>
            <span className="text-gray-400 mt-5 text-sm md:text-xl">
              Start Your Daily Shopping with{" "}
              <span className="text-primary"> Nest Mart</span>
            </span>
            <div className="email mt-16 flex flex-col md:relative md:w-full w-full rounded-full items-center sm:items-start ">
              <input
                type="email"
                name="subscriptionemail"
                id="subscriptionemail"
                className="outline-none md:h-12 h-10 px-2 md:rounded-full md:w-[300px]  rounded-lg bg-white text-primary text-base "
                placeholder="Your Email Address"
              />
              <button className="bg-primary md:h-12 mt-5 md:absolute md:top-0 md:left-[250px] md:mt-0 md  min-w-0 p-2 hover:bg-dark cursor-pointer z-10 font-semibold text-white rounded-full">
                Subscribe
              </button>
            </div>
          </Grid>
          <Grid xs={12} item>
            <Grid container>
              {gridItems.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  key={index}
                  className=" px-5 "
                >
                  <Box className="lg:h-[260px]  m-auto bg-background_3 flex flex-col p-4 items-center rounded-xl justify-around my-5 hover:shadow-lg transition duration-300">
                    <div className="banner-icon p-5 ">
                      <img
                        src={item.icon}
                        className="min-w-[60px] min-h-[50px] h-[50px] transform transition duration-300 hover:scale-110"
                        alt=""
                      />
                    </div>
                    <div className="details flex flex-col items-center">
                      <span className="text-lg font-semibold">
                        {item.title}
                      </span>
                      <span className="text-gray-400 text-center lg:text-start">
                        {item.description}
                      </span>
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className=" bg-background_3 py-5 pl-5 "
          >
            <Card className="shadow-none flex items-center bg-background_3 flex-col h-full justify-center">
              <img
                src="/logo.png"
                alt="logo"
                className="w-1/2 mt-5 mix-blend-luminosity"
              />
              <CardActions className="justify-center mt-5 ">
                <Button
                  size="small"
                  className=" bg-dark min-w-0 p-3 text-white text-2xl shadow-xl rounded-full"
                >
                  <FaFacebook />
                </Button>
                <Button
                  size="small"
                  className=" bg-dark min-w-0 p-3 text-white text-2xl shadow-xl rounded-full"
                >
                  <FaInstagram />
                </Button>
                <Button
                  size="small"
                  className=" bg-dark min-w-0 p-3 text-white text-2xl shadow-xl rounded-full"
                >
                  <FaSquareXTwitter />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className=" bg-background_3 px-5 py-5 pl-5 "
          >
            <Typography variant="h6" mb={0.2}>
              Explore
            </Typography>
            <List>
              <ListItem className="py-1 cursor-pointer ">
                <Typography
                  component="a"
                  variant="subtitle1"
                  className="flex items-center hover:ml-1 transition-all  "
                  href="/aboutus"
                >
                  <FaAngleDoubleRight className="text-primary mr-1" /> About Us{" "}
                </Typography>
              </ListItem>
              <ListItem className="py-1 cursor-pointer ">
                <Typography
                  component="a"
                  variant="subtitle1"
                  className="flex items-center hover:ml-1 transition-all "
                  href="/contactus"
                >
                  <FaAngleDoubleRight className="text-primary mr-1" /> Contact
                  Us{" "}
                </Typography>
              </ListItem>
              <ListItem className="py-1 cursor-pointer ">
                <Typography
                  component="a"
                  variant="subtitle1"
                  className="flex items-center hover:ml-1 transition-all "
                  href="/24X7"
                >
                  <FaAngleDoubleRight className="text-primary mr-1" /> 24 X 7{" "}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className=" bg-background_3 py-5 pl-5 "
          >
            <Typography variant="h6" mb={0.2}>
              Help & Support
            </Typography>
            <List>
              <ListItem className="py-1 cursor-pointer">
                <Typography
                  component="a"
                  variant="subtitle1"
                  href="/refundpolicy"
                  className="flex items-center hover:ml-1 transition-all "
                >
                  <FaAngleDoubleRight className="text-primary mr-1" /> Refund
                  Policy{" "}
                </Typography>
              </ListItem>
              <ListItem className="py-1 cursor-pointer ">
                <Typography
                  component="a"
                  variant="subtitle1"
                  href="/privacypolicy"
                  className="flex items-center hover:ml-1 transition-all "
                >
                  <FaAngleDoubleRight className="text-primary mr-1" /> Privacy
                  Policy{" "}
                </Typography>
              </ListItem>
              <ListItem className="py-1 cursor-pointer ">
                <Typography
                  component="a"
                  variant="subtitle1"
                  href="/termandconditions"
                  className="flex items-center hover:ml-1 transition-all "
                >
                  <FaAngleDoubleRight className="text-primary mr-1" /> Terms &
                  Conditions{" "}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className=" bg-background_3 py-5 pl-5 "
          >
            <Typography variant="h6" mb={0.2}>
              Contact Details
            </Typography>
            <List>
              <ListItem className="py-1 cursor-pointer  ">
                <a
                  className=" hover:ml-1  transition-all flex items-center "
                  href="tel:1234567890"
                >
                  {" "}
                  <IoMdCall className="text-primary mr-1" /> 1234567890
                </a>
              </ListItem>
              <ListItem className="py-1 cursor-pointer  ">
                <a
                  className=" hover:ml-1  transition-all flex items-center "
                  href="mailto:johndoe@gmail.com"
                >
                  <MdEmail className="text-primary mr-1" /> johndoe@gmail.com
                </a>
              </ListItem>
              <ListItem className="py-1 cursor-pointer  ">
                <a
                  className=" hover:ml-1  transition-all flex items-center "
                  href="https://maps.app.goo.gl/RvipSLK3zCmStNWy5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMapLocation className="text-primary mr-1" /> 123 Main
                  Street Anytown, USA 12345
                </a>
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            className=" bg-background_3 mt-0 border-t-2 border-t-primary py-2 "
          >
            <Typography variant="subtitle1" mb={0.2} className=" text-center ">
              Quick Cart © 2022. All Rights Reserved. Design and Developed by
              Yash Choudhary
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Layout;
