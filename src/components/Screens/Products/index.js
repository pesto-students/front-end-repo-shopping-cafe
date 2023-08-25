import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "../../common/Card";
import FilterSidebar from "../../common/FilterSidebar";
import Breadcrumb from "../../common/Breadcrumb"
import "./style.css";

const Products = () => {
  const cardDataDetails = [
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Armani Veni",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <>
      <Container maxWidth="lg" className="container product-list-page">
        
        <Breadcrumb breadcrumbs='Product / Men' />
        <h2 className="product-title">Men T-Shirts</h2>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className="product-page"
        >
          <Grid item xs={2}>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <FilterSidebar />
            </Grid>
          </Grid>
          <Grid item xs={10} className="product-list-sidebar">
            <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Card cardDataDetails={cardDataDetails} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Products;
