import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoMailUnreadOutline, IoMenu } from "react-icons/io5";
import { MdDashboard, MdMoveToInbox, MdOutlineCategory } from "react-icons/md";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

const AdminLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(window.innerWidth >= 1024);
  const [drawerWidth, setDrawerWidth] = useState(290);
  const [activePage, setActivePage] = useState("dashboard");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

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

  useEffect(() => {});

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
          height:'74px',
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
          {window.innerWidth < 1024 && (
            <Button
              size="small"
              className="text-3xl text-white"
              onClick={handleDrawerToggle}
            >
              <IoMenu />
            </Button>
          )}
          {window.innerWidth >= 1024 && (
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
          window.innerWidth < 1024 ? "hidden" : "block"
        } transition-all duration-500 ease-linear`}
        
      >
        <Drawer
          variant={window.innerWidth < 1024 ? "temporary" : "permanent"}
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
