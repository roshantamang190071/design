
import { render } from "@testing-library/react";
import { Component } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"

class Posts extends Component{

     state = {
          myposts : [],

          config : {
              Headers : {'authorization' : `Bearer ${localStorage.getItem("token")}` }
          }
     }


componentDidMount(){
     axios.get("http://localhost:90/post/showall", this.state.config)
     .then((result) =>{
          console.log(result.data)
          this.setState({
               myposts : result.data
          })
     })
     .catch((err)=>{

     })
}

     deletePost=(id)=>{
          axios.delete("http://localhost:90/deletepost/"+ id)
          .then(
               console.log(id)
          )
          .catch(
               console.log("asd")
          )
         // alert("Are you sure you want to delete?")
         //alert(id)
     }

     render(){
          return(
               <div>
                    { this.state.myposts.map(post =>{
                         return(
                              <div className="Content">
                              <h1>{post.tag}</h1>
                              <p>{post.content}</p>
                               <NavLink className="btn btn--radius-2 btn--red" 
                                    to= {"/updatepost/"+post._id}
                                   >Update</NavLink>
                              <button onClick={()=>this.deletePost(post._id)}>Delete</button>
                              </div>
                         )
                    } )}
               </div>
          )
     }
}

export default Posts;