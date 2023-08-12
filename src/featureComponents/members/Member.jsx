import { Avatar, Box, Typography, styled } from "@mui/material";
import React from "react";
import { members } from "../../constant/members";

import Layout from "../../layout/Layout";
import { Add, Close, Remove } from "@mui/icons-material";

const Stacks = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
const member = members.slice(0, 6);
const ShowMember = () => {
  return (
    <Stacks>
      {member.map((item, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 1,
          }}
        >
          <Avatar
            alt="Sunil kumar"
            src={item.img}
            sx={{ width: 60, height: 60 }}
          />
          <Typography variant="subtitle2" fontWeight={600}>
            {item.name}
          </Typography>
          <Typography fontSize={12} sx={{ lineHeight: 0.5, fontWeight: 500 }}>
            {item.time}
          </Typography>
        </Box>
      ))}
    </Stacks>
  );
};

const Member = () => {
  return (
    <Layout
      heading={"New Members"}
      message={{ message: "8 New Members", bg: "#DD4B39" }}
      componentToRender={<ShowMember />}
      width={400}
      borderColor={"red"}
      icons={{
        closeIcon: <Close id="icons" />,
        removeIcon: <Remove id="icons" />,
        addIcon: <Add id="icons" />,
      }}
      footerData={[{ buttonname: "View All Users" }]}
    />
  );
};

export default Member;
