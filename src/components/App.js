
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from '../pages/Home';
import Student_Login from '../pages/Login1';
import Admin_Login from '../pages/Login2';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/student' element={<Student_Login/>} />
          <Route path='/admin' element={<Admin_Login/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
