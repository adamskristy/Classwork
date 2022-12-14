// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// You can also destructure your props directly from the parameter list
export default function  MovieDisplay ({ movie }){
    //function to return loaded JSX
    const loaded = () => {
      return (
        <>
          <h1>{movie.Title} ({movie.Year})</h1>
          <h2>{movie.Genre}</h2>
          <img src={movie.Poster} alt={movie.Title} />
        </>
      );
    };
  
    //function to return loading JSX
    const loading = () => {
      return <h4>No Movie to Display</h4>;
    };
  
    //Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
  };