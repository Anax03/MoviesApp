import React, { Component } from 'react';
import { TheContextMovies } from '../context/ContextMovies';
import AddMovie from './AddMovie';
import MoviesList from './MoviesList';


class Movies extends Component {

    static contextType= TheContextMovies;
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const numberOfMovies=this.context.data.numberOfMovies;
        return ( 
            <section className='movies has-background-primary-dark py-6'>
            <h1 className="has-text-white 
            is-size-5 has-text-centered">You have added {numberOfMovies} Movies</h1>
            <MoviesList/>
            <AddMovie/>
            </section>
         );
    }
}
 
export default Movies;