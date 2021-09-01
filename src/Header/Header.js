
import { Component } from "react";
import {NavLink} from "react-router-dom"

class Header extends Component{

     logout=(e)=>{
          //deletes token
          //localStorage.removeItem("token")
         
          //removes all cookies
         localStorage.clear()
          
         // for button redirect
         window.location.href="/login"

     }

     render(){

          if(localStorage.getItem("token")){
                    console.log("token")
                    var menu = 
                    <div>
                          <NavLink  to="/">Home     </NavLink>
                         <NavLink  to="/post">Post        </NavLink>
                    <button onClick={this.logout}>Logout   </button>
                    </div>
      
                    
          }else{
               console.log("no token")
               var menu1 = 
               <div>
                    <NavLink  to="/login">Login      </NavLink>
                    <NavLink  to="/register">Register        </NavLink>
                   

               </div>

          }
          return(
               <>

                    {menu}
                    {menu1}
              
             
               </>
              
          )
     }
}

export default Header;