"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import "./home.css";

const bannerImages = [
  "/Images/banner-1.jpg",
  "/Images/banner-2.jpg",
  "/Images/banner-3.jpg",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + bannerImages.length) % bannerImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="m-6" >
      <article className="banner relative h-96  ">
        <div className="slider h-full w-full flex transition-transform ease-in-out duration-300 ">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`slide h-full w-full rounded-xl overflow-hidden ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              } absolute transition-opacity`}
            >
              <Image
                src={image}
                alt={`Banner Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              <div className="banner-text absolute inset-0 flex items-center justify-center bg-white bg-opacity-25 rounded-lg p-6">
                <span className="text-center text-3xl font-bold text-gray-100 banner-text ">
                  Fresh Choices, Delightful Moments: Your One-Stop Grocery Shop!
                </span>
              </div>
            </div>
          ))}
        </div>
        <button
          className=" drop-shadow-lg absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 active:-translate-x-0.5  p-2 rounded-full"
          onClick={prevSlide}
        >
          <IoIosArrowBack size={24} color="#555" />
        </button>
        <button
          className=" drop-shadow-lg absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 active:translate-x-0.5 p-2 rounded-full"
          onClick={nextSlide}
        >
          <IoIosArrowForward size={24} color="#555" />
        </button>
      </article>
      <article className="all-categories mt-5">
        <h6 className="text-2xl  font-semibold text-slate-950">Products</h6>
        <div className="categories">
            <div className="item">
                <img src="" alt="" />
            </div>
        </div>
      </article>
    </main>
  );
}
