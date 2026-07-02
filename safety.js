// Target popup wrapper element
const modal = document.getElementById('safetyModal');

function openSafetyModal(topic) {
    if (topic === 'oxygen') {
        // Toggle helper visibility visibility class
        modal.classList.add('is-active');
    } else {
        alert("Opening detailed procedures view for: " + topic);
    }
}

function closeModal() {
    modal.classList.remove('is-active');
}

// Optional: Link Escape key press to dismiss active popup window natively 
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
