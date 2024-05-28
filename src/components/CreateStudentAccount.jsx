// Import các thư viện cần thiết
import React, { Component } from 'react';
import axios from 'axios';

// Định nghĩa class component CreateStudentAccount
class CreateStudentAccount extends Component {
    // Khởi tạo state để lưu trữ tên và email của sinh viên
    state = {
        name: '',
        email: ''
    };

    // Xử lý sự kiện thay đổi input: Cập nhật state khi giá trị các trường input thay đổi
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value  // Cập nhật state dựa trên tên và giá trị của trường được thay đổi
        });
    };

    // Xử lý khi submit form
    handleSubmit = async (event) => {
        event.preventDefault();  // Ngăn chặn hành vi mặc định của form (không reload trang)
        try {
            // Thực hiện yêu cầu POST tới API để tạo tài khoản sinh viên mới với dữ liệu từ state
            const response = await axios.post('http://localhost:8080/api/students', this.state);
            console.log(response.data);  // Log phản hồi từ server
            alert('Tài khoản sinh viên đã được tạo thành công!');  // Thông báo thành công
            this.setState({ name: '', email: '' });  // Đặt lại state để clear form
        } catch (error) {
            // Xử lý nếu có lỗi trong quá trình gửi yêu cầu
            alert('Lỗi khi tạo tài khoản sinh viên: ' + error.message);  // Thông báo lỗi
        }
    };

    // Render giao diện của component
    render() {
        return (
            <div>
                <h2>Tạo Tài Khoản Sinh Viên</h2>
                <form onSubmit={this.handleSubmit}>  // Form với sự kiện onSubmit được xử lý bởi handleSubmit
                    <label>
                        Tên Sinh Viên:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}  // Gọi handleChange khi giá trị input thay đổi
                            required  // Yêu cầu phải nhập trường này
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}  // Gọi handleChange khi giá trị input thay đổi
                            required  // Yêu cầu phải nhập trường này
                        />
                    </label>
                    <button type="submit">Tạo Tài Khoản</button>  // Nút submit form
                </form>
            </div>
        );
    }
}

// Xuất component để có thể sử dụng ở các phần khác của ứng dụng
export default CreateStudentAccount;
