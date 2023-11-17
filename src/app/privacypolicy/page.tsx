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

const PrivacyPolicy = () => {
  const categories = useSelector((state: RootState) => state.products.value);
  return (
    <Layout title="Privacy Policy">
      <Grid container className="px-5" rowGap={5}>
        <Grid item xs={8} className="my-5 px-5">
          <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
            Who We Are
          </Typography>
          <Box sx={{ color: "text.secondary" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Welcome to QuickCart, your go-to destination for all your grocery
              needs. We are dedicated to providing a seamless and convenient
              shopping experience, striving to make your grocery shopping
              hassle-free and enjoyable. Our commitment is to deliver
              high-quality products and exceptional service that sets us apart
              in the online grocery market.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              At QuickCart, we believe in simplifying your life by offering a
              wide range of grocery products tailored to your preferences. Our
              passionate team is dedicated to ensuring that you have access to
              fresh, high-quality, and affordable groceries. With a focus on
              customer satisfaction and reliability, we aim to be your trusted
              partner in meeting your daily grocery needs.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              As a leader in the online grocery industry, QuickCart takes pride
              in providing a diverse selection of products and a user-friendly
              shopping platform. Our team is composed of dedicated professionals
              working together to redefine the grocery shopping experience. We
              prioritize efficiency, affordability, and customer satisfaction to
              deliver the best online grocery service.
            </Typography>
            <Typography variant="body1">
              Thank you for choosing QuickCart. Explore our website to discover
              a wide array of grocery products, from fresh produce to pantry
              essentials. Feel free to reach out if you have any questions or
              feedback. We're excited to have you on this journey with us!
            </Typography>
          </Box>

          <Typography variant="h4" component="h1" className="my-5 mt-7">
            Comments
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="text-gray-400 mb-4"
          >
            When visitors leave comments on QuickCart, we collect the data shown
            in the comments form, including the visitor’s IP address and browser
            user agent string. This information is collected to help us with
            spam detection and ensure the security of our platform.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="text-gray-400 mb-4"
          >
            An anonymized string created from your email address (also called a
            hash) may be provided to the Gravatar service to see if you are
            using it. The Gravatar service privacy policy is available at
            [Gravatar Privacy Policy Link]. After the approval of your comment,
            your profile picture is visible to the public in the context of your
            comment.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="text-gray-400 mb-4"
          >
            We value and appreciate the engagement of our community through
            comments. If you choose to leave a comment on QuickCart, please be
            mindful of the information you share, keeping in mind that it will
            be visible to other users. Do not include sensitive personal
            information in your comments for your privacy and security.
          </Typography>
          <Typography variant="h4" component="h1" className="my-5 mt-7">
            Media
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            When you upload images to QuickCart, we ask that you avoid uploading
            images with embedded location data (EXIF GPS) included. This is to
            ensure the privacy and security of our users. Visitors to the
            QuickCart website can download and extract any location data from
            images on the website if it's present in the uploaded images.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            We take user privacy seriously, and we recommend reviewing your
            images for any embedded location data before uploading them to our
            platform. Removing location data from your images helps protect your
            personal information and ensures a safer online environment for all
            users.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            If you have any concerns or questions regarding the handling of
            media on QuickCart, please feel free to reach out to our support
            team.
          </Typography>

          <Typography variant="h4" component="h1" className="mt-7 my-5">
            Cookies
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            When you leave a comment on QuickCart, you may opt-in to saving your
            name, email address, and website in cookies. These cookies are
            designed for your convenience, eliminating the need to fill in your
            details again when you leave another comment. These cookies will
            last for one year.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            If you visit our login page, we will set a temporary cookie to
            determine if your browser accepts cookies. This cookie contains no
            personal data and is discarded when you close your browser.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            When you log in, we will also set up several cookies to save your
            login information and your screen display choices. Login cookies
            last for two days, and screen options cookies last for a year. If
            you select "Remember Me," your login will persist for two weeks. If
            you log out of your account, the login cookies will be removed.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            If you edit or publish an article, an additional cookie will be
            saved in your browser. This cookie includes no personal data and
            simply indicates the post ID of the article you just edited. It
            expires after 1 day.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            QuickCart respects your privacy, and these cookies are implemented
            to enhance your user experience on our platform. If you have any
            concerns about the use of cookies, you can adjust your browser
            settings to manage or disable them. However, please note that some
            features on QuickCart may not function properly without cookies.
          </Typography>

          <Typography variant="h4" component="h1" className="mt-7 my-5">
            Where we send your data
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            Visitor comments on QuickCart may be checked through an automated
            spam detection service. This is to ensure the integrity and security
            of our platform and to protect our users from unwanted or harmful
            content.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            When you request a password reset, your IP address will be included
            in the reset email. This is a security measure to verify your
            identity and protect your account from unauthorized access.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            QuickCart is committed to safeguarding your data, and we take
            necessary precautions to ensure that the information you share with
            us is handled securely. We do not sell, trade, or otherwise transfer
            your personally identifiable information to outside parties without
            your consent, except where required by law or for the purposes
            outlined in our privacy policy.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="mb-2 text-gray-400"
          >
            If you have any concerns or questions about the handling of your
            data on QuickCart, please contact our support team. We are dedicated
            to providing transparent information about our data practices and
            ensuring the privacy and security of our users.
          </Typography>
          <Typography variant="h4" component="h1" className="mt-7 my-5">
            Who we share your data with
          </Typography>

          <Typography variant="body1" component="p" className="mb-2 text-gray-400">
            At QuickCart, we prioritize the privacy and security of your data.
            We do not share your personal information with third parties unless
            explicitly stated in this privacy policy or with your explicit
            consent.
          </Typography>

          <Typography variant="body1" component="p" className="mb-2 text-gray-400">
            Visitor comments on QuickCart may be checked through an automated
            spam detection service to maintain the integrity and security of our
            platform. However, this process is automated, and the data is not
            shared beyond the necessary measures to identify and prevent spam.
          </Typography>

          <Typography variant="body1" component="p" className="mb-2 text-gray-400">
            In the event that you request a password reset, your IP address will
            be included in the reset email. This is solely for security purposes
            to verify your identity and protect your account from unauthorized
            access.
          </Typography>

          <Typography variant="body1" component="p" className="mb-2 text-gray-400">
            QuickCart does not engage in the sale, trade, or transfer of your
            personally identifiable information to external parties without your
            explicit consent, except in cases where required by law or outlined
            in this privacy policy.
          </Typography>

          <Typography variant="body1" component="p" className="mb-2 text-gray-400">
            We take your privacy seriously, and our commitment is to maintain a
            secure and trustworthy environment for all QuickCart users. If you
            have any concerns or questions regarding the sharing of your data,
            please reach out to our support team for clarification.
          </Typography>
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

export default PrivacyPolicy;
