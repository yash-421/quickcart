import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SliderProductList = ({
  categories,
  header,
}: {
  categories: { name: string; image: string }[];
  header: string;
}) => {
  const [scrollLeftButtonVisible, setScrollLeftButtonVisible] = useState(false);
  const [scrollRightButtonVisible, setScrollRightButtonVisible] =
    useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
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
      <h6 className="my-5 text-xl font-semibold">{header}</h6>
      <div
        className="flex overflow-auto scroll-smooth products-container"
        style={{ transition: "transform 0.3s ease" }}
        ref={containerRef}
      >
        {categories.map((category, index) => (
          <div
            className="p-6 bg-gray-200 rounded-lg mx-4 min-w-max"
            key={index}
          >
            <img
              src={category.image}
              alt=""
              className="w-32 h-32 object-cover mx-auto mb-4"
            />
            <span className="text-center font-bold text-gray-800">
              {category.name}
            </span>
          </div>
        ))}
      </div>

      <button
        className={`bg-white shadow-md text-black p-2 rounded-full ${
          !scrollLeftButtonVisible ? "hidden" : ""
        } absolute top-1/2 -translate-y-1/2 mb-2 -translate-x-1/2`}
        id="scroll-left"
        onClick={scrollLeft}
      >
        <IoIosArrowBack className="text-xl" />
      </button>
      <button
        className={`bg-white shadow-md text-black mb-2 p-2 rounded-full ${
          !scrollRightButtonVisible ? "hidden" : ""
        } absolute top-1/2 -translate-y-1/2 -translate-x-1/2 -right-3`}
        id="scroll-right"
        onClick={scrollRight}
      >
        <IoIosArrowForward className="text-xl" />
      </button>
    </article>
  );
};

export default SliderProductList;
