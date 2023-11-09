import React, { useRef, useState, useEffect } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa'
import { PiShoppingCart } from "react-icons/pi";
import { Card, CardContent, Tooltip, IconButton, Rating } from "@mui/material";

const SliderProductList = React.memo(
  ({ categories }: { categories: { name: string; image: string }[] }) => {
    const [scrollLeftButtonVisible, setScrollLeftButtonVisible] =
      useState(false);
    const [scrollRightButtonVisible, setScrollRightButtonVisible] =
      useState(true);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        setScrollLeftButtonVisible(container.scrollLeft > 0);
        setScrollRightButtonVisible(container.scrollLeft < maxScrollLeft);
      };

      containerRef.current?.addEventListener("scroll", handleScroll);
      return () => {
        containerRef.current?.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const scrollLeft = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft -= 240 // Adjust the scroll distance as needed
      }
    };

    const scrollRight = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 240 // Adjust the scroll distance as needed
      }
    };

    return (
      <article className="p-6 relative mx-5 mt-10">
        <div
          className={`flex overflow-auto   scroll-smooth w-full`}
          style={{
            transition: "transform 0.3s ease"
          }}
          ref={containerRef}
        >
          {categories.map((category, index) => (
            <Card className="border-[1px] shadow-none min-w-[230px] mx-5 relative card hover:border-primary hover:shadow-box_shadow_3_hover rounded-2xl py-5 card" key={index} >
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
                <p className="text-xxs text-secondary_text">{category.name}</p>
                <span className="text-lg font-semibold">{category.name}</span>
                <div className=" flex items-center justify-between mt-3  rating">
                <Rating
                  name="simple-controlled"
                  value={5}
                  size="small"
                />
                <span className="ml-1 text-gray-400 text-sm" > {5} </span>
                </div>
                
                <span className="text-text mt-2 text-md">
                  By <span className="text-primary"> Yash Choudhary</span>
                </span>
               
                  <div className="price mt-2">
                    <span className="underline text-primary font-semibold">
                      ₹ 22.50
                    </span>
                    <del className="text-gray-300 text-xs ml-1">$23.50</del>
                  </div>
                  <button className="bg-primary hover:bg-secondary mt-3 p-2 duration-500 flex items-center w-full justify-center text-white text-md font-semibold transition-colors  rounded-md ">
                    <PiShoppingCart /> Add to cart
                  </button>
               
                <div className="offer bg-primary py-2  px-5 text-center text-white font-semibold left-0 rounded-br-lg absolute top-0">
                  <span>9%</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <button
          className={`bg-slate-50 cursor-pointer hover:bg-primary hover:text-white text-slate-400 transition-colors shadow-lg  p-2 rounded-full mt-8 absolute -top-10 -translate-y-1/2  -translate-x-1/2 active:shadow-none`}
          disabled={!scrollLeftButtonVisible}
          onClick={scrollLeft}
        >
          <FaLongArrowAltLeft className="text-xl  font-extrabold " />

        </button>
        <button
          className={`bg-slate-50 cursor-pointer hover:bg-primary  hover:text-white text-slate-400 transition-colors shadow-lg   p-2 rounded-full mt-8 absolute -top-10 left-20 -translate-y-1/2 -translate-x-1/2  active:shadow-none`}
          disabled={!scrollRightButtonVisible}
          onClick={scrollRight}
        >
          <FaLongArrowAltRight className="text-xl  font-extrabold " />
        </button>
      </article>
    );
  }
);

export default SliderProductList;
