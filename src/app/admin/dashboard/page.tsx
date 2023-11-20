"use client";
import React from "react";
import AdminLayout from "@/app/shared/adminLayout";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const DashboardPage = () => {
  // Placeholder data
  const cards = [
    { name: "Category A", count: 25 },
    { name: "Category B", count: 18 },
    { name: "Category C", count: 30 },
    { name: "Category A", count: 25 },
    { name: "Category B", count: 18 },
    { name: "Category C", count: 30 },
    { name: "Category A", count: 25 },
    { name: "Category B", count: 18 },
    { name: "Category C", count: 30 },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div>
        <Typography
          variant="h4"
          className="mb-4 font-semibold filter"
          component="h1"
        >
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card
                className={` text-color_9 ${index % 2 == 0 ? "bg-primary" : "bg-secondary"}`}
              >
                <CardContent className=" flex items-center">
                <MdOutlineProductionQuantityLimits className="mr-2 text-2xl" />
                  <Box component="div">
                    <Typography
                      className=" flex items-center"
                      variant="h6"
                      component="div"
                    >
                      {card.name}
                    </Typography>
                    <Typography >
                      Count: {card.count}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
