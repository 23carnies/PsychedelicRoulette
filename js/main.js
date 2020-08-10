/*-------------Constants-------------*/
let sq37El = [1,4,7,10,13,16,19,22,25,28,31,34];
let sq38El = [2,5,8,11,14,17,20,23,26,29,32,35];
let sq39El = [3,6,9,12,15,18,21,24,27,30,33,36];
let rec45Org = [2,4,6,8,10,11,13,14,15,17,20,22,23,24,26,28,29,31,33,35];
let rec46Grn = [1,3,5,7,9,12,16,18,19,21,25,27,30,32,34,36];


/*-------------State Variables-------------*/
//multiple bets ?! oh geez, how to know which bet is the winning number??
let winner, playerTotal, playerInsideBets = [], playerOutsideBets = [], previousNums = [], displayBets= [];
let betChip = 50;



/*-------------Cached Refernce Elements-------------*/
const insideBetsBox = document.getElementById('insideBets');
const outsideBetsBox = document.getElementById('outsideBets');
const playerTotalEl = document.getElementById('total');
const spinEl = document.getElementById('spin');
const prevNumsEl = document.getElementById('prevNumbers');
const currentBetEl = document.getElementById('currentBets');
const winningNumDivEl = document.getElementById('winningNumDiv');




/*-------------Event Listeners-------------*/
    //why wont these work when i try to call all the functions inside one event listener
insideBetsBox.addEventListener('click', handleInsideBetsClick);
insideBetsBox.addEventListener('click', placeInsideBetChips);
insideBetsBox.addEventListener('click', displayCurrentBets);
outsideBetsBox.addEventListener('click', handleOutsideBetsClick);
outsideBetsBox.addEventListener('click', placeOustideBetChips);
outsideBetsBox.addEventListener('click', displayCurrentBets);
spinEl.addEventListener('click', render);


/*-------------Functions-------------*/
function init(){
    playerTotal = 1000;
    playerNumber = [];
    //clear board
    //clear current bets
    //clear winning number div
    //clear prev winners
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
    displayCurrentBets.push(insideId);
    console.log(insideId)
    return insideId;
}

//if second click is on the chip (not the rest of the space in the square) it's an error
function placeOustideBetChips(e){
    let outsideId = e.target.getAttribute('id');
    let outChip = document.createElement('div');
    let outChipText = document.createTextNode(`${betChip}`);
    outChip.appendChild(outChipText);
    outChip.className = 'chip';
    document.getElementById(outsideId).appendChild(outChip);
    displayCurrentBets.push(outsideId);
    console.log(outsideId);
    return outsideId;
}

function determineTheBet(){
    //for each chip placed on the board, total goes down 50
}

function increaseBetOnSquare(){

}

function displayCurrentBets(insideId, outsideId){
    currentBetEl.innerHTML = 'Current Bets';
    let displayBetsDiv = document.createElement('p');
    let betsDisplay = document.createTextNode(``)
}

function getWinningNumber(){
    winner = (Math.floor(Math.random()*37));
    displayWinningNum();
    previousNums.push(winner);
}

//still cant get the old number to leave before the new number arrives
function displayWinningNum(){
    winningNumDivEl.innerHTML = '';
    let winNumPTag = document.createElement('p')
    winNumPTag.innerHTML = '';
    let winningNum = document.createTextNode(`${winner}`);
    winNumPTag.appendChild(winningNum);
    winNumPTag.className = 'winningNumber';
    document.getElementById('mainArt').appendChild(winNumPTag)
    console.log(winNumPTag)
}

//will need to figure how many to display and start .shift() to remove from beginning of array (oldest numbers)
//is appending entire array each click...need to just add the newest number
function displayPreviousWinningNums(){
    prevNumsEl.innerHTML = `Previous Winners </br>`;
    let prevNumPTag = document.createElement('p');
    let prevNumsDisp = document.createTextNode(`${previousNums}`);
    prevNumPTag.appendChild(prevNumsDisp);
    prevNumsDisp.className = 'displayNums';
    prevNumsEl.appendChild(prevNumsDisp);
    console.log(previousNums)
}

/* not 100% about the math here. Will playerTotal add all 4 contingencies if necessary?*/
function determineInsideWins(){
    if (playerInsideBets.includes(winner)){
        playerTotal += (36 * betChip);
    }
    if (playerInsideBets.includes('37') && sq37El.includes(winner)){
        playerTotal += (3 * betChip);
    }
    if (playerInsideBets.includes('38') && sq38El.includes(winner)){
        playerTotal += (3 * betChip);
    }
    if (playerInsideBets.includes('39') && sq39El.includes(winner)){
        playerTotal += (3 * betChip);
    }
    return playerTotal;
}

function determineOutsideWins(winner){
    if (playerOutsideBets.includes('40') && (winner >= 1 && winner <= 12)) {
        playerTotal += (3 * betChip);
    }
    if (playerOutsideBets.includes('41') && (winner >= 13 && winner <=24)) {
        playerTotal += (3 * betChip);
    }
    if (playerOutsideBets.includes('42') && (winner >= 25 && winner <= 36)) {
        playerTotal += (3 * betChip);
    }
    if (playerOutsideBets.includes('43') && (winner >= 1 && winner <=18)) {
        playerTotal += (2 * betChip);
    }
    if (playerOutsideBets.includes('44') && winner % 2 === 0) {
        playerTotal += (2 * betChip);
    }
    if (playerOutsideBets.includes('45') && rec45Org.includes(winner)) {
        playerTotal += (2 * betChip);
    }
    if (playerOutsideBets.includes('46') && rec46Grn.includes(winner)) {
        playerTotal += (2 * betChip);
    }
    if (playerOutsideBets.includes('47') && winner % 2 !== 0) {
        playerTotal += (2 * betChip);
    }
    if (playerOutsideBets.includes('48') && (winner >= 19 && winner <=36)) {
        playerTotal += (2 * betChip);
    }
    return playerTotal;
}

function determineLosses(){
//something like if player inside/outside bets !== adding to total, then keep the money
}

function render(){
    getWinningNumber();
    determineInsideWins();
    determineOutsideWins();
    displayPreviousWinningNums();
    let appTotal = document.createTextNode(`${playerTotal}`);
    playerTotalEl.appendChild(appTotal)
}












//check computer if it wants to start in dark mode
// function checkUserColorSchemePreference() {
//     if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
//       colorScheme.changeColorScheme()
//     }
//   }