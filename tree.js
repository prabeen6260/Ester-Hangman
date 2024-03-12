function tree() {
  push();
  fill(139, 69, 19); // Brown color for the trunk
  rect(width - 250, height / 2 - 50, 20, 400);
  strokeWeight(10);
  stroke(139,69,19);
  line(width-230,height/2+160,width-185,height/2+90);
  pop();
  push();
  // Draw leaves
  fill(34, 139, 34); // Green color for leaves
  
  // Save the current transformation state
  triangle(width - 250, 50, width - 450, 400, width - 10, 400);
  // Rotate only the second triangle
  translate(width - 180, height / 2 + 80);
  rotate(210); // Rotate by 45 degrees
  triangle(-40, -10, 0, 90, 40, -10);
  // Restore the previous transformation state
  pop();

  // Draw other elements (trunk and first triangle)
  
  
}
