$(document).ready(function () {
    "use strict";

    $("button").click(function () {
        $.ajax({
            url: "https://blockchain.info/pl/ticker",
            dataType: 'json',
            success: function (resultJSON) {
                // $('<div/>').insertAfter('button');
                // $("div").attr('id', "dane-programisty");
                // for (let key in resultJSON) {
                //    $("div").append(key + ": " + resultJSON[key] + "<br>");
                // }
                let obiekt = resultJSON["PLN"];
                console.log(obiekt);

                let stareKupno = $('span#kupno').text();
                console.log("stare kupno " + stareKupno);
                let staraSprzedaz = $('span#sprzedaz').text();
                console.log("stare sprzeda " + staraSprzedaz);
                $('span#kupno').empty();
                $('span#sprzedaz').empty();
                $('span#strzalka-kupno').empty();
                $('span#strzalka-sprzedaz').empty();

                let kupno = obiekt['buy'];
                $('span#kupno').append(kupno);
                if (stareKupno != "") {
                    if (Number(stareKupno) > Number(kupno)) {
                        $('span#strzalka-kupno').html('<i class="fas fa-arrow-down"></i>');
                    } else if (Number(stareKupno) < Number(kupno)) {
                        $('span#strzalka-kupno').html('<i class="fas fa-arrow-up"></i>');
                    } else {
                        $('span#strzalka-kupno').html('<i class="fas fa-minus"></i>');
                    }
                }

                let sprzedaz = obiekt['sell'];
                $('span#sprzedaz').append(sprzedaz);
                if (staraSprzedaz != "") {
                    if (Number(staraSprzedaz) > Number(sprzedaz)) {
                        $('span#strzalka-sprzedaz').html('<i class="fas fa-arrow-down"></i>')
                    } else if (Number(staraSprzedaz) < Number(sprzedaz)) {
                        $('span#strzalka-sprzedaz').html('<i class="fas fa-arrow-up"></i>');
                    } else {
                        $('span#strzalka-sprzedaz').html('<i class="fas fa-minus"></i>');
                    }
                }
            },
            onerror: function (msg) {
                console.log(msg);
            }
        });
    });
});