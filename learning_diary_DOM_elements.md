# TASK 1:
**what is the "document" variable in javascript?**
- eingebauten objekt, dass die aktuell geladene Website darstellt (Struktur der Website)
- ist der Einstiegspunkt zum DOM (Document Object Model)
- dadurch kann auf der Seite mit HTML alles gelesen, verändert und darauf reagiert werden

- (Das kann auch mittels eines Bilderbuches erklärt werden. Dabei ist document, der Helfer der Überschriften sucht und texte ändert.)

Elemente erstellen und einfügen
const li = document.createElement("li");
li.textContent = "Neuer Eintrag";
document.querySelector("ul").appendChild(li);

Auf Ereignisse reagieren
document.addEventListener("click", (e) => console.log("Geklickt:", e.target));

const titel = document.getElementById("titel");
const eintraege = document.querySelectorAll(".eintrag");


**what can do with the document variable?**
Damit kann ich JavaScript sagen, was auf der Website tun soll. z.B. hinzufügen, ändern oder finden





# TASK 2
**How can I access the list "myTable" in the html file?**
`myTable` ist eine Tabelle (keine Liste). Über ihre ID kann ich sie so auswählen:

const tabelle = document.getElementById("myTable");//


**How can I change the list "myTable" in the html file?**
Zum Beispiel kann ich Annas Alter in der zweiten Zelle der ersten Datenzeile ändern:

const tabelle = document.getElementById("myTable");
tabelle.tBodies[0].rows[0].cells[1].textContent = "22";

- document.getElementById("myTable") holt die <table>.
- tabelle.tBodies[0] ist der erste <tbody>. Die Kopfzeile mit “Name” und “Age und liegt im <thead> und wird dadurch übersprungen.
- rows[0] ist die erste Datenzeile Der Index beginnt bei 0.
- cells[1] ist die zweite Zelle dieser Zeile, die Altersspalte.
- textContent = "22" ersetzt den Text der Zelle. Es ist ein String. 

 



# TASK 3 (together with Stephi)
**table**
const table = document.querySelector("#tabelle");
rows, rows.length, rows[0].cells[9], caption, tHead, tBody, tFoot
Alle Zellen durchlaufen:
for (const row of table.rows) {
  for (const cell of row.cells) {
    console.log(cell.textContent);
  }
}
----- damit kann man ganze Tabelle bearbeiten

Zeile löschen:
table.deleteRow(1) - gilt nur für Tabellen. Auch auf z.B. tBody anwendbar:
table.tBodies[0].deleteRow(0);
dann wird nur die 1. Zeile aus dem Body gelöscht.
Eine Tabelle kann mehrere Bodies haben - da aufpassen

Einen Style für alle Zellen im Body anwenden:
for (const body of myTable.tBodies) {
  body.style.fontStyle = "italic";
}

für tHead gehts einfacher:
myTable.tHead.style.fontStyle = "italic";



# TASK 4: Presentation




# TASK 5 (form):
**Which parameters of this DOM element can be accessed from javascript?**
**What do these parameters do?**
Ein form-Element ist im Browser ein DOM-Objekt mit Eigenschaften und Methoden. JavaScript kann damit lesen, was Nutzer eingegeben haben, Eingaben prüfen und das Formular zurücksetzen.
- id:	Die Kennung des Formulars (myForm), mit der man es per getElementById findet
- elements:	Sammlung aller Formularfelder (Textfeld, Auswahlmenü, Radiobuttons, Checkbox)
- action:	Die URL, an die die Daten beim Absenden geschickt werden
- method:	Die Sendemethode, meist GET (Daten in der URL) oder POST (Daten im Anfragekörper)
- checkValidity():	Prüft, ob alle Felder gültig sind (z. B. required, minlength, type="email"), und gibt true oder false zurück
- reset():	Setzt alle Felder auf ihre Anfangswerte zurück


const form = document.getElementById("myForm");
Holt das Formular-Element anhand seiner ID und speichert es in form.

const name = form.elements.namedItem("name").value;
Sucht in form.elements das Feld mit dem Attribut name="name" und liest dessen aktuellen Wert, also den Text, den der Nutzer eingetragen hat.

const color = form.elements.namedItem("color").value;
Dasselbe für das Feld color, wahrscheinlich ein <select>-Menü oder eine Radiobutton-Gruppe. Man erhält den ausgewählten Wert.

const agreed = form.elements.namedItem("agree").checked;
Bei einer Checkbox liest man nicht .value, sondern .checked. Das ergibt true, wenn sie angehakt ist, sonst false.





