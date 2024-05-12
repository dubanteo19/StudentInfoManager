import React, {useState} from 'react'
import DataTable from 'react-data-table-component';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton} from '@mui/material';
import toast, {Toaster} from 'react-hot-toast';

export const StudentDataTable = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const handleClickOpen = () => {
        setOpenModal(true);
    };
    const handleClose = () => {
        setOpenModal(false);
    };
    const handleDelete = () => {
        let studentId = selectedId;
        setOpenModal(false);
        let url = `http://localhost:8080/api/v1/students/${studentId}`;
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        };
        fetch(url, requestOptions).then(async res => {
            toast.success("Xóa sinh viên thành công");
            props.handleDelete();
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
                            <EditIcon sx={{cursor: "pointer"}} color="primary"/>
                        </Link>
                        <IconButton onClick={() => {
                            handleClickOpen();
                            setSelectedId(row.studentId);
                        }}>
                            <DeleteIcon sx={{cursor: "pointer"}}/>
                        </IconButton>

                    </>
                )
            },
        },
    ]
    return (
        <>      <Toaster/>
            <Dialog
                open={openModal}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Cảnh báo việc xoá sinh viên"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Một khi đã xoá sinh viên, bạn không thể khôi phục lại dữ liệu. Bạn có chắc chắn muốn xoá sinh
                        viên
                        này không?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Huỷ bỏ</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Xác nhận
                    </Button>
                </DialogActions>
            </Dialog>
            <DataTable
                pagination
                highlightOnHover
                striped
                columns={columns}
                {...props}
            /></>

    )
}
