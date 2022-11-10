import { useState } from 'react';
import './App.css';
import GiphyDisplay from './components/GiphyDisplay';

function App() {

  const apiKey = process.env.REACT_APP_API_KEY;

  let [giphy, setGiphy] = useState('')

  const getGiphy = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`)
    const data = await response.json()
    //console.log(data)
    setGiphy(data.data)
  }



  return (
    <div className="App">
     <h1>Giphy app</h1>
     <GiphyDisplay giphy={giphy} />
     <button onClick={getGiphy}>Get gif</button>
    </div>
  );
}

export default App;
