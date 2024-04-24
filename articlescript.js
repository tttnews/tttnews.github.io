document.getElementById("theheader").innerHTML = "<nav id=\"navbar\"><div id=\"menu-toggle\" class=\"menu-icon\">&#9776;</div><div class=\"logo\">Unnamed Website</div><ul id=\"menu-items\" class=\"hidden\"><li><a href=\"../index.html\">Home</a></li><li><a href=\"#\">World</a></li><li><a href=\"#\">Local</a></li><li><a href=\"#\">Sports</a></li></ul></nav>";

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu-items');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

document.getElementById('thefooter').innerHTML = "<p>&copy; 2024 Unnamed Website. All rights reserved.</p>";
