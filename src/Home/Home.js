
import { Component } from "react";
import axios from "axios";

class Home extends Component{
     
    state = {
     tag : "",
     content : ""
 }

     postState=(e)=>{
     
     this.setState({
         [e.target.name] : e.target.value
     })

 }

 addPost=(e)=>{
     e.preventDefault();
     const data = {
         tag : this.state.post,
         content : this.state.content
     }
     axios.post("http://localhost:90/addpost", data)
}

     render(){
          return(
               <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
               <div className="wrapper wrapper--w790">
                   <div className="card card-5">
                       <div className="card-heading">
                           <h2 className="title">Add Post</h2>
                       </div>
                       <div className="card-body">
                           <form>
        
                               <div className="form-row">
                                   <div className="name">Tag</div>
                                   <div className="value">
                                       <div className="input-group">
                                           <input className="input--style-5" type="text" name="tag"
                                           value = {this.state.tag} onChange={this.postState}/>
                                       </div>
                                   </div>
                               </div>
        
                               <div className="form-row">
                                   <div className="name">Content</div>
                                   <div className="value">
                                       <div className="input-group">
                                           <input className="input--style-5" type="text" name="content"
                                           value = {this.state.content } onChange={this.postState}/>
                                       </div>
                                   </div>
                               </div>
                               
                               <div>
                                   <button className="btn btn--radius-2 btn--red" type="submit" 
                                   onClick = {this.addPost}
                                   >Add Post</button>
                               </div>
        
                           </form>
                       </div>
                   </div>
               </div>
           </div>
        
          )
     }
}

export default Home;