$(document).ready(function () {
    console.log
    //  scroll

    $(document).scroll(function (e) {
        const ubicacionScroll = $("html").scrollTop();
        console.log("-- ubicacionScroll scroll es --> ", ubicacionScroll);
        if (ubicacionScroll > 1400) {
            console.log("Estamos por mayor a 1400");
            // Cuando pasamos x ubicacionScroll
            $("footer").removeClass("footerDarck").addClass("footerTransparent")
        } else {
            $("footer").removeClass("footerTransparent").addClass("footerDarck")
            console.log("footer menor a 1400");
        }
    });


    // button
    // alert
    var bttn = $(".enviar")
    bttn.click(function (e) { alert("Mensaje enviado..."); });



    // tooltip
    var myBttns = $(".connectiontooltip")
    new bootstrap.Tooltip(myBttns[0]);









});