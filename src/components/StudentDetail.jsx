import Header from "./Header";
import Actions from "./Actions";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Container, Typography} from "@mui/material";

const StudentDetail = () => {
    let id = useParams().id;
    const [student, setStudent] = useState("");
    useEffect(() => {
        let url = `http://localhost:8080/api/v1/students/${id}`;

        async function fetchData() {
            try {
                let response = await fetch(url);
                let data = await response.json();
                setStudent(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);
    return (
        <>
            <Header/>
            <Actions/>
            <Container sx={{mt: 3}}>
                <Typography variant="h4" color="primary.main" textAlign="center">
                    Thông tin sinh viên
                </Typography>
                <img src={student.avatar} alt=""/>
                <p>Mã số sinh viên: <strong>{student.studentId}</strong></p>
                <p>Tên sinh viên: <strong>{student.name}</strong></p>
                <p>Địa chỉ thường trú: <strong>{student.address}</strong></p>
                <p>Email sinh viên: <strong>{student.email}</strong></p>
                <p>Khoa: <strong>{student.faculty}</strong></p>
                <p>Số điện thoại: <strong>{student.phone}</strong></p>
                <p>Ngày tháng năm sinh: <strong>{student.dob}</strong></p>
                <p>Giới tính: <strong>{student.gender === "M" ? "Nam" : "Nữ"}</strong></p>
            </Container>
        </>
    )
}
export default StudentDetail;