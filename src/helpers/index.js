function randomIdGenerator() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

function randomColorGenerator() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function objectProportion(elements = [], leftSide = true) {
  return elements.reduce((total, current) => {
    const left = leftSide ? 50 - current.left : current.left;

    total += current.weight * left;
    return total;
  }, 0);
}

function LightenDarkenColor(col, amt) {
  let usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }
  let num = parseInt(col, 16);
  let r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  let b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  let g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

export const helpers = {
  randomIdGenerator,
  randomColorGenerator,
  randomNumberGenerator,
  LightenDarkenColor,
  objectProportion,
};
