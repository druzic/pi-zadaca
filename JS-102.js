let brojbodova = prompt("Unesite broj bodova:");
let ocjena;
let poruka;

if (brojbodova >= 89) {
  ocjena = 5;
} else if (brojbodova >= 79) {
  ocjena = 4;
} else if (brojbodova >= 65) {
  ocjena = 3;
} else if (brojbodova >= 50) {
  ocjena = 2;
} else ocjena = 1;

poruka = ocjena > 1 ? `Čestitam na ocjeni ${ocjena}` : "Nedovoljan";
