function viewInRoom(imageSrc) {
    document.getElementById('room-view-image').src = imageSrc;
    document.getElementById('room-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('room-modal').style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById('room-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
