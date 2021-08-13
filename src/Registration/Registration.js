

import { Component } from "react";

class Registration extends Component{
     render(){
          return(
               
          <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
          <div class="wrapper wrapper--w790">
              <div class="card card-5">
                  <div class="card-heading">
                      <h2 class="title">Event Registration Form</h2>
                  </div>
                  <div class="card-body">
                      <form method="POST">

                          <div class="form-row">
                              <div class="name">ID</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-5" type="text" name="College ID"/>
                                  </div>
                              </div>
                          </div>

                          <div class="form-row">
                              <div class="name">Fullname</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-5" type="text" name="Full name"/>
                                  </div>
                              </div>
                          </div>

                          <div class="form-row">
                              <div class="name">Email</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-5" type="email" name="email"/>
                                  </div>
                              </div>
                          </div>

                          <div class="form-row">
                              <div class="name">Batch</div>
                              <div class="value">
                                  <div class="input-group">
                                      <div class="rs-select2 js-select-simple select--no-search">
                                          <select name="subject">
                                              <option disabled="disabled" selected="selected">Choose option</option>
                                              <option>Batch 1</option>
                                              <option>Batch 2</option>
                                              <option>Bacth 3</option>
                                          </select>
                                          <div class="select-dropdown"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                          <div>
                              <button class="btn btn--radius-2 btn--red" type="submit">Register</button>
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