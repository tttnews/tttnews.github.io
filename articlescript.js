document.getElementById("theheader").innerHTML = "<nav id=\"navbar\"><div id=\"menu-toggle\" class=\"menu-icon\">&#9776;</div><div class=\"logo\">Unnamed Website</div><ul id=\"menu-items\" class=\"hidden\"><li><a href=\"../../index.html\">Home</a></li><li><a href=\"#\">Politics</a></li><li><a href=\"#\">Economy</a></li><li><a href=\"#\">Sports</a></li><li><a href=\"#\">Opinion</a></li><li><a href=\"../../about-us.html\">About us</a></li></ul></nav>";

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu-items');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

document.getElementById('thefooter').innerHTML = "<p>&copy; 2024 The Unnamed Website. All rights reserved.</p>";
