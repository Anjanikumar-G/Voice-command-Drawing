 let x = 0;
let y = 0;
let draw_circle = "";
let draw_rect = "";
let draw_triangle = "";
let draw_square = "";
let draw_parallelogram = "";
let draw_star = "";
let draw_pentagon = "";
let draw_octagon = "";
let draw_hexagon = "";
let draw_cube = "";
let draw_cone = "";

const recognition = new window.webkitSpeechRecognition();

function start() {
  document.getElementById("status").innerHTML =
    "System is listening, please speak...";
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);
  const content = event.results[0][0].transcript.toLowerCase();
  document.getElementById("status").innerHTML =
    "The speech has been recognized as: " + content;

  x = Math.floor(Math.random() * 900);
  y = Math.floor(Math.random() * 600);

  if (content === "circle") {
    document.getElementById("status").innerHTML = "Started drawing circle";
    draw_circle = "set";
  } else if (content === "rectangle") {
    document.getElementById("status").innerHTML = "Started drawing rectangle";
    draw_rect = "set";
  } else if (content === "triangle") {
    document.getElementById("status").innerHTML = "Started drawing triangle";
    draw_triangle = "set";
  } else if (content === "square") {
    document.getElementById("status").innerHTML = "Started drawing square";
    draw_square = "set";
  } else if (content === "parallelogram") {
    document.getElementById("status").innerHTML =
      "Started drawing parallelogram";
    draw_parallelogram = "set";
  } else if (content === "star") {
    document.getElementById("status").innerHTML = "Started drawing star";
    draw_star = "set";
  } else if (content === "pentagon") {
    document.getElementById("status").innerHTML = "Started drawing pentagon";
    draw_pentagon = "set";
  } else if (content === "hexagon") {
    document.getElementById("status").innerHTML = "Started drawing hexagon";
    draw_hexagon = "set";
  } else if (content === "octagon") {
    document.getElementById("status").innerHTML = "Started drawing octagon";
    draw_octagon = "set";
  } else if (content === "cube") {
    document.getElementById("status").innerHTML = "Started drawing cube";
    draw_cube = "set";
  } else if (content === "cone") {
    document.getElementById("status").innerHTML = "Started drawing cone";
    draw_cone = "set";
  }
};

function setup() {
  createCanvas(900, 600, WEBGL); // Enable WEBGL for 3D rendering
}

function draw() {
  background(255); // Clear canvas

  if (draw_circle === "set") {
    const radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn.";
    draw_circle = "";
  }

  if (draw_rect === "set") {
    rect(x, y, 100, 50);
    document.getElementById("status").innerHTML = "Rectangle is drawn.";
    draw_rect = "";
  }

  if (draw_triangle === "set") {
    triangle(x, y, x + 50, y - 100, x + 100, y);
    document.getElementById("status").innerHTML = "Triangle is drawn.";
    draw_triangle = "";
  }

  if (draw_square === "set") {
    rect(x, y, 100, 100);
    document.getElementById("status").innerHTML = "Square is drawn.";
    draw_square = "";
  }

  if (draw_parallelogram === "set") {
    quad(x, y, x + 150, y, x + 100, y + 100, x - 50, y + 100);
    document.getElementById("status").innerHTML = "Parallelogram is drawn.";
    draw_parallelogram = "";
  }

  if (draw_star === "set") {
    drawStar(x, y, 5, 50, 25);
    document.getElementById("status").innerHTML = "Star is drawn.";
    draw_star = "";
  }

  if (draw_pentagon === "set") {
    drawPolygon(x, y, 5, 50);
    document.getElementById("status").innerHTML = "Pentagon is drawn.";
    draw_pentagon = "";
  }

  if (draw_hexagon === "set") {
    drawPolygon(x, y, 6, 50);
    document.getElementById("status").innerHTML = "Hexagon is drawn.";
    draw_hexagon = "";
  }

  if (draw_octagon === "set") {
    drawPolygon(x, y, 8, 50);
    document.getElementById("status").innerHTML = "Octagon is drawn.";
    draw_octagon = "";
  }

  if (draw_cube === "set") {
    drawCube(x, y, 50);
    document.getElementById("status").innerHTML = "Cube is drawn.";
    draw_cube = "";
  }

  if (draw_cone === "set") {
    drawCone(x, y, 50, 100);
    document.getElementById("status").innerHTML = "Cone is drawn.";
    draw_cone = "";
  }
}

function drawStar(x, y, npoints, radius1, radius2) {
  // Implementation for drawing a star
}

function drawPolygon(x, y, npoints, radius) {
  // Implementation for drawing polygons
}

function drawCube(x, y, size) {
  push();
  translate(x - width / 2, y - height / 2);
  box(size);
  pop();
}

function drawCone(x, y, radius, height) {
  push();
  translate(x - width / 2, y - height / 2);
  cone(radius, height);
  pop();
}
