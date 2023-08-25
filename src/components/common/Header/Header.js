// components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DropdownMenu from "../DropdownMenu";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Container className="container">
        <div className="header-row">
          <div className="logo">
            <Link to="/" className="logo-link">
              <h1>Shopping Cafe</h1>
            </Link>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <input type="text" placeholder="Search for products brands and more" className="search-box" />
            <ul className="nav-list right-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <PersonIcon /> Profile
                  <DropdownMenu />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FavoriteBorderIcon /> Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <WorkOutlineIcon /> Bag
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
