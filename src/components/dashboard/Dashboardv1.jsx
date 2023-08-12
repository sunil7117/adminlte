import React from "react";
import { CardInfoOne } from "../../featureComponents/CardInfo";
import AllHeaders from "../../featureComponents/AllHeaders";

const Dashboardv1 = ({ link1, pages }) => {
  return (
    <div style={{ width: "100%" }}>
      <AllHeaders data={link1} pages={pages} />
      <CardInfoOne />
    </div>
  );
};

export default Dashboardv1;
