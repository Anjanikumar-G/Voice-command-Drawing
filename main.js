let scene, camera, renderer;

function initThree() {
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}
function drawCube() {
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.set(x, y, 0); // Adjust position as needed
    renderer.render(scene, camera);
    document.getElementById("status").innerHTML = "Cube is drawn.";
}
recognition.onresult = function(event) {
    const content = event.results[0][0].transcript.toLowerCase();
    document.getElementById("status").innerHTML = "The speech has been recognized as: " + content;

    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);

    if (content === "circle") {
        draw_circle = "set";
    } else if (content === "rectangle") {
        draw_rect = "set";
    } else if (content === "triangle") {
        draw_triangle = "set";
    } else if (content === "square") {
        draw_square = "set";
    } else if (content === "parallelogram") {
        draw_parallelogram = "set";
    } else if (content === "star") {
        draw_star = "set";
    } else if (content === "pentagon") {
        draw_pentagon = "set";
    } else if (content === "hexagon") {
        draw_hexagon = "set";
    } else if (content === "octagon") {
        draw_octagon = "set";
    } else if (content === "cube") {
        drawCube();
    }
};
function draw() {
    // 2D shapes
    if (draw_circle === "set") {
        // draw circle logic
    }
    // Add other 2D shapes drawing logic

    // 3D shapes (using Three.js)
    // No specific draw function for 3D shapes in draw() because they're rendered directly in their respective draw functions (e.g., drawCube())
}
  
    
