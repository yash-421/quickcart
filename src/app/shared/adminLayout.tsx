import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

const AdminLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(290);
  const [isMobile, setIsMobile] = useState(false);

  
  const isSmScreen = useMediaQuery((theme: Theme) =>
  theme.breakpoints.down("lg")
);
  useEffect(() => {
    setIsMobile(isSmScreen);
    setOpen(!isSmScreen);
  }, [isSmScreen]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleToggleButtonClick = () => {
    setDrawerWidth((prevWidth) => (prevWidth === 0 ? 290 : 0));
  };

  const list = [
    {
      name: "Dashboard",
      link: "admin/dashboard",
      icon: <MdDashboard />,
      page: "dashboard",
    },
    {
      name: "Category",
      link: "admin/category",
      icon: <FaFolder />,
      page: "category",
    },
    {
      name: "Subcategory",
      link: "admin/subcategory",
      icon: <FaFolderOpen />,
      page: "subcategory",
    },
  ];

  const drawer = (
    <div className="mt-[85px]">
      <div className="relative text-center">
        <img
          src="/admin.png"
          alt="adminlogo"
          className="border-4 rounded-full border-primary mx-auto w-[90px] "
        />
        <div className="badge absolute top-[70px] right-0 left-0 ">
          <span className="bg-primary p-0.5 px-1 shadow-2xl text-xxs rounded-lg text-white">Admin</span>
        </div>
      </div>
      <Typography
        variant="subtitle2"
        className="text-lg uppercase text-center my-5"
        component="h5"
      >
        Admin Dashboard{" "}
      </Typography>
      <Divider className=" border-[2px] bg-primary" />
      <List className="mt-2 p-5">
        {list.map((text, index) => (
          <ListItem
            key={index}
            disablePadding
            className=" hover:bg-secondary rounded-lg group "
          >
            <ListItemButton className="text-gray-600 text-xl  group-hover:text-white">
              <ListItemIcon className="group-hover:text-white">
                {text.icon}
              </ListItemIcon>
              <ListItemText
                primary={text.name}
                primaryTypographyProps={{ className: " font-medium" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          height: '74px',
          zIndex: 10555,
        }}
        className="flex flex-row items-center justify-between"
      >
        <Toolbar className="w-[290px] flex justify-between items-center p-0 pl-2">
          <img
            src="/logo.png"
            className="object-contain h-[60px] w-32 mix-blend-darken"
            alt=""
          />
          {isMobile && (
            <Button
              size="small"
              className="text-3xl text-white"
              onClick={handleDrawerToggle}
            >
              <IoMenu />
            </Button>
          )}
          {!isMobile && (
            <Button
              size="small"
              className="text-3xl text-white"
              onClick={handleToggleButtonClick}
            >
              <IoMenu />
            </Button>
          )}
        </Toolbar>
        <Button
          variant="contained"
          className=" bg-background_3 text-primary mr-5"
        >
          {" "}
          <IoIosLogOut className="text-2xl mr-2" /> Log Out
        </Button>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        className={`${
          isMobile ? "hidden" : "block"
        } transition-all duration-500 ease-linear`}
      >
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={open}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        marginTop={"85px"}
        className="p-10"
      >
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
