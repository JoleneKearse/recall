export class Timer {
  public minutes: number;
  public seconds: number;
  private intervalId: number | undefined;

  constructor() {
    this.minutes = 0;
    this.seconds = 0;
    this.intervalId = undefined;

  startTimer() {
    setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.minutes++;
        this.seconds = 0;
      }
    }, 1000);

  pauseTimer() {
    clearInterval();
  }
}
  }