"use client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "../shared/userLayout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const RefundPolicy = () => {
  const categories = useSelector((state: RootState) => state.products.value);

  return (
    <Layout title="Refund Policy">
      <Grid container className="px-10" rowGap={5}>
        <Grid item xs={8} className="my-5 mt-20 px-5">
          <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
            Refund Policy
          </Typography>
          <Box sx={{ color: "text.secondary" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              At QuickCart, we strive to provide you with the best shopping
              experience for your grocery needs. We understand that there may be
              situations where you might need to request a refund. Please review
              our refund policy below for more information on how refunds are
              handled.
            </Typography>
            <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
              1. Eligibility for Refund
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              To be eligible for a refund, the following conditions must be met:
            </Typography>
            <ul>
              <li>Product(s) must be in their original condition</li>
              <li>
                Refund request must be made within [X] days of the purchase date
              </li>
              <li>Proof of purchase is required</li>
            </ul>

            <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
              2. How to Request a Refund
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              To request a refund, please follow these steps:
            </Typography>
            <ol>
              <li>
                Contact our customer support team at [support@example.com]
                within [X] days of receiving your order
              </li>
              <li>
                Provide your order number and a detailed explanation of the
                reason for the refund
              </li>
              <li>
                Our support team will review your request and guide you through
                the next steps
              </li>
            </ol>

            <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
              3. Refund Process
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Once your refund request is approved, the refund will be processed
              within [X] business days. The refund will be issued to the
              original payment method used during the purchase.
            </Typography>

            <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
              4. Non-Refundable Items
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Certain items are non-refundable, including:
            </Typography>
            <ul>
              <li>Perishable goods</li>
              <li>Gift cards</li>
              <li>Downloadable products</li>
            </ul>

            <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
              5. Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If you have any questions or concerns about our refund policy,
              please contact our customer support team at [support@example.com].
              We are here to assist you and ensure your satisfaction with
              QuickCart.
            </Typography>
            <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
              6. Cancellation Policy
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              You have the option to cancel your order within [X] hours of
              placing it. After this period, cancellations may not be accepted
              as orders could already be in the process of preparation and
              delivery.
            </Typography>

            <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
              7. Damaged or Defective Items
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If you receive damaged or defective items, please contact our
              customer support team immediately. Provide clear photos of the
              damaged or defective products, and we will assist you in the
              replacement or refund process.
            </Typography>

            <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
              8. Late or Missing Refunds
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If you haven't received your refund within [X] business days,
              first check your bank account. Then contact your credit card
              company or bank, as it may take some time before your refund is
              officially posted. If the issue persists, contact our customer
              support for further assistance.
            </Typography>

            <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
              9. Changes to This Refund Policy
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              QuickCart reserves the right to modify or update this refund
              policy at any time. Changes will be effective immediately upon
              posting on the website. It is your responsibility to review this
              policy periodically for any updates.
            </Typography>

            <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
              10. Contact Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If you have any questions about our refund policy, please contact
              us at [support@example.com] or [customer service phone number].
              Our customer support team is available to assist you during our
              business hours.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className="my-5 ">
          <Grid container className="p-5">
            <Grid
              item
              xs={12}
              className="px-5 font-semibold border-[1px] border-gray-300 my-5 hover:shadow-xl rounded-xl p-5"
            >
              <h1 className="text-2xl mb-4">Top Selling</h1>
              <hr className="label-line mb-5" />
              {categories.slice(0, 3).map((item, index) => (
                <Card
                  key={index}
                  className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition  "
                >
                  <CardContent className="flex">
                    <CardMedia
                      component="img"
                      height="100"
                      width="100"
                      image={item.image}
                      alt={item.name}
                      className="h-[100px] w-[100px]"
                    />
                    <div className="details ml-3">
                      <Typography
                        variant="h6"
                        component="div"
                        className="mb-2 text-md"
                      >
                        {item.name}
                      </Typography>
                      <div className="flex items-center">
                        <Rating value={5} size="small" readOnly />
                        <Typography
                          variant="body2"
                          component="span"
                          className="ml-1 text-gray-400"
                          id={`rate${index}`}
                        >
                          5
                        </Typography>
                      </div>
                      <div className="price mt-1">
                        <span className="underline text-primary font-semibold">
                          ₹ 22.50
                        </span>
                        <del className="text-gray-300 text-xs ml-1">$23.50</del>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              className="px-5 font-semibold border-[1px] border-gray-300 my-5 hover:shadow-xl rounded-xl p-5"
            >
              <h1 className="text-2xl mb-4">Trending Products</h1>
              <hr className="label-line mb-5" />
              {categories.slice(0, 3).map((item, index) => (
                <Card
                  key={index}
                  className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
                >
                  <CardContent className="flex">
                    <CardMedia
                      component="img"
                      height="100"
                      width="100"
                      image={item.image}
                      alt={item.name}
                      className="h-[100px] w-[100px]"
                    />
                    <div className="details ml-3">
                      <Typography
                        variant="h6"
                        component="div"
                        className="mb-2 text-md"
                      >
                        {item.name}
                      </Typography>
                      <div className="flex items-center">
                        <Rating value={5} size="small" readOnly />
                        <Typography
                          variant="body2"
                          component="span"
                          className="ml-1 text-gray-400"
                          id={`Start${index}`}
                        >
                          5
                        </Typography>
                      </div>
                      <div className="price mt-1">
                        <span className="underline text-primary font-semibold">
                          ₹ 22.50
                        </span>
                        <del className="text-gray-300 text-xs ml-1">$23.50</del>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              className="px-5 font-semibold border-[1px] border-gray-300 my-5 hover:shadow-xl rounded-xl p-5"
            >
              <h1 className="text-2xl mb-4">Recently added</h1>
              <hr className="label-line mb-5" />
              {categories.slice(0, 3).map((item, index) => (
                <Card
                  key={index}
                  className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
                >
                  <CardContent className="flex">
                    <CardMedia
                      component="img"
                      height="100"
                      width="100"
                      image={item.image}
                      alt={item.name}
                      className="h-[100px] w-[100px]"
                    />
                    <div className="details ml-3">
                      <Typography
                        variant="h6"
                        component="div"
                        className="mb-2 text-md"
                      >
                        {item.name}
                      </Typography>
                      <div className="flex items-center">
                        <Rating
                          value={5}
                          size="small"
                          id={`ratingstar${index}`}
                          readOnly
                        />
                        <Typography
                          variant="body2"
                          component="span"
                          className="ml-1 text-gray-400"
                        >
                          5
                        </Typography>
                      </div>
                      <div className="price mt-1">
                        <span className="underline text-primary font-semibold">
                          ₹ 22.50
                        </span>
                        <del className="text-gray-300 text-xs ml-1">$23.50</del>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              className="px-5 font-semibold border-[1px] border-gray-300 my-5 hover:shadow-xl rounded-xl p-5"
            >
              <h1 className="text-2xl mb-4">Top Rated</h1>
              <hr className="label-line mb-5" />
              {categories.slice(0, 3).map((item, index) => (
                <Card
                  key={index}
                  className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
                >
                  <CardContent className="flex">
                    <CardMedia
                      component="img"
                      height="100"
                      width="100"
                      image={item.image}
                      alt={item.name}
                      className="h-[100px] w-[100px]"
                    />
                    <div className="details ml-3">
                      <Typography
                        variant="h6"
                        component="div"
                        className="mb-2 text-md"
                      >
                        {item.name}
                      </Typography>
                      <div className="flex items-center">
                        <Rating
                          value={5}
                          size="small"
                          id={`allStart${index}`}
                          readOnly
                        />
                        <Typography
                          variant="body2"
                          component="span"
                          className="ml-1 text-gray-400"
                        >
                          5
                        </Typography>
                      </div>
                      <div className="price mt-1">
                        <span className="underline text-primary font-semibold">
                          ₹ 22.50
                        </span>
                        <del className="text-gray-300 text-xs ml-1">$23.50</del>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default RefundPolicy;
