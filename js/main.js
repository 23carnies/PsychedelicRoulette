/*-------------Constants-------------*/
const groupBets = {
    sq37El: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    sq38El: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    sq39El: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    rec45Org: [2, 4, 6, 8, 10, 11, 13, 14, 15, 17, 20, 22, 23, 24, 26, 28, 29, 31, 33, 35],
    rec46Grn: [1, 3, 5, 7, 9, 12, 16, 18, 19, 21, 25, 27, 30, 32, 34, 36]
}
    const markChip = 'W';



/*-------------Audio-------------*/
const big10k = new Audio('./audio/bigWinner10k.mp3');
const color200 = new Audio('./audio/colorUp200.mp3');
const color500 = new Audio('./audio/colorUp500.mp3');
const color1000 = new Audio('./audio/colorUp1000.mp3');
const goodLuck = new Audio('./audio/goodLuckEverybody.mp3');
const handsOff = new Audio('./audio/handOffTable.mp3');
const headOff = new Audio('./audio/headOffTable.mp3');
const placeBets = new Audio('./audio/placeYourBets.mp3');
const round = new Audio('./audio/roundAndRound.mp3');
const winnerChicken = new Audio('./audio/winnerChickenDinner.mp3');
const ball = new Audio('./audio/ball.mp3');
const chips = new Audio('./audio/chips.mp3');

/*-------------State Variables-------------*/
let winner, playerTotal, playerInsideBets = [], playerOutsideBets = [], previousNums = [], displayBets = [];
let betChip = 50;
let timerIdRave;

/*-------------Cached Refernce Elements-------------*/
const insideBetsBox = document.getElementById('insideBets');
const outsideBetsBox = document.getElementById('outsideBets');
const playerTotalEl = document.getElementById('total');
const spinEl = document.getElementById('spin');
const prevNumsEl = document.getElementById('prevNumbers');
const currentBetEl = document.getElementById('currentBets');
const winningNumDivEl = document.getElementById('winningNumDiv');
const bodyEl = document.querySelector('body');
const divEl = document.querySelectorAll('div');

/*-------------Event Listeners-------------*/
insideBetsBox.addEventListener('click', handleInsideBetsClick);
outsideBetsBox.addEventListener('click', handleOutsideBetsClick);
spinEl.addEventListener('click', spinWheel);

/*-------------Functions-------------*/
init();

function restart() {
    if (playerTotal === 0) {
        headOff.play();
        setTimeout(() => {init()}, 5000);
    }
}

function init() {
    playerTotal = 1000;
    displayPlayerTotal();
    playerNumber = [];
    clearBoard();
    displayBets = [];
    winningNumDivEl.innerHTML = '';

}

/*-------------Handle Clicks For Bets-------------*/
function handleInsideBetsClick(e) {
    let squareIndex = parseInt(e.target.id.replace('sq', ''));
    playerInsideBets.push(squareIndex);
    placeInsideBetChips(e);
    displayCurrentBets();
    return squareIndex;
}
function handleOutsideBetsClick(e) {
    let recIndex = parseInt(e.target.id.replace('rec', ''));
    playerOutsideBets.push(recIndex);
    placeOustideBetChips(e);
    displayCurrentBets();
    return recIndex;
}

/*-------------Add Chips to Board-------------*/
function placeInsideBetChips(e) {
    while (playerTotal >= 50) {
        insideId = e.target.getAttribute('id');
        let chip = document.createElement('p');
        let chipText = document.createTextNode(`${betChip}`);
        chip.appendChild(chipText);
        chip.className = 'chipStyle'
        document.getElementById(insideId).appendChild(chip);
        displayBets.push(insideId);
        playerTotal -= 50;
        displayPlayerTotal();
        chips.play();
        return (insideId);
    }
}

