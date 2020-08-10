/*-------------Constants-------------*/



/*-------------State Variables-------------*/
//multiple bets ?! oh geez, how to know which bet is the winning number??
let winner, playerTotal, playerInsideBets = [], playerOutsideBets = [], previousNums = [];
let betChip = 50;
let sq37El = [1,4,7,10,13,16,19,22,25,28,31,34];
let sq38El = [2,5,8,11,14,17,20,23,26,29,32,35];
let sq39El = [3,6,9,12,15,18,21,24,27,30,33,36];
let rec40Frst = [1,2,3,4,5,6,7,8,9,10,11,12];
let rec41Sec = [13,14,15,16,17,18,19,20,21,22,23,24];
let rec42Thrd = [25,26,27,28,29,30,31,32,33,34,35,36];
let rec43Eitn = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
let rec44Evn = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
let rec45Org = [2,4,6,8,10,11,13,14,15,17,20,22,23,24,26,28,29,31,33,35];
let rec46Grn = [1,3,5,7,9,12,16,18,19,21,25,27,30,32,34,36];
let rec47Odd = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
let rec48Thsx = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];


/*-------------Cached Refernce Elements-------------*/
const insideBetsBox = document.getElementById('insideBets');
const outsideBetsBox = document.getElementById('outsideBets');
const playerTotalEl = document.getElementById('total');
const spinEl = document.getElementById('spin');
const prevNumsEl = document.getElementById('prevNumbers');
const currentBetEl = document.getElementById('currentBets')


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

//if second click is on the chip it's an error
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
    //it works up to here
    console.log(winNumDiv)
}

function displayPreviousWinningNums(){
    let prevNums = document.createTextNode(`${previousNums}`);
}

function determineInsideWins() {
    if (playerInsideBets.includes(winner)){
        playerTotal += (35 * betChip);
    }
    return playerTotal;
}

function determineOutsideWins(winner) {

}

function render() {
    getWinningNumber();
    determineInsideWins();
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