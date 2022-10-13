import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Price (props) {

    const apiKey = "C42D7824-432D-449B-9E49-A138F9C907C7"
    const params = useParams()
    const symbol = params.symbol

    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`

    const [coin, setCoin] = useState('')

    const getCoin = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setCoin(data)
        } catch (err){
            console.log(err)
        }
    }

     // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);


  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin && coin.rate ? loaded() : loading();
};
