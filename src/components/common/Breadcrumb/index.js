import React from "react";
import './style.css'

const Breadcrumb = (props) =>{
    return(
        <>
        <p className="breadcrumb">{props.breadcrumbs}</p>
    </>
    )
   
}

export default Breadcrumb