
import { Component } from "react";
import {NavLink} from "react-router-dom"



class Header extends Component{
     render(){
          return(
              <NavLink  to="/register">Register</NavLink>
          )
     }
}

export default Header;