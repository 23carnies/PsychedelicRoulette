/*-------------Constants-------------*/



/*-------------State Variables-------------*/
let playerTotal, theBet, previousNums = [];



/*-------------Cached Refernce Elements-------------*/
const insideBetsBox = document.getElementById('insideBets');
const outsideBetsBox = document.getElementById('outsideBets');


/*-------------Event Listeners-------------*/
insideBetsBox.addEventListener('click', handleInsideBetsClick);
outsideBetsBox.addEventListener('click', handleOutsideBetsClick);

/*-------------Functions-------------*/
function handleInsideBetsClick(e){
    let squareIndex =parseInt(e.target.id.replace('sq', ''));
    console.log(squareIndex);
    return squareIndex;
}
function handleOutsideBetsClick(e){

}

function init(){
    playerTotal = 1000;
    //clear board
}

function getWinningNumber() {
    let winner = (Math.floor(Math.random()*37));
}
















//check computer if it wants to start in dark mode
// function checkUserColorSchemePreference() {
//     if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
//       colorScheme.changeColorScheme()
//     }
//   }