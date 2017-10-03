const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
};

export default formatTime;
