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
let markChip = 'W';



/*-------------Cached Refernce Elements-------------*/
const insideBetsBox = document.getElementById('insideBets');
const outsideBetsBox = document.getElementById('outsideBets');
const playerTotalEl = document.getElementById('total');
const spinEl = document.getElementById('spin');
const prevNumsEl = document.getElementById('prevNumbers');
const currentBetEl = document.getElementById('currentBets');
const winningNumDivEl = document.getElementById('winningNumDiv');




/*-------------Event Listeners-------------*/
insideBetsBox.addEventListener('click', handleInsideBetsClick);
outsideBetsBox.addEventListener('click', handleOutsideBetsClick);
spinEl.addEventListener('click', render);
//spinEl.addEventListener('click', spinWheel);


/*-------------Functions-------------*/
init();

function init(){
    playerTotal = 1000;
    playerNumber = [];
    //clear board
    displayBets = [];
    //clear winning number div
    //clear prev winners
    winningNumDivEl.innerHTML = '';
    displayPlayerTotal();
}

/*-------------Handle Clicks For Bets-------------*/
function handleInsideBetsClick(e){
    let squareIndex = parseInt(e.target.id.replace('sq', ''));
    playerInsideBets.push(squareIndex);
    placeInsideBetChips(e);
    displayCurrentBets();
    return squareIndex;
}
function handleOutsideBetsClick(e){
    let recIndex = parseInt(e.target.id.replace('rec', ''));
    playerOutsideBets.push(recIndex);
    placeOustideBetChips(e);
    displayCurrentBets();
    return recIndex;
}

/*-------------Add Chips to Board-------------*/

function placeInsideBetChips(e){
    insideId = e.target.getAttribute('id');
    let insideIdEl = document.getElementById(insideId);
    insideIdEl.innerHTML = '';
    let chip = document.createElement('p');
    let chipText = document.createTextNode(`${betChip}`);
    chip.appendChild(chipText);
    chip.className = 'chipStyle'
    document.getElementById(insideId).appendChild(chip);
    displayBets.push(insideId);
    playerTotal -= 50;
    return (insideId);
}

function placeOustideBetChips(e){
    outsideId = e.target.getAttribute('id');
    let outsideIdEl = document.getElementById(outsideId);
    // outsideIdEl.innerHTML = ''
    let outChip = document.createElement('p');
    let outChipText = document.createTextNode(`${betChip}`);
    outChip.appendChild(outChipText);
    outChip.className = 'chipStyle';
    outsideIdEl.appendChild(outChip);
    //displayBets.push(outsideId);
    playerTotal -= 50;
    return (outsideId);
}
//in 1-18, 19-36, orange, maybe green, if there is a child, change fontsize down


function clearBoard(){
    let chips = document.querySelectorAll('p')
    chips.forEach((chip)=> {
        chip.className = 'clear';
        console.log(chip)
    }) 
}    






                    function displayCurrentBets(){
                        let newdisplayBets = displayBets.map((str) => str.replace(/\D+/g, ''));
                        currentBetEl.innerHTML = `Current Bets</br>`;
                        let displayBetsDiv = document.createElement('p');
                        let betsDisplay = document.createTextNode(`${newdisplayBets}`);
                        displayBetsDiv.appendChild(betsDisplay);
                        betsDisplay.className = 'displayNums';
                        currentBetEl.appendChild(betsDisplay);
                        //console.log(displayBets)
                    }

function onBet(){
    //for every chip that is put out, playerTotal should decrease by 50
}

function markWinningNumber(){
    let mark = `sq${winner}`;
    let squareMarkEl = document.getElementById(mark);
    let markSq = document.createElement('p')
    let markSqText = document.createTextNode(`${markChip}`)
    markSq.appendChild(markSqText);
    markSq.className = 'winMarkerStyle';
    squareMarkEl.appendChild(markSq);
    console.log(mark)
    
}

/*-------------Wheel Spin-------------*/
function spinWheel(){

}

/*-------------Display Info Functions-------------*/
function render(){
    getWinningNumber();
    determineInsideWins();
    determineOutsideWins();
    displayPreviousWinningNums();
    displayPlayerTotal();
    shiftFromPrevWinners();
    displayCurrentBets();
    markWinningNumber();
    //clearBoard();
    setTimeout(clearBoard, 3000);
}





    
    


function getWinningNumber(){
    winner = (Math.floor(Math.random()*37));
    displayWinningNum();
    previousNums.push(winner);
    return winner;
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

function shiftFromPrevWinners(){
    if (previousNums.length === 11){
        previousNums.shift();
    }
}

function displayPlayerTotal() {
    playerTotalEl.innerHTML = `Total $`;
    let totalPTag = document.createElement('p');
    let appTotal = document.createTextNode(`${playerTotal}`);
    totalPTag.appendChild(appTotal);
    appTotal.className = 'displaNums';
    playerTotalEl.appendChild(appTotal);
}

/*-------------Payouts-------------*/
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


















//check computer if it wants to start in dark mode
// function checkUserColorSchemePreference() {
//     if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
//       colorScheme.changeColorScheme()
//     }
//   }