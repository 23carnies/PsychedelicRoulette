//  Questions to answer
//      how many places can you play at once
//      how to split circle into 37 pieces in css
//      how to light up circle in iteration (one section after the other)
//      how to add chip to place on board
//      how to write a game readme
//      enter name of player or get to pick from a character



//The overreaching principle to keep in mind is...
// In response to user interaction:

// Update all state impacted by the interaction, then
// Update the DOM by calling render().




/*      Pseudocode      */
// 1. set html, css, js basics
// 2. set css numbers board
// 3. set css circle for spinner
//        multi colored wheel with numbers
// 4. set play button
// 5. set spin button
// 6. set div for number to be appended to  
// 7. set div for total
// 8. set div for bet input field
// 9. set div for prev numbers

// 10. set id for each section of square board
// 11. set classes for colors of the wheel(or ids for each piece?)
// 12. add event listener to wheel targeting id 

// set transform-function rotate for wheel 
//     --oh the math here
//     https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate


/*------------CSS Pseudocode----------*/
//  1. the board:: 39squares (1-36 + 2:1 section) + 9 boxes (evens/colors/groups of 12/18) + the 0 box
//  2. the wheel:: 37 sections
//  3. the chips
//  4. the buttons



/*------------JS Pseudocode---------*/
//1. Define Constants
//      --? the board and the wheel?

//2. Define State variables
//    what does the app need to remember throughout the game?
//        --prev called numbers
//        --total $$ player has
//        --bet amount
//    use the wireframes/userstories/pseudocode to determine what state needs to be tracked
//          set the base state of the board (start of game)
//      no bets placed
//      player has $1000
//      player can set bets in increments of $50

//3. Select/cache reference elements

//4. Add event listeners
//      entire board
//      bet increase button
//          more than one button? 
//          one button for bet amount 
//          minimum functionality: bet on number, odd/even, and red/black
//          (better if can bet 1st 12, 2nd 12, 3rd 12)
//      spin button 


//5. Functions::
//      /*----init(invoke at top)----*/
//           --Board is clear
//           --ask player what charachter they want to be
//           --player has $1000
//           --wheel is still/flat colored
        /*---RENDER---*/
//          ➣set min/max betting opportunities
//              -must play one number to play number sections
//              -must play even/odd or red/black if not playing number
//              -must make minimum bet if only playing evens or colors
//              --what is minimum bet? $100? $10 or $20 chips
//          ➣()()()was the minimum reached? if not, no spin
//          ➣code must take in what squares/boxes have been selected and hold this info to compare to winning number
//          ➣set transform-function color rotation effect for wheel 
//               --oh the math here
//           ➣Render (as user interacts with app, code the app so that it UPDATES STATE, then CALLS RENDER)
//               render can be a funcion of smaller funcions
//               --the wheel spin
//          --set time for how long spin takes
//          --randomly pic number 0-36(could be 37 to include 00)
//          --push prev numbers to list visible 
//          --determine winners
//              -if random number, is winner
//              -if random number was even/odd and even/odd was played
//              -if number was in one of the 2:1 columns and that square was played
//              -if number was in 1st, 2nd, or 3rd 12s and that box was played
//              -if number was in first or last 18 and that box was played
//          --mark winning number
//          --winner/payouts:
//              Number 35:1
//              1st/2nd/3rd 12 sets 2:1
//              Odd/Even, Red/Black, 1to18, 19to36, column dozens all 1:1
//          --rave mode for hitting the number
//              background flashing
//              wheel flashing
//              board flashing(may be stretch goal)

➣


//6. Special Extras
// add voice of croupier Place your bets!, No more bets! number call outerHeight
// add ticking sound of ball rolling
// add clicking sound of chips being placed on board (in event listener function)
// flashing colors to make wheel appear to spin
// rave mode for hitting the number
// flashing dollar signs/other currencty on screen for hitting odd/even or red/black (in other colors)




//stretch goals::
//      be able to click on the player name and get his background story
//      have robot avatars as the characters
//      tooltip on each square giving odds
//      hover over sections/squares highlights those areas (hover over red highlights all red, hover over one number highlights that number)
//      add double zero
//      allow the player to change the bet
//      allow the player to change the color of chips
//      add ability to bet on 3rds of number board
//      add ability to bet high number(1-18)/low number(19-36)
//      make pieces of the number board light up as well as the wheel
//      see the ball spin around the wheel
//      make the wheel spin      https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate









/*-------------Constants-------------*/
/*-------------State Variables-------------*/
/*-------------Cached Refernce Elements-------------*/
/*-------------Event Listeners-------------*/
/*-------------Functions-------------*/










// Code away!

// Iterating between adding HTML, CSS & JS is one approach.
// Start with some markup for the basic layout of the UI.
// Declare, but don't initialize, the application-wide variables (state). The initialization of the variables to their "start-up" state should be done within an initialize, or similarly named function, i.e., init, reset, etc.
// Write that initialize function.
// Invoke initialize() to "kick off" the app.
// Next stub up a render function. Be sure to call render after state has been updated in event handlers, the initialize function, etc.
// Register event listeners - browser apps are typically event-driven.
// If you have user stories, code them in a logical order.
// More recommendations for interactive browser app's, such as games

// Create a main render function that is responsible for rendering the state of the app to the DOM.
// If the render function becomes lengthy, add additional rendering oriented functions, for example:
// function render() {
// 	renderHands();
// 	renderControls();
// 	if (winner) {
// 		renderWinnerMessage();
// 	} else {
// 		renderTurnMessage();
// 	}
// }
// Avoid accessing the DOM from outside render-oriented functions. However, "eye candy" animations, a ticking time display, etc. are exceptions to this tip.
// Data (state) is the single source of truth of the app - when implementing an app's logic, the DOM is secondary to data manipulation. Get used to thinking about how to your app's data changes vs. the display.
// As the user interacts with the application (or other events such as timers trigger), code the app such that it:
// Updates state, then...
// Calls render()
// Make frequent git commits of working code

// At a minimum, commit each "milestone" or feature implementation.
// Experiment and refactor code as necessary

// Have fun!