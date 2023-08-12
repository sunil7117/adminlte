import React from "react";
import AreaChart from "../../featureComponents/AreaChart";
import AllHeaders from "../../featureComponents/AllHeaders";
import { CardInfoTwo } from "../../featureComponents/CardInfo";
import Member from "../../featureComponents/members/Member";
import Products from "../../featureComponents/productlist/Products";
import Orders from "../../featureComponents/order/Orders";
import Chat from "../../featureComponents/chat/Chat";
const Dashboardv2 = ({ link1, pages }) => {
  return (
    <div>
      <AllHeaders data={link1} pages={pages} />
      <CardInfoTwo />
      <Member />
      <Products />
      <Orders />
      <Chat />
    </div>
  );
};

export default Dashboardv2;
