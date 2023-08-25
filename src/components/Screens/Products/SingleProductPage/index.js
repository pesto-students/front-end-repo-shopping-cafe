import React from 'react'
import Breadcrumb from '../../../common/Breadcrumb';
import Card from "../../../common/Card";
import ProductCarousel from './ProductCarousel'
import { Container, Grid } from '@mui/material'
import "./style.css"

export default function SingleProductPage() {
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
    <Container className="container">
      <h1>SingleProductPage</h1>
      <Breadcrumb breadcrumbs='Product / Mens / Shirts / Armani Veni Vidi Vici' />
      <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className='single-product-grid-section'
        >
          <Grid item xs={3} className='carousel-magnify-section'>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <ProductCarousel />
            </Grid>
          </Grid>
      </Grid>

      <div className='similar-product'>
      <h1>Similar Product</h1>
      <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className='single-product-grid-section'
        >
          
          <Card cardDataDetails={cardDataDetails} />
          </Grid>
      </div>

      

      
    </Container>
  )
}
