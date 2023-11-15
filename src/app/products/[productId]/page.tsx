"use client";
import Layout from "@/app/shared/userLayout";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const {productId:string} = useParams();


  return (
    <Layout title="Product Details">
      <div>page</div>
    </Layout>
  );
};

export default page;
