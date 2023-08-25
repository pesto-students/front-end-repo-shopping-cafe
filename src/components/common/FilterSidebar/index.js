import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";

const FilterSidebar = () => {
  return (
    <>
      <div className="sidebar-section">
        <h3>CATEGORIES</h3>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Tshirts(105746)" />
          <FormControlLabel
            control={<Checkbox />}
            label="Lounge Tshirts(1212)"
          />
        </FormGroup>
      </div>

      <div className="sidebar-section">
        <h3>BRAND</h3>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Roadster" />
          <FormControlLabel control={<Checkbox />} label="Wrogn" />
          <FormControlLabel control={<Checkbox />} label="Puma" />
          <FormControlLabel control={<Checkbox />} label="Reebok" />
          <FormControlLabel control={<Checkbox />} label="Roadster" />
          <FormControlLabel control={<Checkbox />} label="Wrogn" />
          <FormControlLabel control={<Checkbox />} label="Puma" />
          <FormControlLabel control={<Checkbox />} label="Reebok" />
        </FormGroup>
      </div>

      <div className="sidebar-section">
        <h3>PRICE</h3>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Rs. 164 to Rs. 873(3570)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Rs. 164 to Rs. 873(3570)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Rs. 164 to Rs. 873(3570)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Rs. 164 to Rs. 873(3570)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Rs. 164 to Rs. 873(3570)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Rs. 164 to Rs. 873(3570)"
          />
        </FormGroup>
      </div>
    </>
  );
};

export default FilterSidebar;
