import React from "react";

function GuessingGame() {

    function clickMe() {
        alert('You clicked me!')
}

    return(
        <div>
             <h1>"I am thinking of a number between 1 and 100."<br></br>"Guess the Lucky Number!"</h1>
             <p>"You have made {0} guesses"</p>
             A form with and input  for the user's guess.<br></br>
             A Guess Button to submit the guess.<br></br>
             A paragraph that says "You have made 0 guesses", and displays the number of guesses the user has made.<br></br>
             A paragraph that displays a message to the user indicating whether the user has guessed correctly, too high, or too low.<br></br>
             A "Reset" button that resets the game by picking a new number to guess and resetting the number of guesses back to 0.
             <button onClick={clickMe}>
            Button
        </button>

        </div>
            

            
    )
}

export default GuessingGame 