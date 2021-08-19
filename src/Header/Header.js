
import { Component } from "react";
import {NavLink} from "react-router-dom"

class Header extends Component{
     render(){
          return(
               <>
              <NavLink  to="/">Home     </NavLink>
              <NavLink  to="/login">Login      </NavLink>
              <NavLink  to="/register">Register        </NavLink>
              <NavLink  to="/show">Show        </NavLink>
              </>
          )
     }
}

export default Header;