const filesLocation = 'c../nmap-datenfiles'; //setzt den Dateipfad in die nichrt veränderbare Variable ein 
try {
    const dirEntries = await Deno.readDir(filesLocation); //einträge sind dann in dirEntries
    for await (const dirEntry of dirEntries) {  //
        //console.log(dirEntry.name);
        const data = await Deno.readTextFile(dirEntry.name);
        const lines = data.split('\n');
        console.log(lines);
    }
} catch (err) {
    console.error('Error reading the file:', err);
}

//for: continue: aktueller Druchlauf der Schleife beendet, nächster Druchlauf kommt
