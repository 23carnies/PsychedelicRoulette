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
//  9a. set div so player can see where each chip is on board neatly written out
//      $20:13, $20:2:1(second row or by color) etc

// 10. set id for each section of square board
// 11. set classes for colors of the wheel(or ids for each piece?)
// 12. add event listener to wheel targeting id 

// set transform-function rotate for wheel 
//     --oh the math here


/*------------CSS Pseudocode----------*/
//  1. the board:: 39squares (1-36 + 2:1 section) + 9 boxes (evens/colors/groups of 12/18) + the 0 box
//  2. the wheel:: 37 sections
//  3. the chips:: colorful, rainbow or random color chips ?
//  4. the buttons:: very colorful
//  5. player cash div should be rainbow and call them rainbucks
//  6. div so player can see how much is currently out in play on each number
//  #. column of winning numbers displayed on one side of screen
//  7. Mobile responsive!!
//    7a. column of winning numbers becomes a row
//    7b. wheel and board must now be stacked somehow
//  8. Choose persona at beginning of game
//  9. **use Asset Google Font for lettering. hope it looks good in colors


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
//           --tooltip pop up with odds for groups of squares/boxes
        /*---RENDER---*/
//          ➣set min/max betting opportunities
//              -must make minimum bet on inside of board (numbers)
//              -must make minimum bet on outside of board (other squares/boxes)
//              -minimum bet inside or outside is $100
//                  --function for determining if enough chips have been placed
//                   ➣()()()was the minimum reached? if not, no spin
//              --how to deal with multiple chips on one spot-visually no change probably but will see total bets in their div
//          ➣code must take in what squares/boxes have been selected and hold this info to compare to winning number
//          ➣set transform-function color rotation effect for wheel 
//               --oh the math here
//           ➣Render (as user interacts with app, code the app so that it UPDATES STATE, then CALLS RENDER)
//               render can be a funcion of smaller funcions
//               --the wheel spin
//          --set time for how long spin takes
//          --randomly pic number 0-36(could be 37 to include 00)
//          --clearly flash the winning number
//          --push prev winning numbers to a visible list 
//          --determine winners
//              -if random number, is winner
//              -if random number was even/odd and even/odd was played
//              -if number was in one of the 2:1 columns and that square was played
//              -if number was in 1st, 2nd, or 3rd 12s and that box was played
//              -if number was in first or last 18 and that box was played
//          --mark winning number
//          --winner/payouts--this is total player $ + the payout
//              Number 35:1
//              1st/2nd/3rd 12 sets, column dozens all 2:1
//              Odd/Even, Red/Black, 1to18, 19to36 all 1:1
//          --rave mode for hitting the number
//              background flashing
//              wheel flashing
//              board flashing(may be stretch goal)
//              this needs a timeOut function!!
//              trigger warning for accessibility
//              vegas music playing



//6. Special Extras
// add voice of croupier Place your bets!, No more bets! number call out
// add ticking sound of ball rolling
// add clicking sound of chips being placed on board (in event listener function)
// sounds will need delays
// flashing colors to make wheel appear to spin
// how to make flashing: maybe the piece gets a tiny bit bigger?
// rave mode for hitting the number
// flashing dollar signs/other currencty on screen for hitting odd/even or red/black (in other colors)




//stretch goals::
//      be able to click on the player name and get his background story
//      have robot avatars as the characters
//      hover over sections/squares highlights those areas (hover over red highlights all red, hover over one number highlights that number)
//      add double zero
//      allow the player to change the chip amount
//      allow the player to change the color of chips
//      add ability to bet on 3rds of number board
//      add ability to bet high number(1-18)/low number(19-36)
//      make pieces of the number board light up as well as the wheel
//      see the ball spin around the wheel
//      make the wheel spin      https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
//      make the cash colorful, maybe change color somehow?? $rainbucks$
//      see the robot croupier!







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







/*-------PRESENTATION---------*/
//BE PREPARED TO FORCE A WINNING NUMBER TO GET RAVE MODE
//what is your favorite function??
//biggest challenge
//key learning/takeaways?




// Friday EOD: Repo set up, JS/CSS/HTML files linked, display a title, etc. in the browser to test README file mostly done (need deployment link, final screenshots)
// Weekend: Scaffold sections in the app, work on getting as MUCH done as possible over the weekend! The farther you get over the weekend, the better next week will go for you!
// Monday AM: You should have the basics for your app set up. You should have cached element references defined, event listeners configured and tested (console.log!!!), and basic control flow implemented.
// Monday EOD: Your control flow sections of code should all be organized properly and you should have at least started the basics of coding out the app’s functionality
// Tuesday EOD: Your app should be mostly working, a few bugs left to fix.
// Wednesday EOD: Your app should be 90-100% functional, with just styling left.
// Thursday EOD: Your app is beautiful because you spent the whole day styling it.
// Friday: Profit.