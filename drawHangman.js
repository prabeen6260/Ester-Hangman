
let drawHangman = () => {
  fill(255);
  const X = width-350;
  if (misses >= 1) {
    line(X, 400, X, 480);
    // Add more lines for additional hangman elements based on misses
    ellipse(X, 480, 80, 80);
  }
  if (misses >= 2) {
    // Body
    line(X, 520, X, 600);
  }
  if (misses >= 3) {
    // Left arm
    line(X, 520, width - 400, 600);
  }
  if (misses >= 4) {
    // Right arm
    line(X, 520, width - 300, 600);
  }
  if (misses >= 5) {
    // Left leg
    line(X, 600, width - 400, 650);
  }
  if (misses >= 6) {
    // Right leg
    line(X, 600, width - 300, 650);
  }
  fill(0);
};
