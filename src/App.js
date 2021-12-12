import './App.css';
import './css/trangchu.css';
import './css/login.css';
import Login from './components/Login';
import Admin from './components/Admin/Admin';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
        <Route path ="/" component ={Login}></Route>
        <Route path ="/admin" component ={Admin}></Route>
      </Router>
    </>
     
  );
}

export default App;
