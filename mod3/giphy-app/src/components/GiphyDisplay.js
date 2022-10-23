function GiphyDisplay({giphy}) {
let gif = giphy
console.log(gif)

const loaded = () => {

    return ( 
        <div>
            <h2>{gif.title}</h2>
            <img src={gif.url} />
        </div>
     );

}

const loading = () => {
    return <div>
            <span>Press the button...</span>
        </div>
}

    return giphy ? loaded() : loading()
}

export default GiphyDisplay;