const currentDate = new Date();
const currentDayOfTheWeek = currentDate.toLocaleDateString('en-US', {
  weekday: 'long',
});
const currentUTCTime = currentDate.getTime();

document.getElementById('current-day').innerHTML = currentDayOfTheWeek;
document.getElementById('current-time').innerHTML = currentUTCTime;
