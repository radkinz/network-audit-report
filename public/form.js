//get browser of user
navigator.sayswho = (function () {
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

//add browser input value
$('[name="Browser"]').attr('value', navigator.sayswho);

//get timestamp
function getTimestamp() {
    const pad = (n, s = 2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();

    return `${pad(d.getFullYear(), 4)}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
$('[name="Timestamp"]').attr('value', getTimestamp())

//get IP address
$.getJSON("https://api.ipify.org?format=json",
    function (data) {

        // Setting text of element P with id gfg
        $('[name="RemoteComputerName"]').attr('value', data.ip);
    })


//drop down menu
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

function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
}

function myFunction6() {
    document.getElementById("myDropdown6").classList.toggle("show");
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
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    if (!event.target.matches('.dropbtn3')) {
        var dropdowns = document.getElementsByClassName("dropdown-content3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    if (!event.target.matches('.dropbtn4')) {
        var dropdowns = document.getElementsByClassName("dropdown-content4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    if (!event.target.matches('.dropbtn5')) {
        var dropdowns = document.getElementsByClassName("dropdown-content5");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    
    if (!event.target.matches('.dropbtn6')) {
        var dropdowns = document.getElementsByClassName("dropdown-content6");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//change building value
dropdowntag = document.getElementsByClassName("content")

for (let i = 0; i < dropdowntag.length; i++) {
    dropdowntag[i].onclick = function(event) {
        var target = event.target || event.srcElement;

        $('[name="Building"]').attr("value", target.innerHTML);
    }
}

//change department value
dropdowntag = document.getElementsByClassName("content2")

for (let i = 0; i < dropdowntag.length; i++) {
    dropdowntag[i].onclick = function(event) {
        var target = event.target || event.srcElement;
    
        $('[name="Department"]').attr("value", target.innerHTML);
    }
}

//change room value
dropdowntag = document.getElementsByClassName("content3")

for (let i = 0; i < dropdowntag.length; i++) {
    dropdowntag[i].onclick = function(event) {
        var target = event.target || event.srcElement;
    
        $('[name="Room"]').attr("value", target.innerHTML);
    }
}

//change Function name
dropdowntag = document.getElementsByClassName("content4")

for (let i = 0; i < dropdowntag.length; i++) {
    dropdowntag[i].onclick = function(event) {
        var target = event.target || event.srcElement;
    
        $('[name="Function"]').attr("value", target.innerHTML);
    }
}

//change instrument value
dropdowntag = document.getElementsByClassName("content5")

for (let i = 0; i < dropdowntag.length; i++) {
    dropdowntag[i].onclick = function(event) {
        var target = event.target || event.srcElement;
    
        $('[name="Instrument"]').attr("value", target.innerHTML);
    }
}

//change orientation value
dropdowntag = document.getElementsByClassName("content6")

for (let i = 0; i < dropdowntag.length; i++) {
    dropdowntag[i].onclick = function(event) {
        var target = event.target || event.srcElement;
    
        $('[name="Orientation"]').attr("value", target.innerHTML);
    }
}

//check form
function validateForm() {
    if ($('[name="Building"]').html() == "Click Here to Choose" || $('[name="Department"]').html() == "Click Here to Choose" || $('[name="Room"]').html() == "Click Here to Choose" || $('[name="Function"]').html() == "Click Here to Choose" || $('[name="Instrument"]').html() == "Click Here to Choose" || $('[name="Orientation"]').html() == "Click Here to Choose") {
        alert("Please Fill Out the Entire Form Before Submitting")
        return false;
    }
}