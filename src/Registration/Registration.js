

import { Component } from "react";
import axios from 'axios';

class Registration extends Component{

    state = {
        college_id : "",
        full_name : "",
        email : "",
        batch : "",
        password : ""
    }

    register=(e)=>{
        
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    registerUser=(e)=>{
        e.preventDefault();
        const data = {
            college_id : this.state.college_id,
            email : this.state.email,
            password : this.state.password
        }
        axios.post("http://localhost:90/register/user", data)
    }

     render(){
          return(
               
          <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
          <div className="wrapper wrapper--w790">
              <div className="card card-5">
                  <div className="card-heading">
                      <h2 className="title">Registration Form</h2>
                  </div>
                  <div className="card-body">
                      <form>

                          <div className="form-row">
                              <div className="name">College ID</div>
                              <div className="value">
                                  <div className="input-group">
                                      <input className="input--style-5" type="text" name="college_id"
                                      value = {this.state.college_id} onChange={this.register}/>
                                  </div>
                              </div>
                          </div>

                          <div className="form-row">
                              <div className="name">Email</div>
                              <div className="value">
                                  <div className="input-group">
                                      <input className="input--style-5" type="email" name="email"
                                      value ={this.state.email} onChange={this.register}/>
                                  </div>
                              </div>
                          </div>

                          {/* <div className="form-row">
                              <div className="name">Batch</div>
                              <div className="value">
                                  <div className="input-group">
                                      <div className="rs-select2 js-select-simple select--no-search">
                                          <select name="batch" value={this.state.batch}onChange={this.register}>
                                              
                                              <option disabled="disabled" selected="selected">Choose option</option>
                                               
                                              <option>Batch 1</option>
                                              <option>Batch 2</option>
                                              <option>Batch 3</option>
                                          </select>
                                          <div className="select-dropdown"></div>
                                      </div>
                                  </div>
                              </div>
                          </div> 
*/}

                          <div className="form-row">
                              <div className="name">Password</div>
                              <div className="value">
                                  <div className="input-group">
                                      <input className="input--style-5" type="password" name="password"
                                      value = {this.state.password } onChange={this.register}/>
                                  </div>
                              </div>
                          </div>
                          
                          <div>
                              <button className="btn btn--radius-2 btn--red" type="submit" 
                              onClick = {this.registerUser}
                              >Register</button>
                          </div>

                      </form>
                  </div>
              </div>
          </div>
      </div>


          )
     }
}

export default Registration;