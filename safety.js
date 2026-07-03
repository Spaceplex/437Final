const modal = document.getElementById('safetyModal');

function openSafetyModal(topic) {
    const modalTitle = document.querySelector('.modal-text-card h3');
    const modalText = document.querySelector('.modal-text-card p');
    const modalImg = document.querySelector('.modal-video-card img');

    if (topic === 'oxygen') {
        modalTitle.textContent = "Oxygen Masks:";
        modalText.textContent = "If there is a change in cabin pressure, masks will drop automatically. Pull the mask tightly. Secure your mask before assisting others.";
        modalImg.src = "assets/oxygenmask.gif";
        modalImg.alt = "Oxygen Mask Instruction";
        modal.classList.add('is-active'); //[cite: 12]
    } 
    else if (topic === 'evacuation') {
        modalTitle.textContent = "Emergency Evacuation:";
        modalText.textContent = "In the event of an evacuation, leave all personal items behind. Proceed quickly and calmly to the nearest usable exit marked by the overhead signs and floor path lighting.";
        modalImg.src = "assets/emergency evacuation.gif";
        modalImg.alt = "Emergency Evacuation Instruction";
        modal.classList.add('is-active');
    }
}

function closeModal() {
    modal.classList.remove('is-active'); //[cite: 12]
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal(); //[cite: 12]
});
