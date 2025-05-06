
/*forEach()
 * Die forEach() Methode führt eine bereitgestellte Funktion einmal für jedes Element im Array aus.
 * Sie wird verwendet, um eine Aktion für jedes Element durchzuführen, ohne ein neues Array zu erzeugen.
 * Wichtig: forEach() gibt keinen Wert zurück (undefined).
 * Beispiel 1: Ausgabe der Werte mit Index
 */
const zahlen = [1, 2, 3, 4, 5]; // Array mit Zahlen
console.log('forEach Beispiel 1:'); // Überschrift ausgeben
zahlen.forEach((zahl, index) => { // für jedes Element im Array
    console.log(`Index ${index}: Wert ${zahl}`); // Index und Wert ausgeben
});
/* Ausgabe:
forEach Beispiel 1:
Index 0: Wert 1
Index 1: Wert 2
Index 2: Wert 3
Index 3: Wert 4
Index 4: Wert 5
*/
/*Beispiel 2: Summe aller Zahlen berechnen
 */
let summe = 0; // Variable für Summe initialisieren
zahlen.forEach(zahl => { // für jede Zahl im Array
    summe += zahl; // Zahl zur Summe hinzufügen
});
console.log('forEach Beispiel 2 (Summe):', summe); // Summe ausgeben
/* Ausgabe:
forEach Beispiel 2 (Summe): 15
*/

/* map()
 * Die map() Methode erstellt ein neues Array mit den Ergebnissen der Ausführung einer bereitgestellten Funktion
 * für jedes Element im aufrufenden Array.
 * Sie wird verwendet, um ein Array zu transformieren, ohne das Original zu verändern.
 * Rückgabewert: neues Array mit transformierten Werten.
 * Beispiel 1: Quadrate der Zahlen berechnen
 */
const quadrate = zahlen.map(zahl => zahl * zahl); // neues Array mit Quadraten erstellen
console.log('map Beispiel 1 (Quadrate):', quadrate); // neues Array ausgeben
/* Ausgabe:
map Beispiel 1 (Quadrate): [1, 4, 9, 16, 25]
*/
/*Beispiel 2: Array von Objekten in Array von Namen umwandeln
 */
const personen = [ // Array von Objekten mit name und alter
    { name: 'Anna', alter: 25 },
    { name: 'Bernd', alter: 30 },
    { name: 'Clara', alter: 28 }
];
// 'person' ist der Parameter der Callback-Funktion und steht für das aktuelle Element im Array 'personen'
const namen = personen.map(person => person.name); // neues Array mit nur den Namen erstellen
console.log('map Beispiel 2 (Namen):', namen); // neues Array ausgeben
/* Ausgabe:
map Beispiel 2 (Namen): ['Anna', 'Bernd', 'Clara']
*/
/*filter()
 * Die filter() Methode erstellt ein neues Array mit allen Elementen, die die bereitgestellte Bedingung erfüllen.
 * Sie wird verwendet, um Elemente aus einem Array herauszufiltern.
 * Rückgabewert: neues Array mit gefilterten Elementen.
 * Beispiel 1: Gerade Zahlen filtern
 */
const geradeZahlen = zahlen.filter(zahl => zahl % 2 === 0); // neues Array mit geraden Zahlen erstellen
console.log('filter Beispiel 1 (gerade Zahlen):', geradeZahlen); // neues Array ausgeben
/* Ausgabe:
filter Beispiel 1 (gerade Zahlen): [2, 4]
*/
/*
 * Beispiel 2: Personen über 27 Jahre filtern
 */
const aelterePersonen = personen.filter(person => person.alter > 27); // neues Array mit Personen über 27 erstellen
console.log('filter Beispiel 2 (Personen über 27):', aelterePersonen); // neues Array ausgeben
/* Ausgabe:
filter Beispiel 2 (Personen über 27): [{ name: 'Bernd', alter: 30 }, { name: 'Clara', alter: 28 }]
*/
/*join()
 * Die join() Methode verbindet alle Elemente eines Arrays zu einem String.
 * Optional kann ein Trennzeichen angegeben werden, standardmäßig ist es ein Komma.
 * Rückgabewert: String mit verbundenen Elementen.
 * Beispiel 1: Array von Namen zu einem String verbinden
 */
const namenString = namen.join(', '); // Array in String mit Komma und Leerzeichen verbinden
console.log('join Beispiel 1:', namenString); // String ausgeben
/* Ausgabe:
join Beispiel 1: Anna, Bernd, Clara
*/
/*
 * Beispiel 2: Zahlen mit Bindestrich verbinden
 */
const zahlenString = zahlen.join(' - '); // Array in String mit Bindestrich verbinden
console.log('join Beispiel 2:', zahlenString); // String ausgeben
/* Ausgabe:
join Beispiel 2: 1 - 2 - 3 - 4 - 5
*/
// Zusammenfassung:
// forEach: führt eine Funktion für jedes Element aus, ohne Rückgabewert
// map: erzeugt ein neues Array durch Transformation der Elemente
// filter: erzeugt ein neues Array mit Elementen, die eine Bedingung erfüllen
// join: verbindet Array-Elemente zu einem String mit Trennzeichen
