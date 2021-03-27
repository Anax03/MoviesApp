import React, { Component } from 'react';
import { TheContextMovies } from '../context/ContextMovies';



class MoviesList extends Component {
    static contextType=TheContextMovies;
  
    constructor(props) {
        
        super(props);
        this.state = {  }
       
        
    }
    render() { 


        const {data,dispatch}= this.context;
        console.log(data);

        if(data.numberOfMovies===0){
            return (
                <div className='has-text-white has-text-centered my-4'>
                    <h1>Add your favorite Movies....</h1>
                </div>
            )
        }
        else{
            return (
              <div className='has-text-white'>
                <h1 className="is-size-5 has-text-centered mt-4">Movies List :</h1>
            <div className='favoriteMovies grid-container m-6'>
            

           
        

           
            { data.infosMovies.map((item,index)=>{

return (
    <div className='movie has-text-centered'>
    <div key={index}>
<h1 className='mb-3 is-size-5 '>{item.movieName}</h1>
<img alt='movie' src={item.movieImage}/>
<h2>Note : {item.movieNote}/10</h2>
</div>
</div>
           
)

            }) 
           }
            
          
                </div>
                </div>
            )
        }
    }
}
 
export default MoviesList;