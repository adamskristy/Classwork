// Props are passed as object argument to our component, 
// must define a parameter to receive it


function Player(props) {
    return (
        <div className={props.whichPlayer}>
          <h2>Player {props.whichPlayer} </h2>
          <h3>Wins: </h3>
        </div>
      )
  }

  export default Player;