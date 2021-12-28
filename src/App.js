import './App.css';
import './css/menu_admin.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home_admin from './components/Admin/Home_admin';





function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path ="/trangchu" element ={<Home_admin/>} />
        <Route path ="/bantin" element ={<Home_admin/>} />
        <Route path ="/vaccin" element ={<Home_admin/>} />
        <Route path ="/xemthongtin" element ={<Home_admin/>} />
        <Route path ="/bieudo" element ={<Home_admin/>} />
      </Routes>
    </Router>
  </>
     
  );
}

export default App;
