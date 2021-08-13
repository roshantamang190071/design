
import './App.css';
import Registration from './Registration/Registration';
import Header from './Header/Header';
import Login from './Login/Login';
import { Router } from 'react-router-dom';
import {Route} from "react-router-dom"
import { BrowserRouter }from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Header/>
          
          <div  className = "content">
            
              <Route path="/register" component = {Registration}/>

          </div>
      </BrowserRouter>
  );
}

export default App;
