import './App.css'
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Home';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Layout/>} />
        <Route path = "/home" element = {<Home/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>} />
        
      </Routes> 
    </Router>
  )
}

export default App;
