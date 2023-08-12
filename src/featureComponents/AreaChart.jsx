import { Box, Grid } from "@mui/material";
import React from "react";

const AreaChart = () => {
  return (
    <div>
      <h1>Grid class</h1>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={6}>
          <Box sx={{ width: 300, height: 100, background: "red" }}></Box>
        </Grid>
        <Grid item lg={4} xs={6}>
          <Box sx={{ width: 300, height: 100, background: "blue" }}></Box>
        </Grid>
        <Grid item lg={4} xs={6}>
          <Box sx={{ width: 300, height: 100, background: "red" }}></Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AreaChart;
