export default function getRandomHexColor() {
    // Generate a random number between 0 and 16777215 (0xFFFFFF in hex)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Ensure the hex string is always 6 characters by padding with 0s if necessary
    return `#${randomColor.padStart(6, '0')}`;
  }