function placeOustideBetChips(e) {
    while (playerTotal >= 50) {
        outsideId = e.target.getAttribute('id');
        let outsideIdEl = document.getElementById(outsideId);
        let outChip = document.createElement('p');
        let outChipText = document.createTextNode(`${betChip}`);
        outChip.appendChild(outChipText);
        outChip.className = 'chipStyle';
        outsideIdEl.appendChild(outChip);
        playerTotal -= 50;
        displayPlayerTotal();
        chips.play();
        return (outsideId);
    }
}

function spinWheel() {
    spinEl.disabled = true;
    ball.play();
    setTimeout(()=> {render()}, 2000);
}

function clearBoard() {
    let chips = document.querySelectorAll('p')
    setInterval(function () {
        //     chips.style.display = (chips.style.display == 'chipStyle' ? '' : '');
        // }, 1500);
        chips.forEach((chip) => {
            chip.classList.add('animate__animated', 'animate__flash', setTimeout(()=> {chip.className = 'clear'}, 1200));
        })
    })
    displayBets = [];
    displayCurrentBets();
    winningNumDivEl.innerHTML = '';
    returnFromRave();
    playerInsideBets = [];
    playerOutsideBets = [];
    clearInterval(timerIdRave), 5000;
    //setTimeout(()=>{placeBets.play()}, 3000);
}

function displayCurrentBets() {
    let newdisplayBets = displayBets.map((str) => str.replace(/\D+/g, ''));
    currentBetEl.innerHTML = `Current Bets</br>`;
    let displayBetsDiv = document.createElement('p');
    let betsDisplay = document.createTextNode(`${newdisplayBets}`);
    displayBetsDiv.appendChild(betsDisplay);
    betsDisplay.className = 'displayNums';
    currentBetEl.appendChild(betsDisplay);
    if (displayBets.length > 10){
        for (let i=0;i<displayBets.length;i++){
            if (i === 10) {
                let br = `{</br>}`
                displayBets.push(br)
            }
        }
    }
}


function markWinningNumber() {
    let mark = `sq${winner}`;
    let squareMarkEl = document.getElementById(mark);
    let markSq = document.createElement('p')
    let markSqText = document.createTextNode(`${markChip}`)
    markSq.appendChild(markSqText);
    markSq.className = 'winMarkerStyle';
    squareMarkEl.appendChild(markSq);
}

/*-------------Play Sounds-------------*/
function playSounds() {
    if (playerInsideBets.includes(winner)) {
        setTimeout(() => {winnerChicken.play()}, 1000);
        timerIdRave = setInterval(raveMode, 150);
    } else if (playerTotal > 10000 && playerTotal < 12000) {
        setTimeout(() => { big10k.play() }, 4000);
    } else if (playerTotal > 1200 && playerTotal < 2000) {
        setTimeout(() => { color200.play() }, 4000);
    } else if (playerTotal > 2000 && playerTotal < 6000) {
        setTimeout(() => { color500.play() }, 4000);
    }
}

/*-------------Display Info Functions-------------*/
function render() {
    setTimeout(()=> {spinEl.disabled = false}, 3000);
    displayCurrentBets();
    getWinningNumber();
    markWinningNumber();
    displayPreviousWinningNums();
    determineInsideWins();
    determineOutsideWins();
    displayPlayerTotal();
    shiftFromPrevWinners();
    playSounds();
    restart();
    setTimeout(clearBoard, 4000);

}

function getWinningNumber() {
    winner = (Math.floor(Math.random() * 37));
    previousNums.push(winner);
    displayWinningNum();
    return winner;
}

function displayWinningNum() {
    winningNumDivEl.innerHTML = '';
    let winningNum = document.createTextNode(`${winner}`);
    winningNumDivEl.appendChild(winningNum);
    winningNumDivEl.className = 'winningNumber', 'animate__bounceInDown';
    document.getElementById('displayBox').appendChild(winningNumDivEl)
}

