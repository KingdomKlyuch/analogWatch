class Clock {
  constructor() {
    this.hourHand = document.querySelector('.hour-hand');
    this.minuteHand = document.querySelector('.minute-hand');
    this.secondHand = document.querySelector('.second-hand');
  }

  setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    this.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    this.minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    this.hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }
}

const clock = new Clock();

setInterval(() => {
  clock.setDate();
}, 1000);

  