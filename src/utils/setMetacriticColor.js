export default function setMetacriticColor(num) {

  let color = 'metacritic-';
  if (num >= 75) {
    color += 'green';
  } else if (num >= 50) {
    color += 'yellow';
  } else if (num >= 25) {
    color += 'blue';
  } else {
    color += 'red';
  }

  return color;
}
