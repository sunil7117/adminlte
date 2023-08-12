import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  RadioButtonUncheckedRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { menulist } from "../../constant/sidebarMenu";
import { useNavigate } from "react-router-dom";

const BigScreens = styled(Box)(({ theme }) => ({
  width: "220px",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    display: " none",
  },
}));
const Header = styled(Box)`
  /* background-color: red; */
`;
const Top = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Online = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
  & > p {
    font-size: 12px;
  }
`;
const OnlineIcon = styled(Box)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
`;
const TopSearch = styled(Box)`
  margin: 20px 0 6px 0;
`;
const SearchBox = styled(TextField)``;

const Dropdown = styled(List)`
  padding: 0;
`;
const DropdownMenu = styled(ListItem)`
  color: #b8c7ce;
  background-color: #1e282c;
  cursor: pointer;
  padding: 6px 16px;
  & > div {
    margin-left: 8px;
  }
  & > div > span {
    font-size: 14px;
  }
  &:hover {
    color: #fff;
  }
`;
const Attribute = styled(Box)`
  border-radius: 4px;
  padding: 1px 5px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`;

const SubMenu = styled(ListItemText)`
  & > span {
    font-size: 12px !important;
  }
`;
const Main = styled(Box)``;

const SmallScreens = styled(Box)`
  width: 50px;
  padding: 8px;
`;

export const BigScreen = () => {
  const [inputColor, setInputColor] = useState("#374850");
  const [color, setColor] = useState("#66615B");
  const [keyDown, SetKeyDown] = useState(null);
  const [open, SetOpen] = useState(false);
  const navigate = useNavigate();

  const handleActiveInput = () => {
    setInputColor("#fff");
    setColor("#A6B4A6");
  };
  const handleUnactiveInput = () => {
    setInputColor("#374850");
  };
  const handleDropdown = (id) => {
    SetOpen(false);
    SetKeyDown((prevId) => (prevId === id ? null : id));
    SetOpen(true);
  };
  const handleRoutes = (routeId) => {
    const route = routeId.replace(/\s/g, "");
    // alert(route);
    navigate(route);
  };
  return (
    <BigScreens>
      <Box style={{ background: "#222D32", padding: "10px 10px 6px 10px " }}>
        <Header>
          <Top>
            <Avatar sx={{ width: 30, height: 30 }}></Avatar>
            <Box>
              <Typography style={{ fontWeight: 600, fontSize: 14 }}>
                Alexander Pierce
              </Typography>
              <Online>
                <OnlineIcon /> <Typography>Online</Typography>
              </Online>
            </Box>
          </Top>
          <TopSearch>
            <SearchBox
              onFocus={handleActiveInput}
              onBlur={handleUnactiveInput}
              style={{
                background: inputColor,
                borderRadius: 5,
                border: "none",
              }}
              sx={{ input: { color: color } }}
              inputProps={{ style: { fontSize: 14 } }}
              size="small"
              placeholder="Search..."
            />
          </TopSearch>
        </Header>
      </Box>
      <Main>
        <Typography
          style={{ padding: "10px 12px ", color: "#4b646f", fontSize: "12px" }}
        >
          MAIN NAVIGATION
        </Typography>
        {menulist.map((item) => (
          <Dropdown onClick={() => handleDropdown(item.menu)} key={item.menu}>
            <DropdownMenu>
              {item.icon}
              <ListItemText primary={item.menu} />
              {item.attributes?.length ? (
                item.attributes.map((atr) => (
                  <Attribute key={atr.value} sx={{ background: atr.color }}>
                    {atr.value}
                  </Attribute>
                ))
              ) : keyDown === item.menu ? (
                <KeyboardArrowDown
                  style={{ width: "1.1rem", height: "1.1rem" }}
                />
              ) : (
                <KeyboardArrowLeft
                  style={{ width: "1.1rem", height: "1.1rem" }}
                />
              )}
            </DropdownMenu>
            {/* Dropdown list */}
            {item.subMenu?.length > 0 && keyDown === item.menu && (
              <Collapse in={open}>
                <Dropdown>
                  {item.subMenu?.map((submenu) => (
                    <DropdownMenu
                      onClick={() => handleRoutes(submenu.menulist)}
                      key={submenu.menulist}
                      sx={{ background: "#2c3b41", padding: "3px 16px" }}
                    >
                      <RadioButtonUncheckedRounded
                        style={{
                          width: "0.9rem",
                          height: "0.9rem",
                        }}
                      />
                      <SubMenu primary={submenu.menulist} />
                    </DropdownMenu>
                  ))}
                </Dropdown>
              </Collapse>
            )}
          </Dropdown>
        ))}
      </Main>
    </BigScreens>
  );
};
const SmallMenu = styled(Box)`
  cursor: pointer;
  position: relative;
  color: #b8c7ce;
  padding: 6px 12px;
  background-color: red;

  &:hover > ul {
    display: block;
    background-color: green;
  }
`;
const SmallMenuList = styled(List)`
  position: absolute;
  left: 58px;
  top: 0;
  display: none;
  background: #222d32;
`;
export const SmallScreen = () => {
  const handleOpenMenu = (e) => {};
  return (
    <SmallScreens>
      <Box style={{ background: "#222D32" }}>
        <Avatar sx={{ width: 30, height: 30, ml: 1, mt: 1, mb: 2 }}></Avatar>
      </Box>
    </SmallScreens>
  );
};
