import React from "react";
import AllHeaders from "../../featureComponents/AllHeaders";

const Boxed = ({ link1, pages }) => {
  return (
    <div>
      <AllHeaders data={link1} pages={pages} />
    </div>
  );
};

export default Boxed;
