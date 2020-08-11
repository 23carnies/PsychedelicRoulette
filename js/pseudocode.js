//  Questions to answer
//      how many places can you play at once
//      ✅how to split circle into 37 pieces in css--you dont!
//      how to light up circle in iteration (one section after the other)
//     ✅ how to add chip to place on board
//     ✅ how to write a game readme
//      enter name of player or get to pick from a character



//The overreaching principle to keep in mind is...
// In response to user interaction:

// Update all state impacted by the interaction, then
// Update the DOM by calling render().




/*      Pseudocode      */
// 1. ✅set html, css, js basics
// 2. ✅set css numbers board
// 3. ✅set css circle for spinner
//        multi colored wheel with numbers
// 4. set play button  needed??
// 5. ✅set spin button
// 6. ✅set div for number to be appended to  
// 7. ✅set div for total
// 8. ✅set div for bet input field
// 9. ✅set div for prev numbers
//  9a. ✅set div so player can see where each chip is on board neatly written out    NEEDED??
//      $20:13, $20:2:1(second row or by color) etc

// 10. ✅set id for each section of square board
// 11. ✅set classes for colors of the wheel(or ids for each piece?)
// 12. add event listener to wheel targeting id 

// set transform-function rotate for wheel ✅
//     --oh the math here


/*------------CSS Pseudocode----------*/
//  1. ✅the board:: 39squares (1-36 + 2:1 section) + 9 boxes (evens/colors/groups of 12/18) + the 0 box
//  2. the wheel:: 37 sections
//  3. ✅the chips:: colorful, rainbow or random color chips ?
//  4. ✅the buttons:: very colorful
//  5. player cash div should be rainbow and call them rainbucks
//  6. ✅div so player can see how much is currently out in play on each number
//  #. ✅column of winning numbers displayed on one side of screen
//  7. Mobile responsive!!
//    7a. column of winning numbers becomes a row
//    7b. wheel and board must now be stacked somehow
//  8. Choose persona at beginning of game
//  9. ✅**use Asset Google Font for lettering. hope it looks good in colors
//  10. MAKE GRADIENTS IN DISPLAY BOXES MIRROR EACH OTHER. TOO SAME SAME


/*------------JS Pseudocode---------*/
//1. Define Constants
//      --? the board and the wheel?

//2. ✅Define State variables
//    what does the app need to remember throughout the game?
//        --prev called numbers✅
//        --total $$ player has✅
//        --bet amount
//    use the wireframes/userstories/pseudocode to determine what state needs to be tracked
//          set the base state of the board (start of game)
//      no bets placed
//      ✅player has $1000
//      player can set bets in increments of $50

//3. ✅Select/cache reference elements

//4. Add event listeners
//      ✅entire board
//      bet increase button
//          more than one button? 
//          one button for bet amount 
//          minimum functionality: bet on number, odd/even, and red/black
//          (better if can bet 1st 12, 2nd 12, 3rd 12)
//      ✅spin button 
//      ✅add chip to board



//5. Functions::
//      FUNCTIONS THAT NEED HELP::
//          DETERMINE THE BET
//          INCREASE BET ON SQUARE

//         ✅ DISPLAY CURRENT BETS    could there be an arrow up down here to change the amount of bet per square???
        //noon monday. it displays the displayBets array. need to convert to user appropriate info
        //so. loop through the array, if # is 0-36, just remove the 'sq' in front of the number. --so i need this to give me a new array and display that one
        //if the # is 37-39 change to 'Col 1, Col2, Col3'=> fix this 
        //if its one of the outside bets:::
        //something else, no idea just yet

        //then i can take this new array and filter it somehow and add ': ${theBetAmount}' and maybe an up/down arrow to change the amounts
        //if add the arrows, need to only allow one click per square and somehow tell the player to change the amount in the other square



//      /*----init(invoke at top)----*/
//           --Board is clear
//           --ask player what charachter they want to be
//              this should be on a landing page, show robot/cat (word for picture here) and stories for each. when clicked, go to game with that info....may be a stretch goal

//           --player has $1000✅
//           --wheel is still/flat colored
//           --tooltip pop up with odds for groups of squares/boxes
        /*---RENDER---*/
//          ✅ set winning number functions        
//          ➣set min/max betting opportunities
//              -must make minimum bet on inside of board (numbers)
//              -must make minimum bet on outside of board (other squares/boxes)
//              -minimum bet inside or outside is $100
//                  --function for determining if enough chips have been placed
//                   ➣()()()was the minimum reached? if not, no spin
//              --how to deal with multiple chips on one spot-visually no change probably but will see total bets in their div
//          ✅➣code must take in what squares/boxes have been selected and hold this info to compare to winning number
//          ➣set transform-function color rotation effect for wheel 
//               --oh the math here
//        


//  I TOTALLY FORGOT ABOUT WHAT HAPPENS IF PLAYER LOSES!!!
//  WIN FUNCTIONS ARE SET JUST TO GIVE WINNINGS, NOT GIVE THE BET BACK UGH ✅ seems to be handled
        //  ✅so! there is insideBetsBox and outsideBetsBox
        //      ✅insideBets function for click takes the index and pushes ot insideBets array
        //     ✅ outsideBets funciton will take click and send index to outsideBets array
        //          ✅i can only figure here to make constants to convert the outside bets first12=40, sec12=41, or maybe make an array of numbers by payout? but prob still need to convert them to indexes
        //      ✅then getWinner runs
        //      ✅pass winner into function to see if inside bets win
        //      ✅pass winner into function to see if ouside bets win
        //     ✅ pass both of those to payout function?
        //      ✅then render to screen 
        //      and clear board



