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
  const [categories, setCategories] = useState([
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
  ]);
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
    <main className="p-6">
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
                fill
                className="object-cover"
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
          className=" drop-shadow-lg absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 active:translate-x-0.5 active:-translate-y-5 p-2 rounded-full"
          onClick={nextSlide}
        >
          <IoIosArrowForward size={24} color="#555" />
        </button>
      </article>
      <article className="all-categories my-5 ">
        <h6 className="text-2xl ml-6 font-semibold  text-gray-700 ">Products</h6>
        <div className="categories flex flex-wrap justify-center py-5">
          {categories.map((category, index) => (
            <div
              className="m-3 p-4 rounded-xl w-40 md:w-60 item flex flex-col items-center justify-around shadow-xl bg-gradient-to-bl text-yellow-50 from-orange-300 to-red-500"
              key={index}
            >
              <Image
                src={category.image}
                width={100}
                height={100}
                alt="categories"
              />
              <span className=" font-semibold mt-2 text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
