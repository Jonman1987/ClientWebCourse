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
    Countries: [Russia, Usa]
};

function fff () {
    let result = countries.map(function(elem ()
                         {
                            let name1 = "";
                            let count = elem[0].Cities.length;

                            if (elem.Cities.length > count)
                            {
                               name1 = elem.Name;
                            }

                            return name1;
                         })).filter(notUndefined => notUndefined !== undefined);

        console.log(result);
}fff();