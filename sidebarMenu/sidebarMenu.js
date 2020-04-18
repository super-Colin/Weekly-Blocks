
document.getElementById('sidebarMenu-iconsTab-toggleTabButton').addEventListener('click', toggleExpandingSidebar);
function toggleExpandingSidebar(){
    document.body.classList.toggle('sidebarMenu-expanded');
    document.getElementById('sidebarMenu-iconsTab-toggleTabButton').classList.toggle('bookshelfToX-icon-active')
}


document.getElementById('sidebarMenu-iconsTab-darkModeButton').addEventListener('click', toggleDarkMode);
function toggleDarkMode() {
    document.body.classList.toggle('darkMode-active');
}

