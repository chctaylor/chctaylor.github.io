document.addEventListener('DOMContentLoaded', function() {

    //Hides navbar on scroll down and shows on scroll up
    var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar-example2").style.top = "0";
        } 
        else {
            document.getElementById("navbar-example2").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
        }

});