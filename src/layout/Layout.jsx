import {
  Box,
  Button,
  Card,
  Chip,
  Collapse,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
const CardHeaders = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ecf0f5;
  padding: 8px 10px;
`;
const Left = styled(Box)`
  & > p {
    font-weight: 500;
  }
`;
const Right = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  & > #minimize:hover {
    cursor: pointer;
  }
  & > #icons:hover {
    cursor: pointer;
  }
  & > #minimize #icons {
    color: #98a2a8;
    font-size: 16px;
  }
  & > #icons {
    color: #98a2a8;
    font-size: 16px;
  }
  & > #close:hover {
    cursor: pointer;
  }
  & > #close #icons {
    color: #98a2a8;
    font-size: 16px;
  }
`;
const CardFooter = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-top: 1px solid #ecf0f5;
`;

const Layout = ({
  componentToRender,
  width,
  borderColor,
  icons,
  heading,
  message,
  footerData,
}) => {
  const [minimize, setMinimize] = useState(true);
  const [closebtn, setClosebtn] = useState(true);
  const handleMinimize = () => {
    setMinimize(!minimize);
  };
  const handleClosex = () => {
    setClosebtn(false);
  };
  return (
    <Collapse in={closebtn} timeout={1000} sx={{ margin: "40px 0" }}>
      <Card sx={{ borderTop: `3px solid ${borderColor}`, width: { width } }}>
        <CardHeaders>
          <Left>
            <Typography variant="h6">{heading}</Typography>
          </Left>
          <Right>
            {message && (
              <Chip
                sx={{ background: message.bg, color: "#fff" }}
                label={message.message}
                size="small"
              />
            )}
            <Box id="minimize" onClick={handleMinimize}>
              {minimize ? icons?.removeIcon : icons.addIcon}
            </Box>
            <Tooltip title="chat" id="minimize" placement="top">
              {icons?.chat}
            </Tooltip>

            <Box id="close" onClick={handleClosex}>
              {icons?.closeIcon}
            </Box>
          </Right>
        </CardHeaders>
        <Collapse in={minimize} timeout={1000}>
          {/* code here for new component */}
          {icons.id === "chat" ? (
            "ok"
          ) : (
            <>
              <Box
                sx={{
                  backgroundC: "red",
                  marginLeft: 2,
                  padding: "8px 0",
                  marginRight: 2,
                }}
              >
                {componentToRender}
              </Box>
              {footerData && (
                <CardFooter>
                  {footerData.map((footer) => (
                    <Button
                      key={footer.buttonname}
                      sx={{
                        bgcolor: `${footer.bgcolor}`,
                        textTransform: "none",
                        color: `${footer.color}`,
                        fontSize: `${footer.size}px`,
                      }}
                    >
                      {footer.buttonname}
                    </Button>
                  ))}
                </CardFooter>
              )}
            </>
          )}
        </Collapse>
      </Card>
    </Collapse>
  );
};

export default Layout;
