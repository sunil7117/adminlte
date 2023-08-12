import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
const Popup = styled(Box)(({ theme }) => ({
  position: "absolute",
  minWidth: "290px",
  zIndex: 1000,
  right: 0,
  top: "48px",
  [theme.breakpoints.down("md")]: {
    position: "fixed",
    top: 95,
    right: 20,
  },
}));
const Profile = () => {
  return (
    <Popup>
      <Card sx={{}}>
        <CardContent sx={{ padding: 0 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#3C8DBC",
              height: 160,
              color: "#C4D8E9",
            }}
          >
            <Avatar sx={{ width: 80, height: 80 }}>M</Avatar>
            <Typography sx={{ paddingTop: 2 }}>
              Alexander Pierce - Web Developer
            </Typography>
            <Typography variant="subtitle2">Member since Nov. 2012</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "#fff",
              height: 70,
            }}
          >
            <Button size="small" sx={{ textTransform: "none", color: "#000" }}>
              Followers
            </Button>
            <Button size="small" sx={{ textTransform: "none", color: "#000" }}>
              Sales
            </Button>
            <Button size="small" sx={{ textTransform: "none", color: "#000" }}>
              Friends
            </Button>
          </Box>
        </CardContent>
        <CardContent
          sx={{
            background: "#F9F9F9",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "&.MuiCardContent-root:last-child": { padding: "10px" },
          }}
        >
          <Button
            size="small"
            sx={{
              textTransform: "none",
              bgcolor: "#F9F9F9",
              color: "#000",
              border: "1px solid #ADADAD",
            }}
          >
            Profile
          </Button>
          <Button
            size="small"
            sx={{
              textTransform: "none",
              bgcolor: "#F9F9F9",
              color: "#000",
              border: "1px solid #ADADAD",
            }}
          >
            Sign out
          </Button>
        </CardContent>
      </Card>
    </Popup>
  );
};

export default Profile;
