import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Foot = styled(Box)`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-top: 1px solid #d2d6de;
`;
const Left = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0 10px;
  & > #adminlte:hover {
    color: #3c8dbc;
  }
`;
const Right = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <Foot style={{ background: "#fff" }}>
      <Left>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          Copyright © 2014-2019
        </Typography>
        &nbsp;
        <Typography
          fontSize={12}
          onClick={handleNavigate}
          variant="subtitle2"
          id="adminlte"
          sx={{ fontWeight: 600, cursor: "pointer", color: "blue" }}
        >
          AdminLTE.
        </Typography>
        &nbsp;
        <Typography fontSize={12} variant="subtitle2">
          All rights reserved.
        </Typography>
      </Left>
      <Right>
        <Box>
          <Typography variant="subtitle2" fontWeight={600} component="span">
            Version
          </Typography>
          <span> 2.4.18</span>
        </Box>
      </Right>
    </Foot>
  );
};

export default Footer;
