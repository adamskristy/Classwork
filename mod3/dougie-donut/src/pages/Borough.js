import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Response from '../componemts/Response';


function Borough() {

    const params = useParams()
    const borough = params.borough.toUpperCase
    borough = borough.includes("ISLAND") ? "STATEN%20ISLAND" : borough

    const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough}&$limit=${number}`

    const [boroughInfo, setBoroughInfo] = useState([])
    
    //create a ref obj so we can
    const numberRef = useRef()

    const getBoroughInfo = async (signal) => {

        let number = 10;

        const response = await fetch(url, { signal })
        const data = await response.json()
        setBoroughInfo(data)
    }

    useEffect(() => {

        //stop our request after starting it
        const controller = new AbortController()
        let signal = controller.signal

        setBoroughInfo([])
        getBoroughInfo(signal)

        //cleanup function to remove event listeners, unsubscribe services or cancel fetch requests
        //run when component unmounts
        return () => {
            console.log('unmounting...')
            //stop first fetch request
            controller.abort()
        }

    }, [borough])

    // let responses;

    // if (boroughInfo.length) {
        //responses = (
            //<div></div>
        //)
    // }


    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(numberRef)
    }

   return ( 
        <div> 
            <h1>{params.borough.toUpperCase()}</h1>  

            <form onSubmit={handleSubmit}>
                <input type='number' ref={numberRef} />
                <button>Submit</button>
            </form>

           {Response}
            
        </div>
     );
}

export default Borough;