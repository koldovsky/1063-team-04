let initialTime = 500 * 24 * 60 * 60;
function startTimer() {
  let daysSpan = document.getElementById('days');
  let hoursSpan = document.getElementById('hours');
  let minutesSpan = document.getElementById('minutes');
  let secondsSpan = document.getElementById('seconds');

  let interval = setInterval(function() {
    if (initialTime <= 0) {
      clearInterval(interval);
      alert('Час вичерпано!');
    } else {
      let days = Math.floor(initialTime / (24 * 60 * 60));
      let hours = Math.floor((initialTime % (24 * 60 * 60)) / (60 * 60));
      let minutes = Math.floor((initialTime % (60 * 60)) / 60);
      let seconds = initialTime % 60;

      days = String(days).padStart(2, '0');
      hours = String(hours).padStart(2, '0');
      minutes = String(minutes).padStart(2, '0');
      seconds = String(seconds).padStart(2, '0');
    
      daysSpan.innerHTML = days;
      hoursSpan.innerHTML = hours;
      minutesSpan.innerHTML = minutes;
      secondsSpan.innerHTML = seconds;

      initialTime--;
    }
  }, 1000);
}

window.onload = startTimer()
