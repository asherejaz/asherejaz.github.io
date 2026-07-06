const menubtn = document.getElementById('menubtn');
const nav = document.getElementById('nav')
const closebtn = document.getElementById('closebtn')

menubtn.onclick = function () {
    console.log("opened");
    nav.classList.add('show');
    menubtn.classList.add('hide');
    closebtn.classList.add('show');
}
closebtn.onclick = function () {
    console.log('closed');
    nav.classList.remove('show');
    menubtn.classList.remove('hide');
    closebtn.classList.remove('show');
}

var typed = new Typed('#h1', {
    strings: [
        'Welcome',
        'Made By Asher',
        'AsherGamer',
    ],
    loop: true,
    backSpeed: 80,
    typeSpeed: 80,
    backDelay: 2000,
})