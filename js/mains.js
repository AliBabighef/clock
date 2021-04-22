
// document.querySelector("body").innerHTML = location.href
let currentDateNight = new Date(),
    currentDateNiStr = currentDateNight.toString(),
    currentDateMorn = currentDateNight.toLocaleTimeString();
let currentCustomHour = parseInt(currentDateMorn.slice(0, 2));
let currentHour = parseInt(currentDateMorn[0]);
let currentMin = currentDateNight.getMinutes();
let currentSnd = currentDateNight.getSeconds();
let statClock = currentDateMorn.slice(-2);
let glableTimeLine = currentDateNiStr.slice(-14);

console.log(currentDateMorn)
console.log(currentDateNiStr)
console.log(currentDateMorn.slice(2, 3))
console.log(currentDateMorn.slice(2, 5))

let hourEll = document.querySelector(".clock .num.hour")
let minEll = document.querySelector(".clock .num.min")
let sndEll = document.querySelector(".clock .num.scn")


let startSnd = 0;
let numOfHour = 1;
let numOfMin = 1;


let savingMin = 6;
let savingHou = 6;

let placeHour = (currentHour * 30);
let placeMin = (currentMin * 6)

function everyTurning(ell) {

    ell.style.transform = `rotateZ(${(savingMin + placeMin)}deg)`;
    // custom min 
    if (currentMin == 00) {

        hourEll.style.transform = `rotateZ(${placeHour}deg)`;
        console.log("is equal 0" + currentMin)

    }

}

function everySnd() {

    let timing = setInterval(function () {

        sndEll.style.transform = `rotateZ(${startSnd}deg)`

        if (startSnd == 360) {

            everyTurning(minEll)
            writing(document.querySelector(".clock span"))
            startSnd = 0;
            savingMin = savingMin + 6;

        }


        startSnd++

    }, 166.75)
    // 166.75

}
hourEll.style.transform = `rotateZ(${placeHour}deg)`
minEll.style.transform = `rotateZ(${placeMin}deg)`
everySnd()

function customHours(h) {

    "use strict";
    if (h == 10) {

        currentHour = currentHour + "0";
        placeHour = (parseInt(currentHour) * 30)
        hourEll.style.transform = `rotateZ(${placeHour}deg)`

    } else if (h == 11) {

        currentHour = currentHour + "1";
        placeHour = (parseInt(currentHour) * 30)
        hourEll.style.transform = `rotateZ(${placeHour}deg)`


    } else if (h == 12) {

        currentHour = currentHour + "2";
        placeHour = (parseInt(currentHour) * 30)
        hourEll.style.transform = `rotateZ(${placeHour}deg)`

    } else { 


        hourEll.style.transform = `rotateZ(${placeHour}deg)`
        console.log("h lessThan 10 11 12")

    }

}
customHours(currentCustomHour)

console.log(currentMin)

function writing(ell) {

    ell.innerHTML = statClock + " " + glableTimeLine;

}

writing(document.querySelector(".clock span"))