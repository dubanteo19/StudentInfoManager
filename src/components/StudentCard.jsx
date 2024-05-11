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
import {Link} from "react-router-dom";

function StudentCard(props) {
    let data = props.data;
    console.log(data);
    return (
        <Card sx={{minWidth: 250, mr: 5, mt: 5}}>
            <CardMedia
                component="img"
                height={150}
                sx={{objectFit: "fill"}}
                image={data.avatar}
            />
            <CardContent>
                <Typography align="center" variant="h5">
                    {data.name}
                </Typography>
                <Typography variant="body">Mã số sinh viên: <strong>{data.studentId}</strong></Typography>
                <br></br>
                <Typography variant="body">Khoa: <strong>{data.faculty}</strong></Typography>
                <br></br>
                <Typography variant="g5">
                    Giới tính: {data.gender === "F" ? <WomanIcon/> : <ManIcon/>}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={"/students/detail/"+data.studentId} >
                <Button variant="contained">Xem chi tiết</Button>
            </Link>
        </CardActions>
</Card>
)
    ;
}

export default StudentCard;
