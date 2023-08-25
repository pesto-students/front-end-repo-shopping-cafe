import React from "react";
import "./footer.css"; // Import your CSS for styling
import { Container, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container">
        <div className="footer-section">
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={6} md={3} className="footer-grid">
              <h2>SHOPING CAFE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <div className="social-icon">
                <span>
                  <FacebookIcon />
                </span>
                <span>
                  <TwitterIcon />
                </span>

                <span>
                  <InstagramIcon />
                </span>
                <span>
                  <YouTubeIcon />
                </span>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3} className="footer-grid">
              <h2>Contact</h2>
              <ul>
                <li>Contact Us</li>
                <li>Shoppingcafe@gmail.com</li>
                <li>Call us: +1 254 568-5479</li>
              </ul>
            </Grid>

            <Grid item xs={12} sm={6} md={3} className="footer-grid">
              <h2>About Us</h2>
              <ul>
                <li>Support Center</li>
                <li>Customer Support</li>
                <li>About Us</li>
              </ul>
            </Grid>

            <Grid item xs={12} sm={6} md={3} className="footer-grid">
              <h2>Customer Care</h2>
              <ul>
                <li>FAQ & Helps</li>
                <li>Shipping & Delivery</li>
                <li>Return & Exchange</li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div className="footer-content">
        <p>&copy; 2023 Shopping Cafe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
