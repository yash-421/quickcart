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
import { useRouter } from "next/navigation";

const TermsAndConditions = () => {
  const categories = useSelector((state: RootState) => state.products.value);
  const router = useRouter();
  const navigateTo = (path: string) => {
    console.log(path);

    router.push(path);
  };

  return (
    <Layout title="Terms and Conditions">
      <Grid container className="px-10" rowGap={5}>
        <Grid item xs={12} lg={8} className="my-5 mt-20 px-5">
          <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
            Terms and Conditions
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Welcome to QuickCart! These terms and conditions outline the rules
            and regulations for the use of our website.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use QuickCart if you do not agree to
            take all of the terms and conditions stated on this page.
          </Typography>
          <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
            1. License to Use QuickCart
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Unless otherwise stated, QuickCart and/or its licensors own the
            intellectual property rights for all material on QuickCart. All
            intellectual property rights are reserved. You may access this from
            QuickCart for your own personal use subjected to restrictions set in
            these terms and conditions.
          </Typography>
          <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
            2. Restrictions
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            You are specifically restricted from all of the following:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>publishing any QuickCart material in any other media;</li>
            <li>
              selling, sublicensing, and/or otherwise commercializing any
              QuickCart material;
            </li>
            <li>publicly performing and/or showing any QuickCart material;</li>
            <li>
              using this website in any way that is or may be damaging to this
              website;
            </li>
            <li>
              using this website in any way that impacts user access to this
              website;
            </li>
            <li>
              using this website contrary to applicable laws and regulations, or
              in any way may cause harm to the website, or to any person or
              business entity;
            </li>
            <li>
              engaging in any data mining, data harvesting, data extracting, or
              any other similar activity in relation to this website;
            </li>
            <li>
              certain areas of this website are restricted from being accessed
              by you, and QuickCart may further restrict access by you to any
              areas of this website, at any time, in absolute discretion.
            </li>
          </Box>
          <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
            3. Your Content
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            In these terms and conditions, "Your Content" shall mean any audio,
            video text, images, or other material you choose to display on
            QuickCart. By displaying Your Content, you grant QuickCart a
            non-exclusive, worldwide irrevocable, sub-licensable license to use,
            reproduce, adapt, publish, translate, and distribute it in any and
            all media.
          </Typography>
          <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
            4. No Warranties
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This website is provided "as is," with all faults, and QuickCart
            makes no express or implied representations or warranties of any
            kind related to this website or the materials contained on this
            website. Additionally, nothing contained on this website shall be
            construed as providing consult or advice to you.
          </Typography>
          <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
            5. Limitation of Liability
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            In no event shall QuickCart, nor any of its officers, directors, and
            employees, be held liable for anything arising out of or in any way
            connected with your use of this website, whether such liability is
            under contract. QuickCart, including its officers, directors, and
            employees, shall not be held liable for any indirect, consequential,
            or special liability arising out of or in any way related to your
            use of this website.
          </Typography>
          <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
            6. User Account
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            If you create an account on QuickCart, you are responsible for
            maintaining the security of your account and the confidentiality of
            your password. You agree to accept responsibility for all activities
            that occur under your account or password.
          </Typography>

          <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
            7. Prohibited Activities
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            You agree not to engage in any activity that disrupts or interferes
            with the functionality of QuickCart. Prohibited activities include
            but are not limited to hacking, data scraping, introducing malicious
            code, or any action that may harm the website or its users.
          </Typography>

          <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
            8. Third-Party Links
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            QuickCart may contain links to third-party websites that are not
            owned or controlled by us. We have no control over and assume no
            responsibility for the content, privacy policies, or practices of
            any third-party sites or services. You further acknowledge and agree
            that QuickCart shall not be responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by
            or in connection with the use of or reliance on any such content,
            goods, or services available on or through any such websites.
          </Typography>

          <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
            9. Governing Law
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            These terms and conditions are governed by and construed in
            accordance with the laws of [Your Jurisdiction], and you irrevocably
            submit to the exclusive jurisdiction of the courts in that State or
            location.
          </Typography>

          <Typography variant="h5" className="mt-20" sx={{ mb: 2 }}>
            10. Changes to Terms and Conditions
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            QuickCart reserves the right to modify or replace these terms and
            conditions at any time. Your continued use of the website after any
            such changes constitutes your acceptance of the new terms and
            conditions.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4} className="my-5 ">
          <Grid container className="p-5">
            <Grid item xs={12} sm={6} lg={12} className="px-5 font-semibold">
          <h1 className="text-2xl mb-4">Top Selling</h1>
          <hr className="label-line mb-5" />
          {categories.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
              onClick={() => navigateTo("products/1")}
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
        <Grid item xs={12} sm={6} lg={12} className="px-5 font-semibold">
          <h1 className="text-2xl mb-4">Trending Products</h1>
          <hr className="label-line mb-5" />
          {categories.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
              onClick={() => navigateTo("products/1")}
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
        <Grid item xs={12} sm={6} lg={12} className="px-5 font-semibold">
          <h1 className="text-2xl mb-4">Recently added</h1>
          <hr className="label-line mb-5" />
          {categories.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
              onClick={() => navigateTo("products/1")}
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
        <Grid item xs={12} sm={6} lg={12} className="px-5 font-semibold">
          <h1 className="text-2xl mb-4">Top Rated</h1>
          <hr className="label-line mb-5" />
          {categories.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              className=" px-2 shadow-none hover:-translate-y-[5px] cursor-pointer transition "
              onClick={() => navigateTo("products/1")}
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

export default TermsAndConditions;
