import React, { Component } from 'react';
import {TheContextMovies} from '../context/ContextMovies';

class AddMovie extends Component {

  static contextType=TheContextMovies;
  state={movieName:'',movieImage:'',movieNote:''}

  submitForm=(e)=>{
    e.preventDefault();
    const {data,dispatch}=this.context;
    
    if(this.state.movieName &&
       this.state.movieImage 
       && this.state.movieNote !==""){
         dispatch({type:'AddMovie',movie:{name:this.state.movieName,
        img:this.state.movieImage,
        note:this.state.movieNote
        }})
        this.setState({movieName:'',movieImage:'',movieNote:''})
    }

  }

  
   
    render() { 
      const moviesInfo=this.state;
        return (
            <div className="addMovies has-text-white">
           <form onSubmit={this.submitForm} >
           {/* Movie name */}
           <div className="field">
  <div className="control">
    <input className="input" value={moviesInfo.movieName} 
    name='movieName' type="text" onChange={(e)=>{
      this.setState({movieName:e.target.value})
    }} placeholder="Write movie name.."/>
  </div>
  <p className="help">Enter one of your favories movies..</p>
</div>

{/* Movie Note */}
<input className="input is-primary"
 value={moviesInfo.movieNote} 
 onChange={(e)=>{
      this.setState({movieNote:e.target.value})
    }}
 type="number" placeholder="Note your movie.."/>
<p className="help">Enter a note from 0 to 10  to your movie..</p>

{/* File */}
<div className="file is-primary mt-4">
  <label className="file-label">
    <input className="file-input"
    onChange={(event)=>{
     this.setState({movieImage:URL.createObjectURL(event.target.files[0])})
      
    }}
    name='movieImage' type="file" name="resume"/>
    <span className="file-cta">
      <span className="file-icon">
        <i className="fas fa-upload"></i>
      </span>
      <span className="file-label">
        Poster movie..
      </span>
     
    </span>
  </label>
</div>

{/* Submit button */}

<div className="control">
    <button className="button is-light mt-4">Submit</button>
  </div>
            
           </form>
           </div>
         );
    }
}
 
export default AddMovie;