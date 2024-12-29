// Define an object with multiple properties
const point = {
    x: 5,
    y: 1, // This line seems to be your original snippet
    z: 10
};

// Function to display the point's coordinates
function displayPoint(p) {
    console.log(`Point coordinates are: x=${p.x}, y=${p.y}, z=${p.z}`);
}

// Function to manipulate the point's coordinates
function movePoint(p, dx, dy, dz) {
    p.x += dx;
    p.y += dy;
    p.z += dz;
}

// Initial display of point
displayPoint(point);

// Move the point
movePoint(point, 2, 3, -5);

// Display the point after moving
displayPoint(point);
