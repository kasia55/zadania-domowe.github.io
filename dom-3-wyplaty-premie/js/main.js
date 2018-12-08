"use strict";

let pracownik = document.querySelectorAll(".pracownik");
let czas = document.querySelectorAll(".czas");
let stawka = document.querySelectorAll(".stawka");
let wyplata = document.querySelectorAll(".wyplata");
let buttonOblicz = document.getElementById("oblicz");
let miejsceDlaNajlepszych = document.getElementById("najlepsi-pracownicy");

const obliczanieWyplat = () => {

    let najlepsiPracownicy = [];
    let czasyNajlepszychPracownikow = [];

    let podsumowanieWyplaty = 0;

    for (let i = 0; i < czas.length; i++) {
        if (czas[i].value > 160) {
            podsumowanieWyplaty = (160 * stawka[i].value) + ((czas[i].value - 160) * (stawka[i].value * 2));
            najlepsiPracownicy.push(czas[i].previousElementSibling.textContent);
            czasyNajlepszychPracownikow.push(czas[i].value);
        } else if (czas[i].value > 100) {
            podsumowanieWyplaty = czas[i].value * stawka[i].value;
        } else {
            pracownik[i].parentElement.style.backgroundColor = "red";
            podsumowanieWyplaty = czas[i].value * stawka[i].value;
        }
        wyplata[i].innerHTML = podsumowanieWyplaty;
    }

    const sortowanieNajlepszych = () => {
        for (let i = 0; i < czasyNajlepszychPracownikow.length; i++) {
            for (let j = 0; j < czasyNajlepszychPracownikow.length; j++) {
                if (czasyNajlepszychPracownikow[j] < czasyNajlepszychPracownikow[j + 1]) {
                    let x = czasyNajlepszychPracownikow[j];
                    czasyNajlepszychPracownikow[j] = czasyNajlepszychPracownikow[j + 1];
                    czasyNajlepszychPracownikow[j + 1] = x;
                    let y = najlepsiPracownicy[j];
                    najlepsiPracownicy[j] = najlepsiPracownicy[j + 1];
                    najlepsiPracownicy[j + 1] = y;
                }
            }
        }
    }

    sortowanieNajlepszych();

    let listaNajlepszych = document.createElement('ol');
    while (miejsceDlaNajlepszych.firstChild) {
        miejsceDlaNajlepszych.removeChild(miejsceDlaNajlepszych.firstChild);
    }

    for (let i = 0; i < 3; i++) {
        this["marker" + i] = document.createElement('li');
        this["markerText" + i] = document.createTextNode(najlepsiPracownicy[i] + " - godziny pracy: " + czasyNajlepszychPracownikow[i]);
        this["marker" + i].appendChild(this["markerText" + i]);
        listaNajlepszych.appendChild(this["marker" + i]);
    }

    miejsceDlaNajlepszych.appendChild(listaNajlepszych);
}

buttonOblicz.addEventListener('click', obliczanieWyplat);