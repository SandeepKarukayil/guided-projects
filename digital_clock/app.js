//  we need to be able to manipulate hours minutes seconds and ampm

const hourElement = document.querySelector("#hour");
const minuteElement = document.querySelector("#minutes");
const secondElement = document.querySelector("#seconds");
const ampmElement = document.querySelector("#ampm");

//now we have all elements now we can change them dynamically
// create a function to get data from computer

function updateClock() {
  let hours = new Date().getHours(); // get hours from pc
  let minutes = new Date().getMinutes(); // get minutes from pc
  let seconds = new Date().getSeconds(); // get seconds from pc
  let ampm = "AM"; //cant get from computer so we have to think a logic

  if (hours > 12) {
    hours = hours - 12;
    ampm = "PM";
  }
  hours = hours < 10 ? "0" + hours : hours; //to get zero before single dighits

  minutes = minutes < 10 ? "0" + minutes : minutes; //to get zero before single dighits

  seconds = seconds < 10 ? "0" + seconds : seconds; //to get zero before single dighits

  hourElement.innerText = hours; // to manipulate hours

  minuteElement.innerText = minutes; // to manipulate minutes

  secondElement.innerText = seconds; // to manipulate seconds

  ampmElement.innerText = ampm; //to manipulate ampm
  setTimeout(() => {
    updateClock();
  }, 1000); //this will update clock every second
}

updateClock(); // calling the function
