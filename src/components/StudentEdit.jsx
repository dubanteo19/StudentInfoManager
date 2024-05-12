import Header from "./Header";
import Actions from "./Actions";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
    Button,
    Container,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel,
    Typography,
    FormLabel
} from "@mui/material";
import {useForm} from "react-hook-form"
import Input from './Input';
import DatePicker from "react-datepicker";
import toast, { Toaster } from 'react-hot-toast';

const StudentEdit = () => {
    let id = useParams().id;
    let url = `http://localhost:8080/api/v1/students/${id}`;
    const [student, setStudent] = useState("");
    const [startDate, setStartDate] = useState();
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        let date = JSON.stringify(startDate).split('T')[0].substring(1, 11);
        data = {...data, dob: date};
        const body = JSON.stringify(data);
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: body,
        };
        fetch(url, requestOptions).then(async res => {
            notify("Cập nhập sinh viên thành công");
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
                setStartDate(data.dob);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);
    const notify = (text) => {
        toast.success(text);
    }
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
                {student &&
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            label="Họ và tên"
                            name="name"
                            defaultValue={student.name}
                            register={register}
                            required/>
                        <Input
                            label="Địa chỉ thường trú"
                            name="address"
                            defaultValue={student.address}
                            register={register}
                            required/>
                        <Input
                            label="Khoa"
                            name="faculty"
                            defaultValue={student.faculty}
                            register={register}
                            required/>
                        <Input
                            label="Email"
                            name="email"
                            defaultValue={student.email}
                            register={register}
                            required/>
                        <Input
                            label="Số điện thoại"
                            name="phone"
                            defaultValue={student.phone}
                            register={register}
                            required/>
                        <FormLabel>Giới tính</FormLabel>
                        <RadioGroup
                            row
                            defaultValue={student.gender}
                        >
                            <FormControlLabel    {...register("gender")} value="F" control={<Radio/>} label="Nữ"/>
                            <FormControlLabel    {...register("gender")} value="M" control={<Radio/>} label="Nam"/>
                        </RadioGroup>
                        <FormLabel>Ngày tháng năm sinh</FormLabel><br/>
                        <DatePicker dateFormat="dd/MM/yyyy" selected={startDate}
                                    onChange={(date) => setStartDate(date)}/>
                        <br/>
                        <Button type="submit" variant="contained">
                            Cập nhập
                        </Button>
                    </form>
                }
                <Toaster/>
            </Container>
        </>
    )
}
export default StudentEdit;