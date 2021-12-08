import React from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Formik } from "formik";
import { Button } from "@mui/material";

function Index({ setFilter, filter }) {
  return (
    <Formik
      initialValues={filter}
      enableReinitialize
      onSubmit={(values) => {
        console.log("values", values);
        setFilter(values);
      }}
    >
      {({ handleChange, values, handleSubmit }) => {
        console.log("values", values);
        return (
          <form onSubmit={handleSubmit} className="filterWrapper">
            <div>
              <TextField
                style={{
                  width: "270px",
                  marginRight: "20px",
                  marginBottom: "10px",
                }}
                onChange={handleChange}
                value={values.name}
                name="name"
                placeholder="Search for mobiles and Laptops.."
              />

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.source}
                label="Source"
                onChange={handleChange}
                name="source"
                style={{ width: "270px", marginRight: "20px" }}
              >
                <MenuItem value={"Amazon"}>Amazon</MenuItem>
                <MenuItem value={"Flipkart"}>Flipkart</MenuItem>
                <MenuItem value={"Snapdeal"}>Snapdeal</MenuItem>
              </Select>
            </div>
            <div>
              <Button variant="contained" type="submit">
                Apply Filter
              </Button>
              <Button
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  setFilter({});
                }}
                variant="contained"
              >
                Clear Filter
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default Index;
