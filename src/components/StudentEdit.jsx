import Header from "./Header";
import Actions from "./Actions";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button, Container, FormControl, Radio, RadioGroup, FormControlLabel, Typography, FormLabel } from "@mui/material";
import { useForm } from "react-hook-form"
import Input from './Input';
const StudentEdit = () => {
    let id = useParams().id;
    let url = `http://localhost:8080/api/v1/students/${id}`;
    const [student, setStudent] = useState("");
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const body = JSON.stringify(data);
        console.log(body);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: body,
        };
        fetch(url, requestOptions).then(async res => {
            alert("Cập nhập sinh viên thành công")
        }).catch(e => {
            alert(e)
        }
        )
    };
    useEffect(() => {
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
            <Header />
            <Actions />
            <Container sx={{ mt: 3 }}>
                <Typography variant="h4" color="primary.main" textAlign="center">
                    Thông tin sinh viên
                </Typography>
                <img src={student.avatar} alt="" />
                <p>Mã số sinh viên: <strong>{student.studentId}</strong></p>
                {student &&
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Input
                            label="Họ và tên"
                            name="name"
                            defaultValue={student.name}
                            register={register}
                            required />
                        <Input
                            label="Địa chỉ thường trú"
                            name="address"
                            defaultValue={student.address}
                            register={register}
                            required />
                        <Input
                            label="Khoa"
                            name="faculty"
                            defaultValue={student.faculty}
                            register={register}
                            required />
                        <Input
                            label="Email"
                            name="email"
                            defaultValue={student.email}
                            register={register}
                            required />
                        <Input
                            label="Số điện thoại"
                            name="phone"
                            defaultValue={student.phone}
                            register={register}
                            required />
                        <FormLabel >Giới tính</FormLabel>
                        <RadioGroup
                            row
                            {...register("gender")}
                            defaultValue={student.gender}
                        >
                            <FormControlLabel value="F" control={<Radio />} label="Nữ" />
                            <FormControlLabel value="M" control={<Radio />} label="Nam" />
                        </RadioGroup>
                        <br />
                        <Button type="submit" variant="contained">
                            Cập nhập
                        </Button>
                    </form>
                }
                <p>Ngày tháng năm sinh: <strong>{student.dob}</strong></p>
            </Container>
        </>
    )
}
export default StudentEdit;