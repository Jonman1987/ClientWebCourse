window.ETR = window.ETR || {};

let moscow = {
    Name: "Moscow",
    Population: 1000000
};

let novosibirsk = {
    Name: "Novosibirsk",
    Population: 500000
};

let tomsk = {
    Name: "Tomsk",
    Population: 200000
};

let newYork = {
    Name: "New York",
    Population: 1000000
};

let washington = {
    Name: "Washington",
    Population: 1500000
};

let Russia = {
    Name: "Russia",
    Cities: [moscow, novosibirsk, tomsk]
};

let Usa = {
    Name: "Usa",
    Cities: [washington, newYork]
};

const countries = {
    Countries: [Usa, Russia]
};

function maxCities () {

let countryName = "No cities";
let count = 0;

for (let i = 0; i < countries.Countries.length; i++) {
        if (countries.Countries[i].Cities.length > count) {
            count = countries.Countries[i].Cities.length;
            countryName = countries.Countries[i].Name;
        }
    }

    console.log(countryName);
}maxCities();

function population() {
    let sumPopulation = 0;
    let newMapPopulation = 0;
    let k = 0;

    let objects = countries.Countries.map(function (num) {

    for (let i = k; i < countries.Countries.length; i++) {
        k++; // Если честно я тут накостылил, но пока не могу сообразить как правильно работает map.
        // Я так понимаю, что должна быть какая-то типовая функция типа reduce которая делает суммирование

        for (let j = 0; j < countries.Countries[i].Cities.length; j++) {
            sumPopulation += countries.Countries[i].Cities[j].Population;
            }

            newMapPopulation = sumPopulation;
            sumPopulation  = 0;

            return {
                      Name: countries.Countries[i].Name,
                      Population: newMapPopulation
                   }
        }
    });

    console.log(objects);
}population();