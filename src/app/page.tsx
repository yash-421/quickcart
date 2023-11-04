'use client'
import Image from "next/image";
import Main from "../app/home/home";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@mui/material";
import {theme} from './mui/theme'
import 'animate.css'
export default function Home() {
  return (
    <>
    <ThemeProvider theme={theme}>
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
        <Main></Main>
        </ThemeProvider>
    </>
  );
}
