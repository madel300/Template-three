let otherMenue = document.querySelector("header .container .main-nav li:last-child a");
let megaMenue = document.querySelector("header .container .main-nav li:last-child .other-links");
document.body.childNodes.forEach(element => {
    element.addEventListener("click", function (ele) {
        if (ele.target === otherMenue) {
            megaMenue.classList.toggle("show");
        } else {
            megaMenue.classList.remove("show");
        }
     })
});

let ourSkills = document.querySelector(".our-skills");
let spanBar = document.querySelectorAll(".our-skills .container .skills .skill .bar span")

window.onscroll = function () {
    if (window.scrollY >= ourSkills.offsetTop - 100) {
        spanBar.forEach(function (span) {
            span.style.width = span.dataset.value;
        })
    }
}

let date = new Date("dec 31, 2022");
let counter = setInterval(function () {
    let dateNow = new Date();
    let count = 0;
    while (date < dateNow) {
        let newMo = date.getMonth() + 1;
        date.setMonth(newMo);
        count++
    }
    let dateDiff = date - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000)

    document.querySelector(".days").innerHTML = (days < 10) ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = (hours < 10) ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = (minutes < 10) ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = (seconds < 10) ? `0${seconds}` : seconds;
}, 1000);



