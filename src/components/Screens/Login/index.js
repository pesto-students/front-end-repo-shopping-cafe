import React from "react";
import { Container } from "@mui/material";
import Textfield from "../../common/Textfield";
import Button from "@mui/material/Button";
import "./style.css";

export default function Login() {
  return (
    <Container className="container">
      <div className="entry-form">
        <div className="form">
          <h1>Login page</h1>
          <Textfield placeholder="User Name" />
          <Textfield placeholder="Password" />
          <Button type="submit" className="submit-btn">Login</Button>
        </div>
      </div>
    </Container>
  );
}
