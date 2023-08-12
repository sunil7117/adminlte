import { AppBar, Avatar, Badge, Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import {
  EmojiFlags,
  MailOutline,
  Menu as MenuIcon,
  Notifications,
  Settings,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Profile from "../../featureComponents/headeraddson/Profile";
import Task from "../../featureComponents/headeraddson/Task";
import Nodification from "../../featureComponents/headeraddson/Nodification";
import Message from "../../featureComponents/headeraddson/Message";
const Container = styled(AppBar)(({ theme }) => ({
  flexDirection: "row",
  backgroundColor: " #357ca5",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const Left = styled(Box)`
  background-color: #357ca5;
  text-align: center;
  cursor: pointer;
`;
const Admin = styled(Typography)`
  padding: 8px 0px;
  width: 220px;
  font-size: 20px;
  font-weight: 600;
  & > span {
    font-weight: 100;
  }
`;
const AdminSmall = styled(Typography)`
  width: 50px;
  padding: 8px 8px;
  font-size: 20px;
  font-weight: 600;
  & > span {
    font-weight: 100;
  }
`;
const Right = styled(Box)`
  width: 100%;
  background-color: #3c8dbc;
  /* background-color: red; */
  display: flex;
  align-items: center;
  position: relative;
`;
const Menu = styled(Box)`
  cursor: pointer;
  margin-left: 10px;
`;
const SubMenu = styled(Box)`
  margin-left: auto;
  display: flex;
  margin-right: 10px;
`;
const SubMenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "13px",
  gap: "10px",
  justifyContent: "center",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#357ca5",
  },
  [theme.breakpoints.down("md")]: {
    "& > p": {
      display: "none",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: "8px", // Adjust the width as needed for the badge circle
    height: "12px", // Adjust the height as needed for the badge circle
    fontSize: "8px", // Adjust the font size as needed for the badge content
  },
}));
const Header = ({ big, small }) => {
  const navigate = useNavigate();
  const [openPOPup, setOpenPOPup] = useState(null);
  const [popupClose, setpopupClose] = useState(false);
  const handleMenuOption = () => {
    small(!big);
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleShowPOPup = (selected) => {
    if (openPOPup === null) {
      setpopupClose(true);
    } else if (openPOPup === selected) {
      setpopupClose(!popupClose);
    } else {
      setpopupClose(true);
    }
    setOpenPOPup(selected);
  };
  return (
    <div>
      <Container position="static">
        <Left onClick={handleHome}>
          {big ? (
            <Admin>
              Admin<span>LTE</span>
            </Admin>
          ) : (
            <AdminSmall>
              A<span>LT</span>
            </AdminSmall>
          )}
        </Left>
        <Right>
          <Menu onClick={handleMenuOption}>
            <MenuIcon style={{ width: "0.8em", height: "0.8em" }} />
          </Menu>
          <SubMenu position={"relative"}>
            <Box position={"relative"}>
              <SubMenuBox onClick={() => handleShowPOPup("message")}>
                <StyledBadge badgeContent={4} color="success">
                  <MailOutline style={{ width: "0.8em", height: "0.8em" }} />
                </StyledBadge>
              </SubMenuBox>
              {popupClose && openPOPup === "message" && <Message />}
            </Box>
            <Box position={"relative"}>
              <SubMenuBox onClick={() => handleShowPOPup("nodification")}>
                <StyledBadge badgeContent={10} color="success">
                  <Notifications style={{ width: "0.8em", height: "0.8em" }} />
                </StyledBadge>
              </SubMenuBox>
              {popupClose && openPOPup === "nodification" && <Nodification />}
            </Box>
            <Box position={"relative"}>
              <SubMenuBox onClick={() => handleShowPOPup("task")}>
                <StyledBadge badgeContent={9} color="success">
                  <EmojiFlags style={{ width: "0.8em", height: "0.8em" }} />
                </StyledBadge>
              </SubMenuBox>
              {popupClose && openPOPup === "task" && <Task />}
            </Box>
            <Box position={"relative"}>
              <SubMenuBox onClick={() => handleShowPOPup("profile")}>
                <Avatar sx={{ width: 20, height: 20 }} />
                <Typography variant="body2">Alexader Pierce</Typography>
              </SubMenuBox>
              {popupClose && openPOPup === "profile" && <Profile />}
            </Box>
            <Box>
              <SubMenuBox>
                <Badge>
                  <Settings style={{ width: "0.8em", height: "0.8em" }} />
                </Badge>
              </SubMenuBox>
            </Box>
          </SubMenu>
        </Right>
      </Container>
    </div>
  );
};

export default Header;
