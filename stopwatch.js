window.onload = function () {


    let stop = document.getElementById("stop");
    let start = document.getElementById("start");
    let reset = document.getElementById("reset");
    let appendTens = document.getElementById("tens")
    let appendOnes = document.getElementById("ones")
    let appendHundred = document.getElementById("hundred")
    let tens = 00;
    let ones = 00;
    let hundred = 00;
    let Interval;

    start.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10)
    }
    stop.onclick = function () {
        clearInterval(Interval);
    }
    reset.onclick = function () {
        clearInterval(Interval);
        // ones = 00;
        // tens = 00;
        // hundred = 00;
        appendTens.innerHTML = 00;
        appendOnes.innerText = 00;
        appendHundred.innerText = 00;
    }

    function startTimer() {
        ones++
        if (ones <= 9) {
            appendOnes.innerHTML = "0" + ones
        }
        if (ones > 9) {
            appendOnes.innerHTML = ones
        }
        if (ones > 99) {
            tens++
            appendTens.innerHTML = "0" + tens;
            ones = 0;
            appendOnes.innerHTML = "0" + 0;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens >= 60) {
            hundred++
            appendHundred.innerHTML = "0" + hundred;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (hundred > 9) {
            appendHundred.innerHTML = hundred;
        }

    }
}