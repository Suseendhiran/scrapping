import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";

function Index({
  setSourceFilter,
  nameFilter,
  setNameFilter,
  sourceFilter,
  handleApplyFilter,
  handleClearFilter,
}) {
  return (
    <div className="filterWrapper">
      <div>
        <TextField
          style={{ width: "400px", marginRight: "20px" }}
          onChange={(e) => setNameFilter(e.target.value)}
          value={nameFilter}
          placeholder="Search for mobiles and Laptops.."
        />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sourceFilter}
          label="Source"
          onChange={(e) => setSourceFilter(e.target.value)}
          style={{ width: "200px", marginRight: "20px" }}
        >
          <MenuItem value={"Amazon"}>Amazon</MenuItem>
          <MenuItem value={"Flipkart"}>Flipkart</MenuItem>
          <MenuItem value={"Snapdeal"}>Snapdeal</MenuItem>
        </Select>
      </div>
      <div>
        <Button
          onClick={() => handleApplyFilter(nameFilter, sourceFilter)}
          variant="contained"
        >
          Apply Filter
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          onClick={() => handleClearFilter()}
          variant="contained"
        >
          Clear Filter
        </Button>
      </div>
    </div>
  );
}

export default Index;
