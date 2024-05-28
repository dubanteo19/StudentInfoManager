import React, {useEffect, useState} from "react";
import Header from "./Header";
import Actions from "./Actions";
import {Button, Box, Container, TextField, Stack, Typography} from "@mui/material";
import StudentCard from "./StudentCard";
import {useNavigate} from "react-router-dom";

const Search = () => {
        const [students, setStudents] = useState([]);
        const [error, setError] = useState("");
        const [studentId, setStudentId] = useState("");
         const navigate = useNavigate();
        useEffect(() => {
            let url = "http://localhost:8080/api/v1/students";
            async function fetchData() {
                try {
                    let response = await fetch(url);
                    let data = await response.json();
                    setStudents(data);
                    setError("");
                } catch (error) {
                    console.log(error);
                    setError("Đã xảy ra lỗi")
                }
            }
            fetchData();
        }, []);
        const handleSearch = async () => {
            if (studentId === "") {
                setError("Mã số sinh viên không được để trống");
                return;
            }
            try {
                let res = await fetch(`http://localhost:8080/api/v1/students/${studentId}`);
                let data = await res.json();
                if (!data.error) {
                    navigate("/students/detail/"+studentId);
                    setStudents([data]);
                    setError("");
                }
            } catch {
                console.log(error);
                setError("Không tim thấy sinh viên");
            }
        }
        return (
            <>
                <Header/>
                <Actions/>
                <Container sx={{mt: 2}}>
                    <TextField
                        variant="filled"
                        label="Mã số sinh viên"
                        size="small"
                        type="number"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                    ></TextField>
                    <Button variant="contained" size="large" onClick={handleSearch}>
                        Tìm kiếm
                    </Button>
                </Container>
                {error ?
                    <Typography variant="h3" sx={{
                        color: "primary.main",
                        textAlign: "center",
                    }}>{error}</Typography>
                    :
                    <Container>
                        <Stack sx={{mt: 2, flexWrap: "wrap"}} direction="row">
                            {students && students.length > 0 && students.map((item,index) => (
                                <StudentCard key={index} data={item}/>
                            ))}
                        </Stack>
                    </Container>}

            </>
        );
    }
;

export default Search;
