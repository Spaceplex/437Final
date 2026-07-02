// Quick snippet to position any element smoothly along an SVG curve
const path = document.getElementById('route');
const totalLength = path.getTotalLength();

// Set progress anywhere from 0 (Origin) to 1 (Destination)
function updatePlanePosition(progress) {
    const point = path.getPointAtLength(totalLength * progress);
    const plane = document.querySelector('.plane-marker');
    
    // Set position coordinates dynamically
    plane.setAttribute('transform', `translate(${point.x}, ${point.y})`);
}

// Example: Places plane exactly halfway through the curve route
updatePlanePosition(0.5);
