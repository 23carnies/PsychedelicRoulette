/*-------------Constants-------------*/
const groupBets = {
    sq37El: [1,4,7,10,13,16,19,22,25,28,31,34],
    sq38El: [2,5,8,11,14,17,20,23,26,29,32,35],
    sq39El: [3,6,9,12,15,18,21,24,27,30,33,36],
    rec45Org: [2,4,6,8,10,11,13,14,15,17,20,22,23,24,26,28,29,31,33,35],
    rec46Grn: [1,3,5,7,9,12,16,18,19,21,25,27,30,32,34,36]
}



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
init();

function init(){
    playerTotal = 1000;
    playerNumber = [];
    //clear board
    //clear current bets
    //clear winning number div
    //clear prev winners
    displayPlayerTotal();
}

function handleInsideBetsClick(e){
    let squareIndex = parseInt(e.target.id.replace('sq', ''));
    // console.log(squareIndex);
    playerInsideBets.push(squareIndex);
    //displayCurrentBets();
    return squareIndex;
}
function handleOutsideBetsClick(e){
    let recIndex = parseInt(e.target.id.replace('rec', ''));
    //console.log(recIndex);
    playerOutsideBets.push(recIndex);
    //displayCurrentBets();
    return recIndex;
}

function placeInsideBetChips(e){
    let insideId = e.target.getAttribute('id');
    let chip = document.createElement('div');
    let chipText = document.createTextNode(`${betChip}`);
    chip.appendChild(chipText);
    chip.className = 'chip'
    document.getElementById(insideId).appendChild(chip);
    displayBets.push(insideId);
    playerTotal -= 50;
    //console.log(insideId)
    return insideId;
}

//if second click is on the chip (not the rest of the space in the square) it's an error
function placeOustideBetChips(e){
    let outsideId = e.target.getAttribute('id');
    //strip out the rec for display info
    let outChip = document.createElement('div');
    let outChipText = document.createTextNode(`${betChip}`);
    outChip.appendChild(outChipText);
    outChip.className = 'chip';
    document.getElementById(outsideId).appendChild(outChip);
    displayBets.push(outsideId);
    playerTotal -= 50;
    //console.log(outsideId);
    return outsideId;
}

function onBet(){
    //for every chip that is put out, playerTotal should decrease by 50
}

function increaseBetOnSquare(){

}
function replaceStringBets(displayBets,x){
    displayBets = x.split('');
   if (displayBets.length > 4) {
       displayBets.splice(0,3);
   } else {
       displayBets.splice(0,2);
    } 
    console.log(displayBets);
   return displayBets.join('');
}
// function replaceStringBets(){
//     for(let i=0;i<displayBets.length;i++){
//         displayBets[i].replace(/[^0-9\.]+/g, '');
//     } console.log(displayBets)
// }
// function replaceStringBets(x){
//    displayBets = x.split('');
//    if (displayBets.length > 4) {
//        displayBets.splice(0,3);
//    } else {
//        displayBets.splice(0,2);
//    } return displayBets.join('');
//    console.log(displayBets);
// }

function displayCurrentBets(){
    //newdisplayBets = displayBets.replace(/[^0-9\.]+/g, '');
    currentBetEl.innerHTML = `Current Bets</br>`;
    let displayBetsDiv = document.createElement('p');
    let betsDisplay = document.createTextNode(`${displayBets}`);
    displayBetsDiv.appendChild(betsDisplay);
    betsDisplay.className = 'displayNums';
    currentBetEl.appendChild(betsDisplay);
    console.log(displayBets)
    //return newdisplayBets
}

function getWinningNumber(){
    winner = (Math.floor(Math.random()*37));
    displayWinningNum();
    previousNums.push(winner);
}

//still cant get the old number to leave before the new number arrives
function displayWinningNum(){
    winningNumDivEl.innerHTML = '';
    let winningNum = document.createTextNode(`${winner}`);
    winningNumDivEl.appendChild(winningNum);
    winningNumDivEl.className = 'winningNumber', 'animate__bounceInDown';
    document.getElementById('mainArt').appendChild(winningNumDivEl)
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
}

/* not 100% about the math here. Will playerTotal add all 4 contingencies if necessary?*/
function determineInsideWins(){
    if (playerInsideBets.includes(winner)){
        playerTotal += (36 * parseInt(betChip));
    }
    if (playerInsideBets.includes('37') && groupBets.sq37El.includes(winner)){
        playerTotal += (3 * parseInt(betChip));
    }
    if (playerInsideBets.includes('38') && groupBets.sq38El.includes(winner)){
        playerTotal += (3 * parseInt(betChip));
    }
    if (playerInsideBets.includes('39') && groupBets.sq39El.includes(winner)){
        playerTotal += (3 * parseInt(betChip));
    }
    return playerTotal;
}

function determineOutsideWins(winner){
    if (playerOutsideBets.includes('40') && (winner >= 1 && winner <= 12)) {
        playerTotal += (3 * parseInt(betChip));
    }
    if (playerOutsideBets.includes('41') && (winner >= 13 && winner <=24)) {
        playerTotal += (3 * parseInt(betChip));
    }
    if (playerOutsideBets.includes('42') && (winner >= 25 && winner <= 36)) {
        playerTotal += (3 * parseInt(betChip));
    }
    if (playerOutsideBets.includes('43') && (winner >= 1 && winner <=18)) {
        playerTotal += (2 * parseInt(betChip));
    }
    if (playerOutsideBets.includes('44') && winner % 2 === 0) {
        playerTotal += (2 * parseInt(betChip));
    }
    if (playerOutsideBets.includes('45') && groupBets.rec45Org.includes(winner)) {
        playerTotal += (2 * parseInt(betChip));
    }
    if (playerOutsideBets.includes('46') && groupBets.rec46Grn.includes(winner)) {
        playerTotal += (2 * parseInt(betChip));
    }
    if (playerOutsideBets.includes('47') && winner % 2 !== 0) {
        playerTotal += (2 * parseInt(betChip));
    }
    if (playerOutsideBets.includes('48') && (winner >= 19 && winner <=36)) {
        playerTotal += (2 * parseInt(betChip));
    }
    return playerTotal;
}

function displayPlayerTotal() {
    playerTotalEl.innerHTML = `Total $`;
    let totalPTag = document.createElement('p');
    let appTotal = document.createTextNode(`${playerTotal}`);
    totalPTag.appendChild(appTotal);
    appTotal.className = 'displaNums';
    playerTotalEl.appendChild(appTotal);
}

// function clearBoard(outsideId, insideId){
//     document.getElementById(outsideId).removeChild(outChip);
//     document.getElementById(insideId).removeChild(chip);
//     //console.log(insideId, outsideId)
// }

function render(){
    getWinningNumber();
    determineInsideWins();
    determineOutsideWins();
    displayPreviousWinningNums();
    displayPlayerTotal();
    
    //setTimeout(clearBoard, 15000);
}












//check computer if it wants to start in dark mode
// function checkUserColorSchemePreference() {
//     if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
//       colorScheme.changeColorScheme()
//     }
//   }