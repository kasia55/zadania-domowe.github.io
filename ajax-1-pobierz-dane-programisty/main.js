$(document).ready(function () {
    "use strict";

    $("button").click(function () {
        $.ajax({
            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            dataType: 'json',
            success: function (resultJSON) {
                $('<div/>').insertAfter('button');
                $("div").attr('id', "dane-programisty");
                for (let key in resultJSON) {
                   $("div").append(key + ": " + resultJSON[key] + "<br>");
                }
            },
            onerror: function (msg) {
            console.log(msg);
            }
           }); 
    });
});