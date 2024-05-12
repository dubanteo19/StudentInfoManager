import { Container, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Actions = () => {
  return (
    <Container>
      <ButtonGroup variant="contained" sx={{ mt: 2 }}>
        <Link to="/student-manager">
        <Button >Quản lý sinh viên</Button>
        </Link>
        <Button>Quản lý giảng viên</Button>
        <Button>Quản lý môn học</Button>
        <Link to="/students/search" >
        <Button color="secondary">Tra cứu thông tin sinh viên</Button>
        </Link>
      </ButtonGroup>
    </Container>
  );
};

export default Actions;
