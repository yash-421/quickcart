"use client";
import { useParams } from "next/navigation";
import React, { useMemo, useState } from "react";

const ProductList = () => {
  let { categoryId } = useParams();
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

  return useMemo(
    () => (
      <article className="flex lg:flex-row sm:flex-col">
        <aside className="bg-green-light w-96 p-2 m h-[90vh] fixed my-3 ml-3 rounded-md overflow-auto transition-transform min-w-[400px] ">
          <ul>
            <li className="flex items-center h-20 bg-orange-dark rounded-xl my-2">
              <img
                src="/subcategories/vegitables.webp"
                className="h-full align-middle object-fill"
                alt=""
              />
              <span className="text-gray-600  font-semibold">
                Vegitable Fruits
              </span>
            </li>
            <li className="flex items-center h-20 bg-orange-dark rounded-xl my-2">
              <img
                src="/subcategories/vegitables.webp"
                className="h-full align-middle object-fill"
                alt=""
              />
              <span className="text-gray-600  font-semibold">
                Vegitable Fruits
              </span>
            </li>
            <li className="flex items-center h-20 bg-orange-dark rounded-xl my-2">
              <img
                src="/subcategories/vegitables.webp"
                className="h-full align-middle object-fill"
                alt=""
              />
              <span className="text-gray-600  font-semibold">
                Vegitable Fruits
              </span>
            </li>
            <li className="flex items-center h-20 bg-orange-dark rounded-xl my-2">
              <img
                src="/subcategories/vegitables.webp"
                className="h-full align-middle object-fill"
                alt=""
              />
              <span className="text-gray-600  font-semibold">
                Vegitable Fruits
              </span>
            </li>
            <li className="flex items-center h-20 bg-orange-dark rounded-xl my-2">
              <img
                src="/subcategories/vegitables.webp"
                className="h-full align-middle object-fill"
                alt=""
              />
              <span className="text-gray-600  font-semibold">
                Vegitable Fruits
              </span>
            </li>
            <li className="flex items-center h-20 bg-orange-dark rounded-xl my-2">
              <img
                src="/subcategories/vegitables.webp"
                className="h-full align-middle object-fill"
                alt=""
              />
              <span className="text-gray-600  font-semibold">
                Vegitable Fruits
              </span>
            </li>
            <li className="flex items-center h-20 bg-orange-dark rounded-xl my-2">
              <img
                src="/subcategories/vegitables.webp"
                className="h-full align-middle object-fill"
                alt=""
              />
              <span className="text-gray-600  font-semibold">
                Vegitable Fruits
              </span>
            </li>
            <li className="flex items-center h-20 bg-orange-dark rounded-xl my-2">
              <img
                src="/subcategories/vegitables.webp"
                className="h-full align-middle object-fill"
                alt=""
              />
              <span className="text-gray-600  font-semibold">
                Vegitable Fruits
              </span>
            </li>
            <li className="flex items-center h-20 bg-orange-dark rounded-xl my-2">
              <img
                src="/subcategories/vegitables.webp"
                className="h-full align-middle object-fill"
                alt=""
              />
              <span className="text-gray-600  font-semibold">
                Vegitable Fruits
              </span>
            </li>
            <li className="flex items-center h-20 bg-orange-dark rounded-xl my-2">
              <img
                src="/subcategories/vegitables.webp"
                className="h-full align-middle object-fill"
                alt=""
              />
              <span className="text-gray-600  font-semibold">
                Vegitable Fruits
              </span>
            </li>
          </ul>
        </aside>
        <div className="flex flex-wrap justify-around  lg:w-[calc(100vw-400px)] lg:ml-[420px]">
          {categories.map((product, index) => {
            return (
              <div
                className="product flex flex-col justify-center items-center rounded-md bg-pink-lighter m-4 p-2"
                key={index}
              >
                <img src={product.image} alt="" className="w-28" />
                <span className="text-text">{product.name}</span>
              </div>
            );
          })}
        </div>
      </article>
    ),
    [categoryId]
  );
};

export default ProductList;
