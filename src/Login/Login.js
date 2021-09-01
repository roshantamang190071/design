
import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component{
    
    state = {
     college_id : "",
     password : ""
 }

     login=(e)=>{
     
     this.setState({
         [e.target.name] : e.target.value
     })

 }

 loginUser=(e)=>{
     e.preventDefault();
     const data = {
         college_id : this.state.college_id,
         password : this.state.password
     }
     axios.post("http://localhost:90/login/user", data)
     .then((res)=>{
            console.log(res.data.token)
            //save token locally, and access anywhere in website
            localStorage.setItem("token", res.data.token)
            
            
        })
        .catch((err)=>{
          console.log(err.response)
        })
      }
 

  render(){

    if(localStorage.getItem("token")){
        window.location.href="/"
    }
       return(
            
       <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
       <div className="wrapper wrapper--w790">
           <div className="card card-5">
               <div className="card-heading">
                   <h2 className="title">Login</h2>
               </div>
               <div className="card-body">
                   <form>

                       <div className="form-row">
                           <div className="name">College ID</div>
                           <div className="value">
                               <div className="input-group">
                                   <input className="input--style-5" type="text" name="college_id"
                                   value = {this.state.college_id} onChange={this.login}/>
                               </div>
                           </div>
                       </div>

                       <div className="form-row">
                           <div className="name">Password</div>
                           <div className="value">
                               <div className="input-group">
                                   <input className="input--style-5" type="password" name="password"
                                   value = {this.state.password } onChange={this.login}/>
                               </div>
                           </div>
                       </div>
                       
                       <div>
                           <button className="btn btn--radius-2 btn--red" type="submit" 
                           onClick = {this.loginUser}
                           >Log in</button>
                       </div>

                   </form>
               </div>
           </div>
       </div>
   </div>


       )
  }
}


export default Login;