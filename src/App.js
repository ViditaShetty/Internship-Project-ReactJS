import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar'
import About from './components/about/About';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import GroupMss from "./components/groupmss/GroupMss"
import Modify from './components/modify/Modify';

function App() {
  return (
      <Router>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/groupmss" element={<GroupMss />} />
        <Route path="/modify" element={<Modify />} />
      </Routes>
    </Router>
      );
}

export default App;
