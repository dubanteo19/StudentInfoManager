import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="students/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
