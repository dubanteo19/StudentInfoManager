import React from 'react'
import DataTable from 'react-data-table-component';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
export const StudentDataTable = (props) => {
    const handleDelete = studentId => {
        let url = `http://localhost:8080/api/v1/students/${studentId}`;
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(url, requestOptions).then(async res => {
            alert("Xóa sinh viên thành công")
        }).catch(e => {
            alert(e)
        }
        )
    }
    const columns = [
        {
            name: "MSSV",
            selector: row => row.studentId,
            sortable: true,
        },
        {
            name: "Họ và tên",
            selector: row => row.name,
            sortable: true,
        },
        {
            name: "Khoa",
            selector: row => row.faculty,
            sortable: true,
        },
        {
            name: "Chức năng",
            cell: (row, index, column, id) => {
                let linkUrl = `/students/edit/${row.studentId}`;
                return (
                    <>
                        <Link to={linkUrl}>
                            <EditIcon sx={{ cursor: "pointer" }} color="primary" />
                        </Link>
                        <IconButton onClick={() => {
                            handleDelete(row.studentId);
                        }}>
                            <DeleteIcon sx={{ cursor: "pointer" }} />
                        </IconButton>

                    </>
                )
            },
        },
    ]
    return (
        <DataTable
            pagination
            highlightOnHover
            striped
            columns={columns}
            {...props}
        />

    )
}
