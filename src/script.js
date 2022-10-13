const daysLeft = document.querySelector(".timer__time-left-days");
const hrsLeft = document.querySelector(".timer__time-left-hrs");
const minsLeft = document.querySelector(".timer__time-left-mins");
const secsLeft = document.querySelector(".timer__time-left-secs");

const launchCountDownTimer = (countDownTime) => {
  const tick = () => {
    // * To find seconds to days,First find how many hours in the given second,
    // * then divide it by 24 to get how many days in the given seconds.
    // * 1) A Hours consists of 3600seconds, so to convert secs to hrs, divide secs by 3600 to get hrs
    // *    Let's say for eg, countDownTime = 86400, now to get hrs out of this, do 86400/3600 to 24hrs
    // * 2) A Day consists of 24hrs, so to get how many days are there in a given hours, divide hours/24
    // *    24hrs/24 = 1Day.

    let days = String(Math.trunc(countDownTime / 3600 / 24)).padStart(2, 0);
    daysLeft.textContent = days;

    // * To find hours from seconds, let's say for eg, the countDownTime is 172799, the formula is,
    // * 1) To how many hours in 172799 seconds, divide 86,599secs by 3600(secs):172799/3600, how this gives hrs?
    // *    1hr consists of 3600secs, so to get how many hours available in a given seconds, you can simply divide by 3600
    // * 2) The answer from first operation is 47hrs(truncated value), but you cannot apply this value, cause hours needs to be
    // *    to start from 23 till 0, to get this, use the remainder operator with the hours value:
    // *    47 % 24, the quotient is 1, the remainder is 24, so 1 DAY 23 HRS

    let hours = String(Math.trunc((countDownTime / 3600) % 24)).padStart(2, 0);
    hrsLeft.textContent = hours;

    // * To find minutes
    // * Let's say For example, the countDownTime is 3599(consider it as secs),
    // * Out of 3599secs, divide it by 60 to get "How many minutes are there in 3600 secs?" 3599/60 = 119mins (truncated value)
    // * But the minutes should start from 59, not 119 right? to archieve this, Do below.
    // * Now, out of 119mins, to find how many hours and minutes are in 119? use remainder operator 119 % 60 = 59
    // * Try to divide as in oldschool days, if you done it in a paper, the quotient will be 1(which is 1hr)
    // * the remainder of this operation will yeild 59 (which is 59mins).

    let minutes = String(Math.trunc((countDownTime / 60) % 60)).padStart(2, 0);
    minsLeft.textContent = minutes;

    // * To find seconds
    // * 1 min = 60 secs, so inorder to find remaining seconds, use the remainder
    // * operator with the function parameter which ofcourse should be passed in seconds,
    // * for eg, if countDownTime is 100secs, 100 % 60 = 40secs, 1min 40secs
    // * (this 40 secs should be added to the element that represents secs)
    let seconds = String(countDownTime % 60).padStart(2, 0);
    secsLeft.textContent = seconds;

    // * The reason, this condition whether countDownTime === 0 is being checked before
    // * decrementing the variable is because, once countDownTime reaches 1, if we decrement
    // * it before the equalto condition, now the variable countDownTime will become 0, it will pass the condtion,
    // * the setInterval will be stoped, then the textContent will still be set to 01. To avoid this situation,
    // * the decrementing of the variable countDownTime is declared after the condition.
    if (countDownTime === 0) {
      clearInterval(timer);
    }

    countDownTime--;
  };

  tick();
  const timer = setInterval(tick, 1000);
};

launchCountDownTimer(777600);
