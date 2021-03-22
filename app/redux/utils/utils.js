export const formatSecondsToHour = (countDownDate) => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    return '00:00';
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return `${minutes}:${seconds}`;
};