//              ✅add chip to board
//                  ✅one for inside/outside
//                  ✅on the click, get id of square/rec clicked, create div with "50", add #chip style, and add that to the square
//                      just need them to place a little nicer in the box...later details



//➣Render (as user interacts with app, code the app so that it UPDATES STATE, then CALLS RENDER)
//               render can be a funcion of smaller funcions
//               --the wheel spin
//          --set time for how long spin takes
//          ✅--randomly pic number 0-36(could be 37 to include 00)
//          --clearly flash the winning number
//          ✅--push prev winning numbers to a visible list 
//          ✅--determine winners
//              ✅-if random number, is winner
//              ✅-if random number was even/odd and even/odd was played
//             ✅ -if number was in one of the 2:1 columns and that square was played
//             ✅ -if number was in 1st, 2nd, or 3rd 12s and that box was played
//             ✅ -if number was in first or last 18 and that box was played
//          --mark winning number
//          ✅--winner/payouts--this is total player $ + the payout
//              ✅Number 35:1
//              ✅1st/2nd/3rd 12 sets, column dozens all 2:1
//              ✅Odd/Even, Red/Black, 1to18, 19to36 all 1:1
//          --rave mode for hitting the number
//              background flashing
//              wheel flashing
//              board flashing(may be stretch goal)
//              this needs a timeOut function!!
//              trigger warning for accessibility
//              vegas music playing
//          --clear the board



//6. Special Extras
// add voice of croupier Place your bets!, No more bets! number call out
// add ticking sound of ball rolling
// add clicking sound of chips being placed on board (in event listener function)
// sounds will need delays
// flashing colors to make wheel appear to spin
// how to make flashing: maybe the piece gets a tiny bit bigger?
// rave mode for hitting the number
// flashing dollar signs/other currencty on screen for hitting odd/even or red/black (in other colors)
// Landing page




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






// let insideIdEl = new DOMParser().parseFromString(insideId, "text/html")
    // console.log(`i am the ${insideIdEl}`);
    //call add chip

    // let insideIdEl = new DOMParser().parseFromString(`${e.target.getAttribute('id')}`, "text/html")



    // function placeInsideBetChips(e){
    //     let insideId = e.target.getAttribute('id');
    //     let chip = document.createElement('div');
    //     let chipText = document.createTextNode('50');
    //     chip.appendChild(chipText);
    //     chip.className = 'chip'
    //     document.getElementById(insideId).appendChild(chip);
    //     console.log(insideId)
    //     return ;
    // }
    // let rec44Evn = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
    // let rec47Odd = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
    //let rec43Eitn = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    //let rec48Thsx = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
    // let rec40Frst = [1,2,3,4,5,6,7,8,9,10,11,12];
    // let rec41Sec = [13,14,15,16,17,18,19,20,21,22,23,24];
    // let rec42Thrd = [25,26,27,28,29,30,31,32,33,34,35,36];


    // #wheel {
    //     position: relative;
    //     border: 15px solid #9900FF;
    //     border-radius: 50%;
    //     background-color: black;
    //     overflow: hidden;
    //     width: 400px;
    //     height: 400px;
    //     box-shadow: 2px 2px 4px rgb(125, 248, 2);
    // }
    
    // #sp0 { 
    //     top: 0;
    //     left: 0;
    //     background-color: cornflowerblue;
    //     clip-path: polygon(100% 0, 0 0, 100% 100%);
    // }
    // #spoke32 {
    //     top: 0;
    //     left: 25%;
    //     background-color: chartreuse;
    //     clip-path: polygon(100% 0, 0 0, 0100%);
    // }
    // #spoke15 {
    //     top: 0;
    //     left: 25%;
    //     background-color: #FF0099;
    //     clip-path: polygon(100% 0, 0 100%, 100% 100%);
    // }
    // #spoke19 {
    //     top: 25%;
    //     left: 25%;
    //     background-color: chartreuse;
    //     clip-path: polygon(100% 0, 0 0, 100% 100%);
    // }
    // #spoke4 {
    //     top: 25%;
    //     left: 25%;
    //     background-color: #FF0099;
    //     clip-path: polygon(100% 100%, 00, 0 100%);
    // }
    // #spoke21 {
    //     top: 50%;
    //     left: 50%;
    //     background-color:chartreuse;
    //     clip-path: polygon(100% 100%, 100% 0, 0 100%);
    // }
    // #spoke2 {
    //     top: 50%;
    //     left: 50%;
    //     background-color: #FF0099;
    //     clip-path: polygon(0 100%, 100% 0, 0 0);
    // }
    // #spoke25 {
    //     top: 50%;
    //     left: 0;
    //     background-color: chartreuse;
    //     clip-path: polygon(0 100%, 100% 100%, 0 0);
    // }
    // #spoke17 {
    //     top: 50%;
    //     left: 0;
    //     background-color: #FF0099;
    // }
    // #spoke34 {
    //     top: 25%;
    //     left: 0;
    //     background-color: chartreuse;
    // }
    // #spoke6 {
    //     top: 25%;
    //     left: 0;
    //     background-color: #FF0099;
    
    // }
    // #spoke27 {
    //     background-color: chartreuse;
    
    // }
    // #spoke13{
    //     background-color: #FF0099;
    
    // }
    // #spoke26 {
    //     background-color: #7fff00;
    
    
    // }
    // #spoke11 {
    //     background-color: #FF0099;
    
    // }
    // #spoke30 {
    //     background-color: chartreuse;
    
    // }
    
    // .spoke {
    //     list-style-type: none;
    //     position: absolute;
    //     width: 50%;
    //     height: 50%;    
    // }
    
        