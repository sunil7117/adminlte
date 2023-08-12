import { Palette } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("above")]: {
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
const Left = styled(Box)`
  display: flex;
  align-items: center;
`;
const Right = styled(Box)(({ theme }) => ({
  display: " flex",
  alignItems: "center",
  fontSize: "12px",
  padding: "4px",
  "& > p": {
    fontSize: "12px",
  },
  [theme.breakpoints.down("md")]: {
    backgroundColor: " #d2d6de",
  },
}));
const HomePage = styled(Typography)`
  cursor: pointer;
`;

const AllHeaders = ({ data, pages }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <Left>
        <Typography variant="h5" fontWeight="500">
          {pages?.pagename}
        </Typography>
        <Typography variant="subtitle2" ml={2} color={"#777777"}>
          {pages?.content}
        </Typography>
      </Left>
      <Right>
        <HomePage mr={1} onClick={handleNavigate}>
          <Palette sx={{ fontSize: 14, mr: 1 }} />
          Home
        </HomePage>
        &#62; {data}
      </Right>
    </Wrapper>
  );
};

export default AllHeaders;
