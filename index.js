// changes terminal color
import kuler from 'kuler';
// random hex color generator
import { generate } from 'random-hex';
// this converts a color to a random variation of itself
import randomized from 'randomized-colors';
// this converts rgb to hex
import rgb2hex from 'rgb2hex';
// makes color darker or lighter
import shader from 'shader';

// this logs a random hex value
const randomHex = generate();
const hash1 = `################################
################################
################################
####                        ####
####       `;
const hash2 = `          ####
####                        ####
################################
################################
################################`;

// stores user input in a variable
const colorInput = process.argv[2];
const hueInput = process.argv[3];

// this converts a color name input to a hue variation
const hue = colorInput ? randomized(colorInput, 0.3) : 'rgb(0, 0, 0)';

// this converts the rgb value of the hue variation to hex
const hex = rgb2hex(hue).hex;

// this creates darker or lighter instances of a color
const darkerShade = shader(hex, -0.5);
const lighterShade = shader(hex, 0.5);

let color;
if (colorInput && !hueInput) {
  color = hex;
} else if (colorInput && hueInput) {
  color = hueInput === 'light' ? lighterShade : darkerShade;
} else {
  color = randomHex;
}

console.log(kuler(`${hash1}${color}${hash2}`, color));
