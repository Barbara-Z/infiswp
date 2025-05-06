// Aufgabe 1: Erstelle eine Klasse "Auto" mit Eigenschaften und einer Methode.
class Auto {
    // Konstruktor initialisiert die Eigenschaften
    constructor(mark, modell, baujahr) {
        this.mark = mark; // Marke des Autos
        this.modell = modell; // Modellbezeichnung
        this.baujahr = baujahr; // Baujahr des Autos
    }
    // Methode zur Ausgabe der Auto-Informationen
    anzeigen() {
        console.log(`Auto: ${this.mark} ${this.modell}, Baujahr: ${this.baujahr}`);
    }
}
const meinAuto = new Auto('VW', 'Golf', 2015);
meinAuto.anzeigen(); // Ausgabe der Auto-Details

// Aufgabe 2: Erstelle eine Klasse "Elektroauto", die von "Auto" erbt, mit zusätzlicher Eigenschaft.
class Elektroauto extends Auto {
    // Konstruktor ruft den Eltern-Konstruktor auf und fügt eine neue Eigenschaft hinzu
    constructor(mark, modell, baujahr, batterieKapazitaet) {
        super(mark, modell, baujahr); // Aufruf des Eltern-Konstruktors
        this.batterieKapazitaet = batterieKapazitaet; // Batteriekapazität in kWh
    }
    // Überschreibt die anzeigen()-Methode, um zusätzliche Infos auszugeben
    anzeigen() {
        super.anzeigen(); // Aufruf der Eltern-Methode
        console.log(`Batteriekapazität: ${this.batterieKapazitaet} kWh`);
    }
}
const meinEAuto = new Elektroauto('Tesla', 'Model 3', 2020, 75);
meinEAuto.anzeigen(); // Ausgabe der Elektroauto-Details

// Aufgabe 3: Erstelle ein Array von Objekten und verwende forEach(), um alle auszugeben.
const personen = [
    { name: 'Anna', alter: 25 },
    { name: 'Ben', alter: 30 },
    { name: 'Clara', alter: 22 }
];
// forEach() iteriert über jedes Element im Array und führt die Funktion aus
personen.forEach(person => {
    console.log(`Name: ${person.name}, Alter: ${person.alter}`);
});

// Aufgabe 4: Verwende map(), um ein Array von Zahlen zu quadrieren.
const zahlen = [1, 2, 3, 4, 5];
// map() erstellt ein neues Array, indem es die Funktion auf jedes Element anwendet
const quadrate = zahlen.map(zahl => zahl * zahl);
console.log('Quadrate:', quadrate); // Ausgabe des neuen Arrays mit quadrierten Zahlen

// Aufgabe 5: Verwende filter(), um nur gerade Zahlen aus einem Array zu erhalten.
const gemischteZahlen = [1, 2, 3, 4, 5, 6];
// filter() erstellt ein neues Array mit Elementen, die die Bedingung erfüllen
const geradeZahlen = gemischteZahlen.filter(zahl => zahl % 2 === 0);
console.log('Gerade Zahlen:', geradeZahlen); // Ausgabe der gefilterten geraden Zahlen

// Aufgabe 6: Verwende join(), um ein Array von Strings zu einem Satz zu verbinden.
const woerter = ['JavaScript', 'ist', 'eine', 'tolle', 'Sprache'];
// join() verbindet alle Array-Elemente zu einem String, getrennt durch das angegebene Trennzeichen
const satz = woerter.join(' ');
console.log('Satz:', satz); // Ausgabe des zusammengesetzten Satzes

// Aufgabe 7: Kombiniere map() und filter() in einem Array von Objekten.
const produkte = [
    { name: 'Apfel', preis: 1.2 },
    { name: 'Brot', preis: 2.5 },
    { name: 'Milch', preis: 0.9 },
    { name: 'Käse', preis: 3.0 }
];
// filter() wählt Produkte mit Preis über 1 Euro aus
// map() erstellt ein neues Array mit nur den Namen der gefilterten Produkte
const teureProdukteNamen = produkte
    .filter(produkt => produkt.preis > 1)
    .map(produkt => produkt.name);
console.log('Teure Produkte:', teureProdukteNamen); // Ausgabe der Namen der teuren Produkte

// Aufgabe 8: Erstelle eine Klasse "Person" mit privaten Feldern, Getter und Methode.
class Person {
    #name; // privates Feld für den Namen
    #alter; // privates Feld für das Alter
    constructor(name, alter) {
        this.#name = name; // Initialisierung des privaten Namens
        this.#alter = alter; // Initialisierung des privaten Alters
    }
    // Getter für den Namen
    get name() {
        return this.#name;
    }
    // Getter für das Alter
    get alter() {
        return this.#alter;
    }
    // Methode zur Vorstellung der Person
    vorstellen() {
        console.log(`Hallo, ich heiße ${this.#name} und bin ${this.#alter} Jahre alt.`);
    }
}
const max = new Person('Max', 28);
max.vorstellen(); // Ausgabe der Vorstellung
console.log('Name:', max.name); // Zugriff auf den Namen über Getter
console.log('Alter:', max.alter); // Zugriff auf das Alter über Getter

// Aufgabe 9: Verwende forEach(), um eine Liste von Namen zu begrüßen.
const namen = ['Lisa', 'Tom', 'Julia'];
// forEach() ruft für jeden Namen die Funktion auf, die eine Begrüßung ausgibt
namen.forEach(name => {
    console.log(`Hallo, ${name}!`);
});

// Aufgabe 10: Erstelle eine Funktion, die ein Array von Objekten filtert und die Namen joined.
function filtereUndVerbindeNamen(array, mindestAlter) {
    // filter() wählt Personen aus, die mindestens das angegebene Alter haben
    const gefiltert = array.filter(person => person.alter >= mindestAlter);
    // map() erstellt ein Array mit den Namen der gefilterten Personen
    const namen = gefiltert.map(person => person.name);
    // join() verbindet die Namen zu einem String, getrennt durch Kommas
    const verbunden = namen.join(', ');
    console.log(`Personen ab ${mindestAlter} Jahren: ${verbunden}`);
}
const gruppe = [
    { name: 'Anna', alter: 20 },
    { name: 'Ben', alter: 17 },
    { name: 'Clara', alter: 22 }
];
filtereUndVerbindeNamen(gruppe, 18); // Ausgabe der Namen der Personen ab 18 Jahren
