import {Button, Container, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import Header from './Header';
import Actions from './Actions';
import DataTable from 'react-data-table-component';
import {StudentDataTable} from './StudentDataTable';
import {Link} from "react-router-dom";

const StudentManager = () => {
    const [students, setStudents] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const handleDelete = () => {
        setIsDeleted(true);
    }
    useEffect(() => {
        let url = "http://localhost:8080/api/v1/students";
        const fetchData = async () => {
            try {
                let res = await fetch(url);
                let data = await res.json();
                setStudents(data);
            } catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, [isDeleted])


    return (
        <>
            <Header/>
            <Actions/>
            <Container>
                <Typography textAlign="center" variant="h4" color="red">
                    Quản lý thông tin sinh viên
                </Typography>
                <Link to={"/students/add"}>
                    <Button variant="contained">Thêm sinh viên</Button>
                </Link>
                <StudentDataTable
                    data={students}
                    handleDelete={handleDelete}
                />
            </Container>

        </>
    )
}

export default StudentManager