"use strict";

let ocenyZMatematyki = document.querySelectorAll('input.matematyka');
let ocenyZPolskiego = document.querySelectorAll('input.polski');
let ocenyZBiologii = document.querySelectorAll('input.biologia');
let ocenyZGeografii = document.querySelectorAll('input.geografia');
let ocenyZFizyki = document.querySelectorAll('input.fizyka');
let ocenyZChemii = document.querySelectorAll('input.chemia');
let ocenyZInformatyki = document.querySelectorAll('input.informatyka');
let zajeciaDodatkowe = document.querySelectorAll('input.zajecia-dodatkowe');
let sredniaOcen = document.querySelectorAll('.srednia');
let buttonOblicz = document.getElementById('oblicz');

const obliczaniePoKliknieciu = () => {
        let obliczonaSrednia = [];
        for (let i = 0; i < ocenyZMatematyki.length; i++) {
                this['zajeciaDodatkoweBezSpacji' + i] = zajeciaDodatkowe[i].value.trim();
                if (this['zajeciaDodatkoweBezSpacji' + i] != "") {
                        this['tablicaZajecDodatkowychUcznia' + i] = zajeciaDodatkowe[i].value.split(', ');
                        let j = 0;
                        while (j < this['tablicaZajecDodatkowychUcznia' + i].length) {
                                let nazwaKlasy = this['tablicaZajecDodatkowychUcznia' + i][j];
                                this['przedmiot' + j] = document.getElementsByClassName(nazwaKlasy)[i + 1];
                                if (Number(this['przedmiot' + j].value) <= 5.5) {
                                        this['przedmiot' + j].value = Number(this['przedmiot' + j].value) + 0.5;
                                }
                                j++;
                        }
                }

                let mat = Number(ocenyZMatematyki[i].value);
                let pol = Number(ocenyZPolskiego[i].value);
                let bio = Number(ocenyZBiologii[i].value);
                let geo = Number(ocenyZGeografii[i].value);
                let fiz = Number(ocenyZFizyki[i].value);
                let che = Number(ocenyZChemii[i].value);
                let inf = Number(ocenyZInformatyki[i].value);
                let tabelaOcen = [mat, pol, bio, geo, fiz, che, inf];
                let suma = 0;
                tabelaOcen.forEach(element => {
                        suma += element;
                        if (element < 2) {
                                zajeciaDodatkowe[i].parentElement.style.backgroundColor = "red";
                        }
                });

                obliczonaSrednia[i] = suma / 7;
        }

        for (let j = 1; j < sredniaOcen.length; j++) {
                this["marker" + j] = obliczonaSrednia[j - 1];
                sredniaOcen[j].textContent = this["marker" + j].toFixed(2);
                if (obliczonaSrednia[j - 1] >= 4.75) {
                        sredniaOcen[j].parentElement.style.backgroundColor = "green";
                }
        }
}

buttonOblicz.addEventListener('click', obliczaniePoKliknieciu);