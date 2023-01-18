const timers = process.argv
  .slice(2)
  .filter(time => !isNaN(time))
  .filter(time => time > 0)
  .map(time => time * 1000);

timers.forEach((time) => {
  setTimeout(() => {
    console.log((time / 1000),", Seconds");
    process.stdout.write('\x07');
  },time);
});