// Ref: https://gist.github.com/basarat/4670200

//given "0-360" returns the nearest cardinal direction "N/NE/E/SE/S/SW/W/NW/N"
export const getCardinal = (angle) => {
  let directions = 8;
  
  let degree = 360 / directions;
  angle = angle + degree/2;

  if (angle >= 0 * degree && angle < 1 * degree)
      return "N";
  if (angle >= 1 * degree && angle < 2 * degree)
      return "NE";
  if (angle >= 2 * degree && angle < 3 * degree)
      return "E";
  if (angle >= 3 * degree && angle < 4 * degree)
      return "SE";
  if (angle >= 4 * degree && angle < 5 * degree)
      return "S";
  if (angle >= 5 * degree && angle < 6 * degree)
      return "SW";
  if (angle >= 6 * degree && angle < 7 * degree)
      return "W";
  if (angle >= 7 * degree && angle < 8 * degree)
      return "NW";
  return "N";
}
