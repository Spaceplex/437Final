window.addEventListener('DOMContentLoaded', () => {
    const path = document.getElementById('route');
    const plane = document.querySelector('.plane-marker');
    
    if (path && plane) {
        const totalLength = path.getTotalLength();
        
        const progress = 0.55; 
        
        // Grab coordinate snapshots slightly apart to compute the tangent angle
        const point = path.getPointAtLength(totalLength * progress);
        const nextPoint = path.getPointAtLength((totalLength * progress) + 1);
        
        // Compute structural rotation angle in degrees
        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
        
        // Apply position and accurate trajectory alignment dynamically
        plane.setAttribute('transform', `translate(${point.x}, ${point.y}) rotate(${angle})`);
    }
});

const time = new Date();
const localTime = new Date(time);
localTime.setHours(localTime.getHours() - 1);
const departureTime = new Date(time);
departureTime.setHours(localTime.getHours() - 3);
const formatTime = (date) => {
  let hr = date.getHours();
  let minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutes} ${ampm}`;
}

const destElement = document.getElementById('destTime');
const localElement = document.getElementById('localTime');
const departElement = document.getElementById('departureTime');

if (destElement) destElement.innerHTML = `<strong>(Virginia) Destination time:</strong> ${formatTime(time)}`;
if (localElement) localElement.innerHTML = `<strong>(Minnesota) Local time:</strong> ${formatTime(localTime)}`;
if (departElement) departElement.innerHTML = `<strong>(Nevada) Departure time:</strong> ${formatTime(departureTime)}`;
