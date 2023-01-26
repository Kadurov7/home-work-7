import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Movie from './components/movie/Movie';

function App() {

  const [movies, setMovies] = useState([
    {
      id: 1 + new Date().getMilliseconds(),
      title: "Avatar 1",
      rating: 5,
      img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
    },
   
  ]);

  const addNewMovieHandler = (data) =>{
    const uptadeMovies = [...movies];
    uptadeMovies.push(data)
    setMovies(uptadeMovies)
  };
  const deleteClick = (id)=>{
    setMovies(movies.filter((todo)=> todo.id !==id))
  }

  return (
    <div className="App">
     <Header addNewMovieHandler={addNewMovieHandler}/>
     <Movie items={movies} deleteClick={deleteClick}/>
    </div>
  );
}

export default App;
