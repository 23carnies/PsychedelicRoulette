/* Warning Overlay */ 
document.getElementById('closeWarning').addEventListener('click', closeWarning);
window.addEventListener('load', openWarning);
function openWarning(){
    document.getElementById('overlay').style.display = 'flex';
}
function closeWarning(){
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('mainContent').style.display = 'flex';
}

/* Audio */
const hank = new Audio('./audio/hank.mp3');
const deke = new Audio('./audio/deke.mp3');
const geneva = new Audio('./audio/geneva.mp3');
const alex = new Audio('./audio/alexMedium.mp3');


/* Choose A Persona */
document.getElementById('hank').addEventListener('click', () => hank.play());
document.getElementById('deke').addEventListener('click', () => deke.play());
document.getElementById('geneva').addEventListener('click', () => geneva.play());
document.getElementById('alex').addEventListener('click', () => alex.play());
