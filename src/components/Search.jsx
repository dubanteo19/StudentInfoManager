import React, { useState } from "react";
import Header from "./Header";
import Actions from "./Actions";
import { Button, Box, Container, TextField, Stack } from "@mui/material";
import StudentCard from "./StudentCard";

const Search = () => {
  let data = [
    {
      id: 21130444,
      img: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-07.jpg",
      fullName: "Dư Thành Tèo",
      faculty: "Công nghệ thông tin",
      gender: "male",
    },

    {
      id: 21130445,
      img: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-04.jpg",
      fullName: "Nguyễn Thị Bà La",
      faculty: "Nông Học",
      gender: "male",
    },
  ];
  const [students, setStudents] = useState(data);

  return (
    <>
      <Header />
      <Actions />
      <Stack>
        <TextField
          variant="filled"
          label="Mã số sinh viên"
          size="small"
        ></TextField>
        <Button variant="contained" size="large">
          Tìm kiếm
        </Button>
        <Container>
          <Stack sx={{ mt: 2 }} direction="row" spacing={5}>
            {students.map((item) => (
              <StudentCard data={item} />
            ))}
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Search;
