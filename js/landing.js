const hankEl = document.getElementById('hank');
const dekeEl = document.getElementById('deke');
const genevaEl = document.getElementById('geneva');
const alexEl = document.getElementById('alex');
const closeWarningEl = document.getElementById('closeWarning');

window.addEventListener('load', openWarning);
closeWarningEl.addEventListener('click', closeWarning);
hankEl.addEventListener('click', );
dekeEl.addEventListener('click', );
genevaEl.addEventListener('click', );
alexEl.addEventListener('click', );


function openWarning(){
    document.getElementById('overlay').style.dispaly = 'block';
}
function closeWarning(){
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
}
function sayHello(){

}


