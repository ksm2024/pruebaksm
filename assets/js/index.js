$(document).ready(function () {
    console.log
    //  scroll


    const navEl = document.querySelector('.navbar-scrolled');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            navEl.classList.add('navbar-scrolled');
        } else {
            navEl.classList.remove('navbar-scrolled');
        }
    });


    // button
    // alert
    var bttn = $(".enviar")
    bttn.click(function (e) { alert("Mensaje enviado..."); });



    // tooltip
    var myBttns = $(".connectiontooltip")
    new bootstrap.Tooltip(myBttns[0]);


    // p banishing
    $("h6").click(function () {
        $(".text").toggle();
    });

    //   color switch
    $("section").on("dblclick", "h4", function () {
        $(this).css("color", "greenyellow", "font-weight", "800");
    });


});