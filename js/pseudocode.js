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
// 12. nope  add event listener to wheel targeting id 

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
//  10. ✅MAKE GRADIENTS IN DISPLAY BOXES MIRROR EACH OTHER. TOO SAME SAME


/*------------JS Pseudocode---------*/
//1. ✅Define Constants
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
//     

//         ✅ DISPLAY CURRENT BETS    could there be an arrow up down here to change the amount of bet per square???
        //noon monday. it displays the displayBets array. need to convert to user appropriate info
        //so. loop through the array, if # is 0-36, just remove the 'sq' in front of the number. --so i need this to give me a new array and display that one
        //if the # is 37-39 change to 'Col 1, Col2, Col3'=> fix this 
        //if its one of the outside bets:::
        //something else, no idea just yet

        //then i can take this new array and filter it somehow and add ': ${theBetAmount}' and maybe an up/down arrow to change the amounts
        //if add the arrows, need to only allow one click per square and somehow tell the player to change the amount in the other square



//      /*----init(invoke at top)----*/
//           ✅--Board is clear
//           ✅--ask player what charachter they want to be
//              this should be on a landing page, show robot/cat (word for picture here) and stories for each. when clicked, go to game with that info....may be a stretch goal

//           --player has $1000✅
//          ✅ --wheel is still/flat colored
//          ✅ --tooltip pop up with odds for groups of squares/boxes
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
//              ✅ render can be a funcion of smaller funcions
//              ✅ --the wheel spin
//         ✅ --set time for how long spin takes
//          ✅--randomly pic number 0-36(could be 37 to include 00)
//         ✅ --clearly flash the winning number
//          ✅--push prev winning numbers to a visible list 
//          ✅--determine winners
//              ✅-if random number, is winner
//              ✅-if random number was even/odd and even/odd was played
//             ✅ -if number was in one of the 2:1 columns and that square was played
//             ✅ -if number was in 1st, 2nd, or 3rd 12s and that box was played
//             ✅ -if number was in first or last 18 and that box was played
//         ✅ --mark winning number
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
//          ✅--clear the board



//6. Special Extras
✅// add voice of croupier Place your bets!, No more bets! number call out
// add ticking sound of ball rolling
// add clicking sound of chips being placed on board (in event listener function)
// sounds will need delays
// ✅flashing colors to make wheel appear to spin
// ✅how to make flashing: maybe the piece gets a tiny bit bigger?
// rave mode for hitting the number
// ✅flashing dollar signs/other currencty on screen for hitting odd/even or red/black (in other colors)
// ✅Landing page




//stretch goals::
//      ✅be able to click on the player name and get his background story
//      ✅have robot avatars as the characters
//      hover over sections/squares highlights those areas (hover over red highlights all red, hover over one number highlights that number)
//      add double zero
//      allow the player to change the chip amount
//      allow the player to change the color of chips
//      ✅add ability to bet on 3rds of number board
//      ✅add ability to bet high number(1-18)/low number(19-36)
//      make pieces of the number board light up as well as the wheel
//      see the ball spin around the wheel
//      ✅make the wheel spin      https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
//      make the cash colorful, maybe change color somehow?? $rainbucks$
//      see the robot croupier!



