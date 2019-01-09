var baza = {
    "Gdzie jest Nemo": {
        dataPremiery: 2003,
        czastrwania: 100,
        obsada: ["Albert Brooks", "ellen DeGeneres", "Aleksander Gould"],
        format: "DVD"
    },
    "Gwiezdne Wojny: Część vI - Powrót Jedi": {
        dataPremiery: 1983,
        czastrwania: 134,
        obsada: ["Mark Hamil", "Harrison Ford", "Carrie Fisher"],
        format: "DVD"
    },
    "Harry Potter i czar ognia": {
        dataPremiery: 2005,
        czastrwania: 157,
        obsada: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        format: "Blue-ray"

    }

};

var aguamen = {
    dataPremiery: 2018,
    czastrwania: 259,
    obsada: ["Jason Mamoa", "Amber Hear", "Nicole Kidman"],
    format: "Blue-ray"
};

baza.aguamen = aguamen;

console.log(Object.keys(baza));

console.log("Czas trania: " + baza["Harry Potter i czar ognia"].czastrwania);