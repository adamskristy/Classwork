import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

//let init = false;

function App() {
  
  //variable with api key
  const apiKey = process.env.REACT_APP_API

  //state to hold movie data, store data in parent so children can access
  //[initial state, function to change state]
  let [movie, setMovie] = useState('')

  //function to get Movies
  //method chaining with ,then to handle async requests
  //const getMovie = () => {
    //make fetch request and store response
    // fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=godfather`)
    // .then((res) => res.json()) //take response and format to json
    // .then((data) => console.log(data))
    // .then(err => console.log(err))


   //function to get Movies
   // async / await
   const getMovie = async (movieName) => {

    try { //try to run this and see if there is an error

      //make fetch request and store response
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
      //take response and format to json
      const data = await response.json()
      console.log(data);
      setMovie(data) //takes time to work

    }catch(err){ // if an error, log it
      console.log(err)
    }
    
  }

  //will run the first time app runs, refresh page  
  //function to run, array of dependencies
  //anytime item in [] changes, the code in function will run
  useEffect(() => {
    getMovie(movie)
  }, []) 

  // useEffect(() => {
  //   if (!init) { //stop logging data twice
  //   getMovie('Clueless')
  //   console.log('testing')
  //   }
  // }, [])

  // useEffect(() => {
  //   let movies = ['The fifth element', 'To Wong Foo, Thanks for Everything! Julie Newmar', 'Blade']
  //   const random = Math.floor(Math.random() * movies.length)
  //   getMovie(movies[random])
  // }, []) 


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
