"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { StaticImageData } from "next/image";
import banner1 from "../../../public/Images/banner-1.jpg";
import banner2 from "../../../public/Images/banner-2.jpg";
import banner3 from "../../../public/Images/banner-3.jpg";
import SliderProductList from "../components/sliderProductList";
import { useRouter } from "next/navigation";

const bannerImages = [banner1, banner2, banner3];

export default function Home() {
  const router =useRouter()
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
      {/* Banner Section */}
      <article className="banner relative h-96">
        <div className="slider h-full w-full flex transition-transform ease-in-out duration-300 relative">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`slide h-full w-full rounded-xl overflow-hidden ${index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute w-full transition-opacity`}
            >
              <Image
                src={image as StaticImageData}
                alt="category"
                width={1000}
                height={500}
                quality={100}
                layout="responsive"
                className="object-cover w-full h-full "
              />
              <div className="banner-text absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg p-6 text-center">
                <span className="text-3xl font-bold text-white">
                  Fresh Choices, Delightful Moments: Your One-Stop Grocery Shop!
                </span>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full"
          onClick={prevSlide}
        >
          <IoIosArrowBack size={24} color="#555" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full"
          onClick={nextSlide}
        >
          <IoIosArrowForward size={24} color="#555" />
        </button>
      </article>

      {/* Categories Section */}
      <article className="all-categories my-5">
        <h6 className="text-2xl ml-6 font-semibold text-gray-500">Products</h6>
        <div className="categories flex flex-wrap justify-center py-5 gap-5">
          {categories.map((category, index) => (
            <div
              className="m-3 p-3 rounded-xl w-44 item flex flex-col items-center justify-around shadow-xl bg-white hover:bg-secondary hover:text-primary text-secondary cursor-pointer transition duration-300"
              key={index} onClick={()=>router.push(index.toString())}
            >
              <img
                src={category.image}
                alt="category"
                className="object-contain w-28 h-28 mb-2"
              />
              <span className="font-semibold text-lg text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </article>

      {/* Slider Product Lists */}
      <SliderProductList categories={categories} header="Best Products" />
      <SliderProductList categories={categories} header="Cool Products" />
    </main>
  );
}
