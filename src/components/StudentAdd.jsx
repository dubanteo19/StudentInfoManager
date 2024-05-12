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
import toast, {Toaster} from 'react-hot-toast';

const StudentEdit = () => {
    let url = `http://localhost:8080/api/v1/students`;
    const [startDate, setStartDate] = useState(new Date());
    const [avatar, setAvatar] = useState('');
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        let date = JSON.stringify(startDate).split('T')[0].substring(1, 11);
        data = {...data, dob: date, avatar: avatar};
        const body = JSON.stringify(data);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body,
        };
        fetch(url, requestOptions).then(async res => {
            notify("Thêm sinh viên thành công");
        }).catch(e => {
                alert(e)
            }
        )
    };
    useEffect(() => {
        setAvatar(randomAvatar());
    }, []);
    const randomAvatar = () => {
        let random = Math.floor(Math.random() * 1000);
        return "https://i.pravatar.cc/150?u=a042581f4e0267" + random;
    }
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
                <img src={avatar}/>
                <br/>
                <Button onClick={() => {
                    setAvatar(randomAvatar());
                    notify("Avatar mới đã được cập nhật");
                }} variant="outlined">Avatar mới</Button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Họ và tên"
                        name="name"
                        register={register}
                        required/>
                    <Input
                        label="Địa chỉ thường trú"
                        name="address"
                        register={register}
                        required/>
                    <Input
                        label="Khoa"
                        name="faculty"
                        register={register}
                        required/>
                    <Input
                        label="Email"
                        name="email"
                        register={register}
                        required/>
                    <Input
                        label="Số điện thoại"
                        name="phone"
                        register={register}
                        required/>
                    <FormLabel>Giới tính</FormLabel>
                    <RadioGroup
                        row
                    >
                        <FormControlLabel    {...register("gender")} value="F" control={<Radio/>} label="Nữ"/>
                        <FormControlLabel    {...register("gender")} value="M" control={<Radio/>} label="Nam"/>
                    </RadioGroup>
                    <FormLabel>Ngày tháng năm sinh</FormLabel><br/>
                    <DatePicker  selected={startDate}
                                onChange={(date) => setStartDate(date)}/>
                    <br/>
                    <Button sx={{mt: 3}} type="submit" variant="contained">
                        Thêm sinh viên
                    </Button>
                </form>
                <Toaster/>
            </Container>
        </>
    )
}
export default StudentEdit;