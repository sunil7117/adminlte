import styled from "@emotion/styled";
import { ArrowCircleRight, WorkOutline } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { dashboardv1, dashboardv2 } from "../constant/CardInfo";
const Wrapper = styled(Box)``;
const Boxes = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InfoButton = styled(Button)`
  color: #ffffffcc;
  text-transform: none;
  outline: none;
  border: none;
  box-shadow: none;
`;
export const CardInfoOne = () => {
  return (
    <Grid container spacing={3} pt={1.5}>
      {dashboardv1.map((data) => (
        <Grid item xs={12} sm={6} md={6} lg={3} key={data.content}>
          <Wrapper>
            <Boxes bgcolor={data.bgcolor}>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h4" fontWeight="700" color={"#fff"}>
                  {data.number}
                </Typography>
                <Typography variant="body2" color={"#fff"} fontWeight="300">
                  {data.content}
                </Typography>
              </Box>
              <Box>
                <WorkOutline sx={{ fontSize: 80 }} />
              </Box>
            </Boxes>
            <InfoButton
              style={{ background: data.buttonBgColor }}
              variant="contained"
              size="small"
              fullWidth
            >
              more info <ArrowCircleRight sx={{ ml: "10px" }} />
            </InfoButton>
          </Wrapper>
        </Grid>
      ))}
    </Grid>
  );
};
export const CardInfoTwo = () => {
  return (
    <Grid container spacing={3} pt={1.5}>
      {dashboardv2.map((data) => (
        <Grid item xs={12} sm={6} md={6} lg={3} key={data.content}>
          <Wrapper>
            <Boxes bgcolor={data.bgcolor}>
              <Box sx={{ flex: 1.8 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  {data.icon}
                </div>
              </Box>
              <Box sx={{ padding: 2, flex: 2, background: "#fff" }}>
                <Typography
                  variant="subtitle2"
                  textTransform={"uppercase"}
                  fontWeight="300"
                >
                  {data.content}
                </Typography>
                <Typography variant="" fontWeight="700">
                  {data.number}
                </Typography>
              </Box>
            </Boxes>
          </Wrapper>
        </Grid>
      ))}
    </Grid>
  );
};
