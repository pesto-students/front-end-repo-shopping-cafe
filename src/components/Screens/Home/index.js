import * as React from "react";
import BannerSlider from "../../common/BannerSlider/BannerSlider";
import Container from "@mui/material/Container";
import Card from "../../common/Card";
import Grid from "@mui/material/Grid";
import TileCard from "../../common/TileCard/TileCard";
import Logos from "../../../images/logo1.png"
import "../../style.css";
function Home() {
  const tileCardData = [
    {
      icon: "man",
      title: "Man",
      description: "We provide top-notch quality services to our clients.",
    },
    {
      icon: "woman",
      title: "Woman",
      description: "Our goal is to ensure complete customer satisfaction.",
    },
    {
      icon: "sports",
      title: "Sports",
      description: "We believe in open and transparent communication.",
    },
    {
      icon: "baby",
      title: "Kids",
      description: "We believe in open and transparent communication.",
    },
    // Add more card data as needed
  ];

  const cardDataDetails = [
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Armani Veni',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  return (
    <>
      <BannerSlider />
      <Container maxWidth="lg" className="container">
        <div className="section browser-categories-section">
          <h1>Browser Categories</h1>
          <TileCard tileCardData={tileCardData} />
        </div>

        <div className="section new-arrivals">
          <h1>New Arrivals</h1>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Card cardDataDetails={cardDataDetails} />
          </Grid>
        </div>
        <div className="section brands-deal">
        
            <h1>Top Brands Deal</h1>
            <p>Up To60% off on brands</p>
            <div className="logos">
              <img src={Logos} alt="Brand Logo" />
              <img src={Logos} alt="Brand Logo" />
              <img src={Logos} alt="Brand Logo" />
              <img src={Logos} alt="Brand Logo" />
              <img src={Logos} alt="Brand Logo" />
              <img src={Logos} alt="Brand Logo" />
              <img src={Logos} alt="Brand Logo" />
              <img src={Logos} alt="Brand Logo" />
            </div>
          
        </div>
        <div className="section recently-view-products">
          <h1>Recently View Products</h1>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Card cardDataDetails={cardDataDetails} />
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default Home;
