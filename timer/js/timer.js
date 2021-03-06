class CountdownTimer {
  constructor(paramObj) {
    const { selector, targetDate } = paramObj;
    this.timer = document.querySelector(selector);
    this.time = targetDate - new Date();
    this.refs = {
      days: this.timer.querySelector('span[data-value="days"]'),
      hours: this.timer.querySelector('span[data-value="hours"]'),
      mins: this.timer.querySelector('span[data-value="mins"]'),
      secs: this.timer.querySelector('span[data-value="secs"]'),
    };
    this.startTimer();
  }

  startTimer() {
    this.updateTimerData();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    this.time = this.time - 1000;
    this.updateTimerData();
  }

  updateTimerData() {
    const { time } = this;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
