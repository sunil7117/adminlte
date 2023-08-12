import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  styled,
} from "@mui/material";
import React from "react";
import PopupLayout from "../../layout/PopupLayout";

const Left = styled(Box)``;
const Right = styled(Box)``;

const NodificationLayout = () => {
  const nodifications = [
    { icons: "I", msg: "5 new member join today" },
    { icons: "I", msg: "5 new member join today" },
    { icons: "I", msg: "5 new member join today" },
    { icons: "I", msg: "5 new member join today" },
    { icons: "I", msg: "5 new member join today" },
    { icons: "I", msg: "5 new member join today" },
    { icons: "I", msg: "5 new member join today" },
  ];
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            {nodifications.map((nodification, i) => (
              <TableCell
                sx={{
                  display: "flex",
                  gap: "10px",
                  padding: "10px",
                  "&.MuiTableCell-root:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                <Left>{nodification.icons}</Left>
                <Right>{nodification.msg}</Right>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const Nodification = () => {
  return <PopupLayout rendererComponent={<NodificationLayout />} />;
};

export default Nodification;
