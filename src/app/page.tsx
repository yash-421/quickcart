"use client";
import Main from "../app/home/home";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import { theme } from "./mui/theme";
import { store, wrapper } from "./redux/store";

function Home() {
  return (
    <>
      <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
            <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
      <Main />
    </>
  );
}

export default Home;
