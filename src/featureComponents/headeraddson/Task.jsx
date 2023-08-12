import {
  Box,
  LinearProgress,
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

const Left = styled(Box)`
  width: 100%;
  & p {
    font-size: 14px;
  }
`;
const Top = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
const Bottom = styled(Box)`
  padding: 8px 0;
`;

const TaskLayout = () => {
  const tasks = [
    { completed: 50 },
    { completed: 70 },
    { completed: 20 },
    { completed: 80 },
  ];
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            {tasks.map((task) => (
              <TableCell
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
                  <Top>
                    <Box>
                      <Typography>Design some buttons</Typography>
                    </Box>
                    <Box>
                      <Typography>{task.completed}%</Typography>
                    </Box>
                  </Top>
                  <Bottom>
                    <LinearProgress
                      variant="determinate"
                      value={task.completed}
                      color="success"
                      sx={{
                        bgcolor: "#ECF0F5",
                        padding: 0.2,
                      }}
                    />
                  </Bottom>
                </Left>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const Task = () => {
  return <PopupLayout rendererComponent={<TaskLayout />} />;
};

export default Task;
