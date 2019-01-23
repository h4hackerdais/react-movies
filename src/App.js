import React, { Component } from 'react';


const MOVIE_PATH ='https://image.tmdb.org/t/p/w200/';

class App extends Component {

  state = {
    movies:[]
  }

  async componentDidMount(){
    try{
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=621cb559a77e82a53d4526a47ba3b8fc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

        const movies =  await res.json(res);
        console.log(movies)
        this.setState({
          movies:movies.results
        })
    }catch(e){
      console.log(e)
    }

  }
  render() {
    return (
      <div >
        <h2>Movies List</h2>
        {
          this.state.movies.map(movie=>(
             <div>{movie.original_title}
             
             <img src={`${MOVIE_PATH}${movie.poster_path}`} />
             </div>
              
          ))
        }
       </div>
    );
  }
}

export default App;
