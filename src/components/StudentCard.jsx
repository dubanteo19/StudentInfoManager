import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import React from "react";

function StudentCard(props) {
  let data = props.data;
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        height={150}
        sx={{ objectFit: "fill" }}
        image={data.img}
      />
      <CardContent>
        <Typography align="center" variant="h5">
          {data.fullName}
        </Typography>
        <Typography variant="body">Mã số sinh viên: {data.id}</Typography>
        <br></br>
        <Typography variant="body">Khoa: {data.faculty}</Typography>
        <br></br>
        <Typography variant="g5">
          Giới tính: {data.gender === "female" ? <WomanIcon /> : <ManIcon />}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Xem chi tiết</Button>
      </CardActions>
    </Card>
  );
}

export default StudentCard;
