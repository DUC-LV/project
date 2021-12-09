import Header from './components/Header';
import Menu from './components/Menu_admin';
import './App.css';
import './css/header.css';
import './css/Modal_login.css';
import './css/Modal_register.css';
import './css/Menu_admin.css';


function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Menu />
      </div>
    </>  
  );
}

export default App;
