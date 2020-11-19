const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const xMas = new Date("2020-12-25 00:00:00");
  const now = new Date();
  const distance = xMas - now;
  

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //% = remainder operator/ 나누고 난 나머지를 return

  clockTitle.innerText = `D-${days < 10 ? `0${days}` : days} ${
    hours < 10 ? `0${hours}` : hours
  } : ${minutes < 10 ? `0${minutes}` : minutes} : ${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
