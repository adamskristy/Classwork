import { useState, useEffect } from "react"

export default function Form({getMovie}){

let [movieName, setMovieName ] = useState('')

//handleChange - updates formData when we type into form
const handleChange = (e) => {
    setMovieName(e.target.value)
}

const handleSubmit = (e) => {
    //prevent page from refreshing on submission, 
    //form default action is to refresh on submi    
    e.preventDefault()
    //props.getMovie
    getMovie(movieName)
}

useEffect(() => {
    console.log(getMovie('godfather' ))

},[])

    return(

    <div>
        <form onSubmit={handleSubmit}>
            <br />
            <input 
                type="text" 
                value={movieName} 
                onChange={handleChange} 
                
            />
            <input type="submit" value="Submit" />
        </form>
    </div>
    )
}
