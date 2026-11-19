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




# TASK 5 (button)
**Which parameters of this DOM element can be accessed from javascript?**
**What do these parameters do?**

- id: Der Name, mit dem man den Button im Code findet. Hier heißt er submitBtn.
- textContent: Der Text, der auf dem Button steht. Im Moment ist das “Submit”. Man kann ihn lesen oder ändern.
- type: Die Art des Buttons. Es gibt drei Arten: ein normaler Button (button), einer, der ein Formular abschickt (submit), und einer, der ein Formular zurücksetzt (reset).
- disabled: Sagt, ob der Button gesperrt ist. Setzt man ihn auf true, kann man nicht mehr darauf klicken.
- addEventListener("click", ...): Damit sagt man dem Button: “Wenn jemand auf dich klickt, führe diesen Code aus.”


For example:
const button = document.getElementById("submitBtn");
Der Button wird anhand seiner ID gesucht und in der Variable button gespeichert. Ab jetzt steht button für diesen Button.

button.textContent = "Save";
Der Text auf dem Button wird von “Submit” auf “Save” geändert. Auf der Seite steht dann sofort “Save”.

button.addEventListener("click", () => {
  console.log("Button clicked");
});
Hier wird festgelegt, was bei einem Klick passiert. Jedes Mal, wenn jemand auf den Button klickt, schreibt der Browser “Button clicked” in die Konsole.

Der Button hat den Typ "button". Das bedeutet: Ein Klick schickt kein Formular ab. Es passiert nur das, was man selbst im JavaScript-Code festlegt. Hätte der Button den Typ "submit", würde ein Klick zusätzlich das Formular absenden, in dem er steht.





# TASK 5 (input)
**Which parameters of this DOM element can be accessed from javascript?**
**What do these parameters do?**

- id und name: Namen für das Feld. Mit der id findet man es im JavaScript-Code, und der name wird beim Absenden des Formulars mitgeschickt.
- type: Die Art des Feldes, zum Beispiel text (Textfeld), checkbox (Kontrollkästchen) oder radio (Auswahlknopf).
- value: Der Inhalt des Feldes. Bei einem Textfeld ist das der Text, den jemand eingetippt hat. Man kann ihn lesen oder ändern.
- checked: Gilt nur für Kontrollkästchen und Radiobuttons. Es sagt, ob das Feld angehakt bzw. ausgewählt ist (true) oder nicht (false).
- disabled: Sagt, ob das Feld gesperrt ist. Bei true kann man nichts mehr eingeben oder anklicken.
- addEventListener("input", ...) oder addEventListener("change", ...): Damit sagt man dem Feld: “Wenn sich etwas ändert, führe diesen Code aus.”


For example:
const nameInput = document.getElementById("name");
Das Textfeld mit der ID name wird gesucht und in der Variable nameInput gespeichert.

console.log(nameInput.value);
Der aktuelle Inhalt des Textfeldes wird in die Konsole geschrieben. Die Konsole sieht man in den Entwicklertools (meist mit F12). Wenn das Feld noch leer ist, erscheint nichts.

nameInput.addEventListener("input", () => {
  console.log(nameInput.value);
});
Hier wird festgelegt, was bei jeder Eingabe passiert. Sobald jemand einen Buchstaben tippt oder löscht, wird der neue Inhalt des Feldes in die Konsole geschrieben. Tippt jemand “Anna”, sieht man nacheinander: “A”, “An”, “Ann”, “Anna”.


const agreeCheckbox = document.getElementById("agree");
console.log(agreeCheckbox.checked);
Das Kontrollkästchen mit der ID agree wird gesucht. Dann wird in die Konsole geschrieben, ob es angehakt ist: true bei einem Haken, false ohne Haken.

Der Unterschied zwischen input und change
input reagiert sofort bei jeder kleinen Änderung, also bei jedem getippten Buchstaben.
change reagiert erst, wenn die Änderung abgeschlossen ist, bei einem Textfeld zum Beispiel, wenn man es verlässt. Bei Kontrollkästchen reagiert es direkt beim Anklicken.






