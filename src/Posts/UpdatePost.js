import axios from "axios";
import { Component } from "react";


class UpdatePost extends Component{

     state = {
          id : this.props.match.params.id,
          tag : "",
          content : ""
     }

     componentDidMount(){
          axios.get("http://localhost:90/updatepost/"+this.state.id)
          .then((res)=>{
               console.log(res.data)
               this.setState({
                         tag : res.data.tag,
                         content : res.data.content
               })
          })
          .catch()
     }

     updatepost=(e)=>{
          e.preventDefault();
          // data = {
          //      tag : this.state.tag,
          //      content : this.state.content
          // }
          axios.put("http://localhost:90/updatepost", this.state)
          .then((res)=>{

          })
     }


     postState=(e)=>{
               this.setState({
                    [e.target.name] : e.target.value
               })
     }

     render(){
          return(
               <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
               <div className="wrapper wrapper--w790">
                   <div className="card card-5">
                       <div className="card-heading">
                           <h2 className="title">Update Post</h2>
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
                                   onClick = {this.updatepost}
                                   >Update Post</button>
                               </div>
        
                           </form>
                       </div>
                   </div>
               </div>
           </div>
          )
     }
}

export default UpdatePost;