import React from "react";
import Layout from "../../layout/Layout";
import { Box, Divider, Typography, styled } from "@mui/material";
import { products } from "../../constant/products";
import defaultimg from "../../img/default-50x50.gif";
import { Add, Close, Remove } from "@mui/icons-material";
const Wrapper = styled(Box)``;
const ProductBox = styled(Box)`
  display: flex;
  gap: 12px;
  padding: 10px 0;
`;
const Left = styled(Box)``;
const Right = styled(Box)`
  width: 100%;
`;
const Headings = styled(Box)`
  display: flex;
  justify-content: space-between;
  & p {
    cursor: pointer;
  }
`;
const Heading = styled(Box)``;
const Price = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

const Content = styled(Box)``;

const Product = () => {
  return (
    <Wrapper>
      {products.map((product, pId) => (
        <div key={pId}>
          <ProductBox key={pId}>
            <Left>
              <img src={defaultimg} alt="" />
            </Left>
            <Right>
              <Headings>
                <Heading>
                  <Typography
                    variant="h6"
                    fontSize={16}
                    fontWeight={600}
                    color={"#9FD9E6"}
                  >
                    {product.heading}
                  </Typography>
                </Heading>
                <Price bgcolor={product.bgColor} color={"#fff"}>
                  <Typography fontSize={14}>${product.price}</Typography>
                </Price>
              </Headings>
              <Content>{product.content}</Content>
            </Right>
          </ProductBox>
          <Divider />
        </div>
      ))}
    </Wrapper>
  );
};
const Products = () => {
  return (
    <Layout
      heading={"Recently added products"}
      componentToRender={<Product />}
      width={400}
      icons={{
        closeIcon: <Close id="icons" />,
        removeIcon: <Remove id="icons" />,
        addIcon: <Add id="icons" />,
      }}
      borderColor={"blue"}
      footerData={[{ buttonname: "View All Products" }]}
    />
  );
};

export default Products;
