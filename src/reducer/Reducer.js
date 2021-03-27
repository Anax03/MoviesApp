

const Reducer = (state , action)=>{
    switch(action.type){
        case 'AddMovie':

       
        const infosMovies = state.infosMovies;
            infosMovies.push({movieName:
                action.movie.name,
                movieImage:process.env.PUBLIC_URL + action.movie.img,
                movieNote:action.movie.note});
                console.log(infosMovies);
                 const numberOfMovies=state.numberOfMovies+1;
                 const newState={numberOfMovies,infosMovies};
            
          
            
          return newState   ;

          default :
          return state;
    }
}


export default Reducer;