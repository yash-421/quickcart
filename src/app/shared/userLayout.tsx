import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Breadcrumbs,
  Chip,
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
import { MdKeyboardArrowRight } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IoMdArrowDropdown } from "react-icons/io";
import { deepOrange } from "@mui/material/colors";

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
  const gridItems: { icon: string; title: string; description: string }[] =
    useSelector((state: RootState) => state.gridItems.value);

  console.log(gridItems);

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
        setScrollClass("transition-transform fixed translate-y-0");
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

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

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
    <main>
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
              >
                <Box
                  sx={{
                    width: 250,
                  }}
                  role="presentation"
                >
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                      position: "relative",
                      overflow: "auto",
                      maxHeight: 300,
                      "& ul": { padding: 0 },
                    }}
                    subheader={<li />}
                  >
                    {[0, 1, 2, 3, 4].map((sectionId) => (
                      <li key={`section-${sectionId}`}>
                        <ul>
                          <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                          {[0, 1, 2].map((item) => (
                            <ListItem key={`item-${sectionId}-${item}`}>
                              <ListItemText primary={`Item ${item}`} />
                            </ListItem>
                          ))}
                        </ul>
                      </li>
                    ))}
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
                Products <IoMdArrowDropdown />
                <List className="absolute hidden group-hover:block bg-white font-semibold shadow-2xl   w-40 top-[100%] rounded-lg border-t-2 border-secondary right-1/2 left-1/2 -translate-x-1/2 px-2 ">
                  <ListItem
                    disablePadding
                    className="hover:bg-dark hover:text-color_9 text-gray-600"
                  >
                    <ListItemButton>
                      <ListItemText
                        primary="Trash"
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    className="hover:bg-dark hover:text-color_9 text-gray-600"
                  >
                    <ListItemButton>
                      <ListItemText
                        primary="Spam"
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
              >
                Products <IoMdArrowDropdown />
                <List className="absolute hidden group-hover:block bg-white font-semibold shadow-2xl   w-40 top-[100%] rounded-lg border-t-2 border-secondary right-1/2 left-1/2 -translate-x-1/2 px-2 ">
                  <ListItem
                    disablePadding
                    className="hover:bg-dark hover:text-color_9 text-gray-600"
                  >
                    <ListItemButton>
                      <ListItemText
                        primary="Trash"
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    className="hover:bg-dark hover:text-color_9 text-gray-600"
                  >
                    <ListItemButton>
                      <ListItemText
                        primary="Spam"
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
              >
                Products <IoMdArrowDropdown />
                <List className="absolute hidden group-hover:block bg-white font-semibold shadow-2xl   w-40 top-[100%] rounded-lg border-t-2 border-secondary right-1/2 left-1/2 -translate-x-1/2 px-2 ">
                  <ListItem
                    disablePadding
                    className="hover:bg-dark hover:text-color_9 text-gray-600"
                  >
                    <ListItemButton>
                      <ListItemText
                        primary="Trash"
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    className="hover:bg-dark hover:text-color_9 text-gray-600"
                  >
                    <ListItemButton>
                      <ListItemText
                        primary="Spam"
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
              >
                Products <IoMdArrowDropdown />
                <List className="absolute hidden group-hover:block bg-white font-semibold shadow-2xl   w-40 top-[100%] rounded-lg border-t-2 border-secondary right-1/2 left-1/2 -translate-x-1/2 px-2 ">
                  <ListItem
                    disablePadding
                    className="hover:bg-dark hover:text-color_9 text-gray-600"
                  >
                    <ListItemButton>
                      <ListItemText
                        primary="Trash"
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    className="hover:bg-dark hover:text-color_9 text-gray-600"
                  >
                    <ListItemButton>
                      <ListItemText
                        primary="Spam"
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

              <Button variant="text" className="text-white self-center">
                Login
              </Button>
              <Avatar className="bg-secondary self-center">N</Avatar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Breadcrumbs
        aria-label="breadcrumb"
        className="mt-24 border-2 p-5 mx-2 rounded-lg"
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
      <div className="mt-16"></div>
      {children}

      <Grid container>
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
            <button className="bg-primary h-[60px] w-[110px] hover:bg-dark cursor-pointer z-10 font-semibold text-white rounded-full">
              Subscribe
            </button>
          </div>
          <img
            src="/banner-9-min.png"
            className="absolute right-10 bottom-0 h-auto w-3/4 "
            alt=""
          />
        </Grid>
        {gridItems.map((item, index) => (
          <Grid
            item
            sm={2.2}
            key={index}
            className="m-auto bg-background_3 flex flex-col p-4 items-center rounded-xl justify-around my-5 hover:shadow-lg transition duration-300"
            style={{ height: "200px", width: "150px" }} // Set fixed height and width here
          >
            <div className="banner-icon p-5 ">
              <img
                src={item.icon}
                className="min-w-[60px] min-h-[50px] h-[50px] transform transition duration-300 hover:scale-110"
                alt=""
              />
            </div>
            <div className="details flex flex-col items-center">
              <span className="text-lg font-semibold">{item.title}</span>
              <span className="text-gray-400 text-center">
                {item.description}
              </span>
            </div>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Layout;
