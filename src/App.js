import './App.css';
import './css/user.css';
import './css/menu_admin.css';
import Home_admin from './components/Admin/Home_admin';
import './css/Modal_login.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path ="/" element ={<Home_admin/>} />
          <Route path ="/trangchu" element ={<Home_admin/>} />
          <Route path ="/bantin" element ={<Home_admin/>} />
        </Routes>
      </Router>
    </>
     
  );
}

export default App;
