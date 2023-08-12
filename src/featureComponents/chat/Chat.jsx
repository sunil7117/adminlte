import React from "react";
import Layout from "../../layout/Layout";
import { Add, Close, MapsUgc, Remove } from "@mui/icons-material";

const DirectChat = () => {
  return <h2>sunil</h2>;
};
const Chat = () => {
  return (
    <Layout
      componentToRender={<DirectChat />}
      heading="Direct Chat"
      borderColor="#F39C12"
      message={{ message: "3", bg: "#F39C12" }}
      icons={{
        id: "chat",
        closeIcon: <Close id="icons" />,
        removeIcon: <Remove id="icons" />,
        addIcon: <Add id="icons" />,
        chat: <MapsUgc id="icons" />,
      }}
    />
  );
};

export default Chat;
