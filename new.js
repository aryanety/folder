$(document).ready(function() {
 //  let title = $("#GO").text();
 //  alert (title.trim());
let swittch = true;
 $("#buton").click(function() {
    if (swittch == true) {
        $("#GO").text("Onion Glass");

        $("#go2").text("Onion Glass");

        swittch = false;
    }

    else{
        $("#GO").text("Glass Onion");

        $("#go2").text("Glass Onion");

        swittch = true;
    }
 });
});