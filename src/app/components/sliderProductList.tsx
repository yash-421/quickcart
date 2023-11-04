import React, { useRef, useState, useEffect } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosAdd,
  IoIosRemove,
} from "react-icons/io";
import { BsCart4, BsTrash3 } from "react-icons/bs";
import { BiSolidTrashAlt } from "react-icons/bi";
const SliderProductList = React.memo(
  ({
    categories,
    header,
  }: {
    categories: { name: string; image: string }[];
    header: string;
  }) => {
    const [scrollLeftButtonVisible, setScrollLeftButtonVisible] =
      useState(false);
    const [scrollRightButtonVisible, setScrollRightButtonVisible] =
      useState(true);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft -= 230; // Adjust the scroll distance as needed
      }
    };

    const scrollRight = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 230; // Adjust the scroll distance as needed
      }
    };

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

    return (
      <article className="p-6 relative mx-5">
        <h6 className="my-5 text-xl font-semibold text-gray-800">{header}</h6>
        <div
          className="flex overflow-auto products-container scroll-smooth"
          style={{ transition: "transform 0.3s ease" }}
          ref={containerRef}
        >
          {categories.map((category, index) => (
            <div
              className="p-6 bg-primary rounded-lg mx-4 w-44 min-w-max shadow-lg relative"
              key={index}
            >
              <button className="remove absolute top-1 right-1 p-2 font-bold bg-red-600 rounded-lg text-white shadow-lg active:shadow-gray-200 active:shadow-none text-lg">
                <BiSolidTrashAlt />
              </button>
              <img
                src={category.image}
                alt=""
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <span className="text-center font-bold text-text">
                {category.name}
              </span>
              <div className="cart-details flex justify-center mt-5">
                <button className="text-2xl text-red-400">
                  <IoIosRemove />
                </button>
                <span
                  className="mx-2 text-center bg-secondary rounded-full py-2 w-10 border-0"
                  role="input"
                >
                  0
                </span>
                <button className="text-2xl text-green-500">
                  <IoIosAdd />
                </button>
              </div>
              <button className="add-cart flex p-2 items-center text-white font-semibold mt-2  hover:bg-transparent hover:border-primary border-2 border-transparent hover:text-secondary hover:border-2 rounded-lg m-auto text-center hover:bg-gray-100 bg-secondary">
                <BsCart4 className="mr-1" /> Add to Cart
              </button>
            </div>
          ))}
        </div>

        <button
          className={`bg-white shadow-lg text-black p-2 rounded-full mt-8 ${
            !scrollLeftButtonVisible ? "hidden" : ""
          } absolute top-1/2 -translate-y-1/2 mb-2 -translate-x-1/2 active:shadow-none`}
          id="scroll-left"
          onClick={scrollLeft}
        >
          <IoIosArrowBack className="text-xl" />
        </button>
        <button
          className={`bg-white shadow-lg text-black mb-2 p-2 rounded-full mt-8 ${
            !scrollRightButtonVisible ? "hidden" : ""
          } absolute top-1/2 -translate-y-1/2 -translate-x-1/2 -right-3 active:shadow-none`}
          id="scroll-right"
          onClick={scrollRight}
        >
          <IoIosArrowForward className="text-xl" />
        </button>
      </article>
    );
  }
);

export default SliderProductList;
