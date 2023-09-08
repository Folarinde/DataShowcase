const currentDate = new Date();
const currentDayOfTheWeek = currentDate.toLocaleDateString('en-US', {
  weekday: 'long',
});
const currentTime = currentDate.toLocaleTimeString('en-US', { hour12: false });
const currentUTCTime = currentTime + ':' + currentDate.getUTCMilliseconds();

document.getElementById('current-day').innerHTML = currentDayOfTheWeek;
document.getElementById('current-time').innerHTML = currentUTCTime;
