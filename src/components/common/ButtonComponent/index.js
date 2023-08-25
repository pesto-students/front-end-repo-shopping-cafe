import React from "react";
import Button from "@mui/material/Button";
import './style.css'

const ButtonComponent  = (props) => {
    return(
        <>
            <Button  className="loginSignup-btn loginbtn">{props.text}</Button>
            <Button className="loginSignup-btn signupbtn">{props.text}</Button>
        </>
    )
}

export default ButtonComponent;