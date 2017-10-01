export const formatTime = (timestamp) => {
  let date = new Date(timestamp * 1000);
  let hours = `0${date.getHours()}`.slice(-2);
  let minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
}
