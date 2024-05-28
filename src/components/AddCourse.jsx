// Import các thư viện cần thiết
import React, { Component } from 'react';
import axios from 'axios';

// Định nghĩa class component AddCourse
class AddCourse extends Component {
    // Khởi tạo state để lưu trữ tên và mô tả của môn học
    state = {
        name: '',
        description: ''
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
            // Thực hiện yêu cầu POST tới API để thêm môn học mới với dữ liệu từ state
            const response = await axios.post('http://localhost:8080/api/courses', this.state);
            console.log(response.data);  // Log phản hồi từ server
            alert('Môn học đã được thêm thành công!');  // Thông báo thành công
            this.setState({ name: '', description: '' });  // Đặt lại state để clear form
        } catch (error) {
            // Xử lý nếu có lỗi trong quá trình gửi yêu cầu
            alert('Lỗi khi thêm môn học: ' + error.message);  // Thông báo lỗi
        }
    };

    // Render giao diện của component
    render() {
        return (
            <div>
                <h2>Thêm Môn Học</h2>
                <form onSubmit={this.handleSubmit}>  // Form với sự kiện onSubmit được xử lý bởi handleSubmit
                    <label>
                        Tên Môn Học:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}  // Gọi handleChange khi giá trị input thay đổi
                            required  // Yêu cầu phải nhập trường này
                        />
                    </label>
                    <label>
                        Mô Tả:
                        <textarea
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}  // Gọi handleChange khi giá trị textarea thay đổi
                            required  // Yêu cầu phải nhập trường này
                        />
                    </label>
                    <button type="submit">Thêm</button>  // Nút submit form
                </form>
            </div>
        );
    }
}

// Xuất component để có thể sử dụng ở các phần khác của ứng dụng
export default AddCourse;
