class Person {
    constructor(name, gender, groesseM, gewichtKG) {
        if (gender !== 'm' && gender !== 'f') {
            throw new Error('wrong gender');
        }

        this.name = name;
        this.gender = gender;
        this.groesseM = groesseM;
        this.gewichtKG = gewichtKG;
    }

    // Gibt die Größe in cm zurück
    groesseCM() {
        return this.groesseM * 100;
    }

    // Gibt den BMI (gerundet im Testcode!) zurück
    getBmi() {
        return this.gewichtKG / (this.groesseM * this.groesseM);
    }

    // Gewichtsklassifizierung je nach Geschlecht
    getGewichtType() {
        const bmi = this.getBmi();
        if (this.gender === 'f') {
            if (bmi < 19) return 'Untergewicht';
            if (bmi > 24) return 'Übergewicht';
            return 'Normalgewicht';
        } else {
            if (bmi < 20) return 'Untergewicht';
            if (bmi > 25) return 'Übergewicht';
            return 'Normalgewicht';
        }
    }

    // Extrahiert den Vornamen aus dem Namen
    vorName() {
        return this.name.split(' ')[0];
    }

    // Extrahiert den Nachnamen (alles nach dem ersten Leerzeichen)
    nachName() {
        return this.name.split(' ').slice(1).join(' ');
    }

    // Formatierte Ausgabe
    toString() {
        return `${this.name} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
    }
}

export { Person };