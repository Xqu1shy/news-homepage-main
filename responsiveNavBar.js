

const openNav = document.getElementById('open-nav-content')
const closeNav = document.getElementById('close-nav-content')
const navModal = document.getElementById('nav-modal')


openNav.addEventListener('click', () => {
    navModal.showModal();
})

closeNav.addEventListener('click', () => {
    navModal.close();
})