function displayPreviousWinningNums() {
    prevNumsEl.innerHTML = `Previous Winners </br>`;
    let prevNumPTag = document.createElement('div');
    let prevNumsDisp = document.createTextNode(`${previousNums}`);
    prevNumPTag.appendChild(prevNumsDisp);
    prevNumsDisp.className = 'displayNums';
    prevNumsEl.appendChild(prevNumsDisp);
}

function shiftFromPrevWinners() {
    if (previousNums.length === 11) {
        previousNums.shift();
    }
}

function displayPlayerTotal() {
    playerTotalEl.innerHTML = `Total $`;
    let totalPTag = document.createElement('p');
    let appTotal = document.createTextNode(`${playerTotal}`);
    totalPTag.appendChild(appTotal);
    appTotal.className = 'displayNums';
    playerTotalEl.appendChild(appTotal);
}

/*-------------Payouts-------------*/
function determineInsideWins() {
    if (playerInsideBets.includes(winner)) {
        playerTotal += (36 * parseInt(betChip));
    }
    if (playerInsideBets.includes(37) && groupBets.sq37El.includes(winner)) {
        playerTotal += (3 * parseInt(betChip));
    }
    if (playerInsideBets.includes(38) && groupBets.sq38El.includes(winner)) {
        playerTotal += (3 * parseInt(betChip));
    }
    if (playerInsideBets.includes(39) && groupBets.sq39El.includes(winner)) {
        playerTotal += (3 * parseInt(betChip));
    }
    return playerTotal;
}

function determineOutsideWins(winner) {
    if (playerOutsideBets.includes(40) && (winner >= 1 && winner <= 12)) {
        playerTotal += (3 * parseInt(betChip));
    }
    if (playerOutsideBets.includes(41) && (winner >= 13 && winner <= 24)) {
        playerTotal += (3 * parseInt(betChip));
    }
    if (playerOutsideBets.includes(42) && (winner >= 25 && winner <= 36)) {
        playerTotal += (3 * parseInt(betChip));
    }
    if (playerOutsideBets.includes(43) && (winner >= 1 && winner <= 18)) {
        playerTotal += (2 * parseInt(betChip));
    }
    if (playerOutsideBets.includes(44) && winner % 2 === 0) {
        playerTotal += (2 * parseInt(betChip));
    }
    if (playerOutsideBets.includes(45) && groupBets.rec45Org.includes(winner)) {
        playerTotal += (2 * parseInt(betChip));
    }
    if (playerOutsideBets.includes(46) && groupBets.rec46Grn.includes(winner)) {
        playerTotal += (2 * parseInt(betChip));
    }
    if (playerOutsideBets.includes(47) && winner % 2 !== 0) {
        playerTotal += (2 * parseInt(betChip));
    }
    if (playerOutsideBets.includes(48) && (winner >= 19 && winner <= 36)) {
        playerTotal += (2 * parseInt(betChip));
    }
    return playerTotal;
}

/*-------------Rave Mode-------------*/
function raveMode(){
    const elements = [divEl, bodyEl, insideBetsBox, outsideBetsBox, playerTotalEl, prevNumsEl, currentBetEl, winningNumDivEl];
    for (let i=elements.length -1;i>=0;i--){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
            elements[i].style.backgroundColor = '#'+r.toString(16)+g.toString(16)+b.toString(16);
        let r2 = Math.floor(Math.random()*256);
        let g2 = Math.floor(Math.random()*256);
        let b2 = Math.floor(Math.random()*256);
            elements[i].style.backgroundColor = '#'+r2.toString(16)+g2.toString(16)+b2.toString(16);
    }
}

function returnFromRave(){
    winningNumDivEl.style.backgroundColor = 'winningNumber';
    bodyEl.style.backgroundColor =  'rgb(61, 58, 58)';
    insideBetsBox.style.backgroundColor = 'transparent';
    outsideBetsBox.style.backgroundColor = 'transparent';
}

