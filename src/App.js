
import './App.css';
import Registration from './Registration/Registration';
import Header from './Header/Header';
import Login from './Login/Login';
import {Route} from "react-router-dom"
import Home from "./Home/Home"
import { BrowserRouter }from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Header/>
          
          <div  className = "content">
            
              <Route path="/" exact component = {Home}/>
              <Route path="/login" component = {Login}/>
              <Route path="/register" component = {Registration}/>
              <Route path="/register" component = {Registration}/>

          </div>
      </BrowserRouter>
  );
}

export default App;
