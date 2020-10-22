let wpis = document.querySelector('#wpis');
let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');
let tablica
btn1.addEventListener("click", function () {
wpis.value=""})
btn.addEventListener("click", function () {
    tablica = wpis.value

    newDiv = document.createElement('div');
    newDiv.innerHTML = (`${tablica}`);
    newDiv.setAttribute('class', 'pojemnik');

    btnDone = document.createElement('button');
    btnDone.innerHTML = 'zrobione';
    btnDone.setAttribute('class', 'btn btn-secondary ml-2 float-lg-right');
    newDiv.appendChild(btnDone);

    btnDelte = document.createElement('button');
    btnDelte.innerHTML = 'usuń';
    btnDelte.setAttribute('class', 'btn btn-danger ml-2 float-lg-right');
    newDiv.appendChild(btnDelte);

    document.body.appendChild(newDiv);

    btnDelte.addEventListener('click', (e) => {

        e.target.classList.remove('pojemnik');
        e.target.parentElement.classList.add('usun');
    })
    btnDone.addEventListener('click', (e) => {

        e.target.classList.remove('pojemnik');
        e.target.parentElement.classList.toggle('skresl');
    })

})
//bieżący czas
function getTime() {
    return (new Date()).toLocaleTimeString();
}
document.getElementById('zegar').innerHTML = getTime();
setInterval(function () {
    document.getElementById('zegar').innerHTML = getTime()+'  '+(year + "-" + month + "-" + date);
}, 1000);
//bieżąca data
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
