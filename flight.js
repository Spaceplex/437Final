window.addEventListener('DOMContentLoaded', () => {
    const path = document.getElementById('route');
    const plane = document.querySelector('.plane-marker');
    
    if (path && plane) {
        const totalLength = path.getTotalLength();
        
        const progress = 0.72; 
        
        // Grab coordinate snapshots slightly apart to compute the tangent angle
        const point = path.getPointAtLength(totalLength * progress);
        const nextPoint = path.getPointAtLength((totalLength * progress) + 1);
        
        // Compute structural rotation angle in degrees
        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
        
        // Apply position and accurate trajectory alignment dynamically
        plane.setAttribute('transform', `translate(${point.x}, ${point.y}) rotate(${angle})`);
    }
});


