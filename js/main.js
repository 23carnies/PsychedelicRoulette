/*-------------Constants-------------*/
let sq37El = [1,4,7,10,13,16,19,22,25,28,31,34];
let sq38El = [2,5,8,11,14,17,20,23,26,29,32,35];
let sq39El = [3,6,9,12,15,18,21,24,27,30,33,36];
let rec45Org = [2,4,6,8,10,11,13,14,15,17,20,22,23,24,26,28,29,31,33,35];
let rec46Grn = [1,3,5,7,9,12,16,18,19,21,25,27,30,32,34,36];


/*-------------State Variables-------------*/
//multiple bets ?! oh geez, how to know which bet is the winning number??
let winner, playerTotal, playerInsideBets = [], playerOutsideBets = [], previousNums = [];
let betChip = 50;



/*-------------Cached Refernce Elements-------------*/
const insideBetsBox = document.getElementById('insideBets');
const outsideBetsBox = document.getElementById('outsideBets');
const playerTotalEl = document.getElementById('total');
const spinEl = document.getElementById('spin');
const prevNumsEl = document.getElementById('prevNumbers');
const currentBetEl = document.getElementById('currentBets')


//will need to figure how many to display and start .shift() to remove from beginning of array (oldest numbers)
//had to add p tags so that the syling is different from the headers for this section. may not be necesary really and more of a pain than it's worth
function displayPreviousWinningNums(){
    let prevNums = document.createTextNode(`${previousNums}`);
}
/*-------------Event Listeners-------------*/
insideBetsBox.addEventListener('click', handleInsideBetsClick);
insideBetsBox.addEventListener('click', placeInsideBetChips);
outsideBetsBox.addEventListener('click', handleOutsideBetsClick);
outsideBetsBox.addEventListener('click', placeOustideBetChips);
spinEl.addEventListener('click', render);


/*-------------Functions-------------*/
function init(){
    playerTotal = 1000;
    playerNumber = [];
    //clear board
}

function handleInsideBetsClick(e){
    let squareIndex = parseInt(e.target.id.replace('sq', ''));
    // console.log(squareIndex);
    playerInsideBets.push(squareIndex);
    return squareIndex;
}
function handleOutsideBetsClick(e){
    let recIndex = parseInt(e.target.id.replace('rec', ''));
    console.log(recIndex);
    playerOutsideBets.push(recIndex);
    return recIndex;
}

function placeInsideBetChips(e){
    let insideId = e.target.getAttribute('id');
    let chip = document.createElement('div');
    let chipText = document.createTextNode('50');
    chip.appendChild(chipText);
    chip.className = 'chip'
    document.getElementById(insideId).appendChild(chip);
    console.log(insideId)
    return ;
}

//if second click is on the chip (not the rest of the space in the square) it's an error
function placeOustideBetChips(e){
    let outsideId = e.target.getAttribute('id');
    let outChip = document.createElement('div');
    let outChipText = document.createTextNode(`${betChip}`);
    outChip.appendChild(outChipText);
    outChip.className = 'chip';
    document.getElementById(outsideId).appendChild(outChip);
    console.log(outsideId);
    return ;
}

function increaseBetOnSquare(){

}


function getWinningNumber() {
    winner = (Math.floor(Math.random()*37));
    displayWInningNum();
    previousNums.push(winner);
}

function displayWInningNum(){
    let winNumDiv = document.createElement('div')
    let winningNum = document.createTextNode(`${winner}`);
    winNumDiv.appendChild(winningNum);
    winNumDiv.className = 'winningNumber';
    document.getElementById('mainArt').appendChild(winNumDiv)
    console.log(winNumDiv)
}



/* not 100% about the math here. Will playerTotal add all 4 contingencies if necessary?*/
function determineInsideWins() {
    if (playerInsideBets.includes(winner)){
        playerTotal += (35 * betChip);
    }
    if (playerInsideBets.includes('37') && sq37El.includes(winner)){
        playerTotal += (2 * betChip);
    }
    if (playerInsideBets.includes('38') && sq38El.includes(winner)){
        playerTotal += (2 * betChip);
    }
    if (playerInsideBets.includes('39') && sq39El.includes(winner)){
        playerTotal += (2 * betChip);
    }
    return playerTotal;
}

function determineOutsideWins(winner) {
    if (playerOutsideBets.includes('40') && (winner >= 1 && winner <= 12) {
        playerTotal += (2 * betChip);
    }
    if (playerOutsideBets.includes('41') && (winner >= 13 && winner <=24)) {
        playerTotal += (2 * betChip);
    }
    if (playerOutsideBets.includes('42') && (winner >= 25 && winner <= 36)) {
        playerTotal += (2 * betChip);
    }
    if (playerOutsideBets.includes('43') && (winner >= 1 && winner <=18) {
        playerTotal += (betChip);
    }
    if (playerOutsideBets.includes('44') && winner % 2 === 0) {
        playerTotal += (betChip);
    }
    if (playerOutsideBets.includes('45') && rec45Org.includes(winner)) {
        playerTotal += (betChip);
    }
    if (playerOutsideBets.includes('46') && rec46Grn.includes(winner)) {
        playerTotal += (betChip);
    }
    if (playerOutsideBets.includes('47') && winner % 2 !== 0 {
        playerTotal += (betChip);
    }
    if (playerOutsideBets.includes('48') && (winner >= 19 && winner <=36) {
        playerTotal += (betChip);
    }
    return playerTotal;
}

function determineLosses(){
//something like if player inside/outside bets !== adding to total, then keep the money
}

function render() {
    getWinningNumber();
    determineInsideWins();
    determineOutsideWins();
    let appTotal = document.createTextNode(`${playerTotal}`);
    playerTotalEl.appendChild(appTotal)
}




        //  so! there is insideBetsBox and outsideBetsBox
        //      insideBets function for click takes the index and pushes ot insideBets array
        //      outsideBets funciton will take click and send index to outsideBets array
        //          i can only figure here to make constants to convert the outside bets first12=40, sec12=41, or maybe make an array of numbers by payout? but prob still need to convert them to indexes
        //      then getWinner runs
        //      pass winner into function to see if inside bets win
        //      pass winner into function to see if ouside bets win
        //      pass both of those to payout function?
        //      then render to screen and clear board
//--determine winners
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














//check computer if it wants to start in dark mode
// function checkUserColorSchemePreference() {
//     if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
//       colorScheme.changeColorScheme()
//     }
//   }