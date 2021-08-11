/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}


function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}


function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    if (!event.target.matches('.dropbtn2')) {
        var dropdowns2 = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns2.length; i++) {
            var openDropdown2 = dropdowns2[i];
            if (openDropdown2.classList.contains('show')) {
                openDropdown2.classList.remove('show');
            }
        }
    }

    if (!event.target.matches('.dropbtn3')) {
        var dropdowns2 = document.getElementsByClassName("dropdown-content3");
        var i;
        for (i = 0; i < dropdowns2.length; i++) {
            var openDropdown2 = dropdowns2[i];
            if (openDropdown2.classList.contains('show')) {
                openDropdown2.classList.remove('show');
            }
        }
    }

    if (!event.target.matches('.dropbtn4')) {
        var dropdowns2 = document.getElementsByClassName("dropdown-content4");
        var i;
        for (i = 0; i < dropdowns2.length; i++) {
            var openDropdown2 = dropdowns2[i];
            if (openDropdown2.classList.contains('show')) {
                openDropdown2.classList.remove('show');
            }
        }
    }
}
