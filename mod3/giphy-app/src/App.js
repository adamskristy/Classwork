import { useState } from 'react';
import './App.css';
import GiphyDisplay from './components/GiphyDisplay';

function App() {

  let [giphy, setGiphy] = useState('')

  const getGiphy = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=offKS7YxDD9DWPJUWVOyj1qZ03JByNJK&tag=&rating=g`)
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
