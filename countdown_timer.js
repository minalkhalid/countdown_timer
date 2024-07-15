import { differenceInSeconds } from "date-fns";
//function for count down second
function* countdownTimer(second) {
    while (second > 0) {
        yield second;
        second--;
    }
}
//counter inilization
let timerIterator = countdownTimer(10);
// function to create a count down timer 
function displayCountdown() {
    let result = timerIterator.next();
    if (!result.done) {
        // current date and timer calls
        const now = new Date();
        // calculate minutes in time
        const countdownTime = new Date(now.getTime() + result.value * 1000);
        // calculate remaining seconds in time
        const remainingSeconds = differenceInSeconds(countdownTime, now);
        console.log(`Ramining Seconds: ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000); // 1 second is equal to 1000ms
    }
    else {
        console.log("Countdown Complete!");
    }
}
displayCountdown();
