import React from "react";
import Layout from "../../layout/Layout";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { order } from "../../constant/products";
import { Add, Close, Remove } from "@mui/icons-material";

const Order = () => {
  return (
    <TableContainer sx={{ minWidth: "100%" }}>
      <Table>
        <TableHead sx={{ fontWeight: 700 }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>Order ID</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Item</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Popularity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((order) => (
            <TableRow key={order.order} sx={{}}>
              <TableCell sx={{ color: "blue" }}>{order.order}</TableCell>
              <TableCell>{order.orderItem}</TableCell>
              <TableCell>
                <Box
                  sx={{
                    maxWidth: "60px",
                    textAlign: "center",
                    bgcolor: `${order.bgColor}`,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 12,
                    padding: " 2px 0",
                  }}
                >
                  {order.status}
                </Box>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const Orders = () => {
  return (
    <Layout
      componentToRender={<Order />}
      heading={"Latest Order"}
      borderColor="#00C0EF"
      icons={{
        closeIcon: <Close id="icons" />,
        removeIcon: <Remove id="icons" />,
        addIcon: <Add id="icons" />,
      }}
      footerData={[
        {
          buttonname: "View All Orders",
          bgcolor: "#00ACD6",
          color: "#fff",
          size: 12,
        },
        {
          buttonname: "Place New Order",
          bgcolor: "#E7E7E7",
          color: "#000",
          size: 12,
        },
      ]}
    />
  );
};

export default Orders;
