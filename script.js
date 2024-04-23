// Toggle mobile menu visibility
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu-items');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});


alert(document.querySelector("article").style.opacity);