import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import PopupLayout from "../../layout/PopupLayout";
import user1 from "../../img/user4-128x128.jpg";
import dayjs, { extend } from "dayjs";
import { AccessTime } from "@mui/icons-material";
import relativeTime from "dayjs/plugin/relativeTime";
const Left = styled(Box)`
  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
const Right = styled(Box)`
  width: 100%;
  & p {
    font-size: 12px;
  }
  & #heading {
    font-size: 14px;
    font-weight: 600;
  }
  & #content {
    line-height: 0.9;
    font-size: 14px;
  }
  & #timeIcons {
    font-size: 16px;
  }
`;
const Top = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Head = styled(Box)``;
const Time = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Bottom = styled(Box)``;

const MessageLayout = () => {
  extend(relativeTime);
  const message = [
    { numner: 1 },
    { number: 2 },
    { numner: 1 },
    { number: 2 },
    { numner: 1 },
    { number: 2 },
  ];
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            {message.map((msg, i) => (
              <TableCell
                key={i}
                sx={{
                  display: "flex",
                  gap: "10px",
                  padding: "10px",
                  "&.MuiTableCell-root:last-child": {
                    borderBottom: "none",
                  },
                  "&.MuiTableCell-root:hover": {
                    cursor: "pointer",
                    background: "#ECF0F5",
                  },
                }}
              >
                <Left>
                  <img src={user1} alt="" />
                </Left>
                <Right>
                  <Top>
                    <Head>
                      <Typography id="heading">Heading</Typography>
                    </Head>
                    <Time>
                      <AccessTime id="timeIcons" />
                      <Typography>{dayjs(new Date()).fromNow()}</Typography>
                    </Time>
                  </Top>
                  <Bottom>
                    <Typography id="content">
                      Content is a content now live
                    </Typography>
                  </Bottom>
                </Right>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const Message = () => {
  return <PopupLayout rendererComponent={<MessageLayout />} />;
};

export default Message;
