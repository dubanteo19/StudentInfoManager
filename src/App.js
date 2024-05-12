import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import StudentDetail from "./components/StudentDetail";
import StudentManager from './components/StudentManager';
import StudentEdit from './components/StudentEdit';

function App() {
    document.title = "Quản lý thông tin sinh viên";
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="student-manager" element={<StudentManager/>}/>
                <Route exact path="students/search" element={<Search/>}/>
                <Route exact path="students/detail/:id" element={<StudentDetail/>}/>
                <Route exact path="students/edit/:id" element={<StudentEdit/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
