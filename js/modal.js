function showModal() {
    document.getElementById('modal').classList.add('modalActive');
    document.body.classList.add('modal_open');
}

function closeModal() {
    document.getElementById('modal').classList.remove('modalActive');
    document.body.classList.remove('modal_open');
}