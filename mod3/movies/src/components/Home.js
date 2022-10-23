import Form from "./Form";

function Home() {
    return ( 
        <div>
            <h3>Home</h3>
            {/* We pass movie as props to movie display  */}
            <MovieDisplay movie={movie}/>
            {/* We pass the getMovie function as a prop called getMovie */}
            <Form getMovie={getMovie} />
        </div>
     );
}

export default Home;