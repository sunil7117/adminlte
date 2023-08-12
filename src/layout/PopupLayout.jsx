import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  styled,
} from "@mui/material";

const Popup = styled(Box)(({ theme }) => ({
  position: "absolute",
  minWidth: "290px",
  zIndex: 1000,
  right: 0,
  top: "48px",
  [theme.breakpoints.down("md")]: {
    position: "fixed",
    top: 95,
    right: 0,
  },
}));

const PopupLayout = ({ rendererComponent }) => {
  return (
    <Popup>
      <Card>
        <CardContent
          sx={{ borderBottom: "1px solid #F1F1F1", padding: "10px" }}
        >
          <Typography variant="subtitle2">You have 4 new message</Typography>
        </CardContent>
        <CardContent sx={{ height: "150px", overflowY: "scroll", padding: 0 }}>
          {/* data that will render a page */}
          {rendererComponent}
        </CardContent>
        <CardContent
          sx={{
            borderTop: "1px solid #F1F1F1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&.MuiCardContent-root:last-child": {
              paddingBottom: "1px",
              padding: "2px",
            },
          }}
        >
          <Button size="small" sx={{ textTransform: "none" }}>
            View All
          </Button>
        </CardContent>
      </Card>
    </Popup>
  );
};

export default PopupLayout;
