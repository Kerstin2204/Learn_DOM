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





# TASK 5 (select/option)
**Which parameters of this DOM element can be accessed from javascript?**
**What do these parameters do?**

Was man am <select> ansprechen kann
- id und name: Namen für das Menü. Mit der id findet man es im Code, der name wird beim Absenden des Formulars mitgeschickt.
- value: Der Wert der aktuell gewählten Option, zum Beispiel "red".
- options: Eine Liste aller Optionen im Menü. Damit kann man alle Einträge durchgehen.
- selectedIndex: Die Positionsnummer der gewählten Option. Gezählt wird ab 0, die erste Option hat also die Nummer 0, die zweite die Nummer 1 und so weiter.
- disabled: Sagt, ob das ganze Menü gesperrt ist.

Was man an jeder <option> ansprechen kann
- value: Der Wert, der intern verwendet und beim Absenden mitgeschickt wird.
- text: Der Text, den der Nutzer im Menü sieht.
- selected: Sagt, ob diese Option gerade ausgewählt ist.
- disabled: Sagt, ob man diese einzelne Option wählen kann.

Mit value liest man, was intern gewählt ist. Mit text liest man, was der Nutzer auf dem Bildschirm sieht.

const colorSelect = document.getElementById("color");
Das Menü mit der ID color wird gesucht und in der Variable colorSelect gespeichert.

console.log(colorSelect.value); // "red", "green", or "blue"
Der Wert der gewählten Option wird in die Konsole geschrieben (die Konsole sieht man in den Entwicklertools, meist mit F12). Ist “Grün” gewählt, erscheint green. Der Kommentar dahinter sagt nur, welche drei Werte hier möglich sind.

console.log(colorSelect.selectedOptions[0].text);
Hier geht es um den sichtbaren Text statt um den Wert. selectedOptions ist eine Liste der gewählten Optionen. Bei einem normalen Menü ist da nur eine drin, und [0] holt diese erste. Mit .text bekommt man dann deren Beschriftung, zum Beispiel “Grün”.

colorSelect.addEventListener("change", () => {
  console.log(colorSelect.value);
});
Das legt fest, was bei einer Änderung passiert. Immer wenn der Nutzer eine andere Option wählt, wird der neue Wert in die Konsole geschrieben.





# TASK 5 (canvas)
**Which parameters of this DOM element can be accessed from javascript?**
**What do these parameters do?**

Zeichenfläche auf der Webseite, auf der man mit JavaScript Formen, Text und Bilder zeichnen kann. Im Gegensatz zu den früheren Beispielen (Formular, Button, Eingabefeld, Auswahlmenü) gibt es hier keinen festen Inhalt, den man ausliest. Man malt selbst.

Was man am Canvas ansprechen kann
id: Der Name, mit dem man die Zeichenfläche im Code findet. Hier myCanvas.
width und height: Die Breite und Höhe der Zeichenfläche in Pixeln.
getContext("2d"): Gibt das eigentliche Zeichenwerkzeug zurück. Das Canvas selbst ist nur die leere Fläche. Gezeichnet wird mit dem sogenannten “Kontext”. Das "2d" bedeutet, dass man flach (zweidimensional) zeichnet.

const canvas = document.getElementById("myCanvas");
Die Zeichenfläche mit der ID myCanvas wird gesucht und in der Variable canvas gespeichert.

const context = canvas.getContext("2d");
Vom Canvas holt man sich das Zeichenwerkzeug und speichert es in context. Alle Zeichenbefehle laufen ab jetzt über context.

context.fillStyle = "blue";
Hier wird die Füllfarbe festgelegt: Blau. Das zeichnet noch nichts, es legt nur fest, womit die nächsten Formen gefüllt werden.

context.fillRect(10, 10, 100, 50);
Jetzt wird ein gefülltes Rechteck gezeichnet. Die vier Zahlen bedeuten der Reihe nach:

10: Abstand vom linken Rand (x)
10: Abstand vom oberen Rand (y)
100: Breite des Rechtecks
50: Höhe des Rechtecks
Man bekommt also ein blaues Rechteck, 100 Pixel breit und 50 Pixel hoch, das 10 Pixel vom linken und vom oberen Rand entfernt beginnt. Wichtig: Die Zählung beginnt oben links. Mit größerem y wandert man nach unten.





# TASK 5 (div)
**Which parameters of this DOM element can be accessed from javascript?**
**What do these parameters do?**

Container auf der Webseite. Ein <div> hat von sich aus kein besonderes Aussehen und keine feste Aufgabe. Man nutzt es, um Inhalte zu gruppieren, und mit JavaScript kann man Text, Aussehen und Verhalten steuern.

Was man am <div> ansprechen kann
- id: Der Name, mit dem man das <div> im Code findet. Hier myDiv.
- textContent: Der Text, der im <div> steht. Man kann ihn lesen oder ersetzen.
- style: Das Aussehen direkt am Element, zum Beispiel Farben, Größen oder Abstände. Man ändert damit CSS-Eigenschaften per Code.
- classList: Die CSS-Klassen des Elements. Damit kann man Klassen hinzufügen (add), entfernen (remove) oder prüfen (contains). Das ist praktisch, wenn man das Aussehen in einer CSS-Datei festlegt und im Code nur umschaltet.
- children: Eine Liste aller Elemente, die direkt im <div> stehen, zum Beispiel Absätze oder Buttons.
- addEventListener(...): Damit sagt man dem <div>: “Wenn etwas passiert (zum Beispiel ein Klick), führe diesen Code aus.”

const myDiv = document.getElementById("myDiv");
Das <div> mit der ID myDiv wird gesucht und in der Variable myDiv gespeichert.

myDiv.textContent = "The text has changed.";
Der Text im <div> wird ersetzt. Was vorher dort stand, ist weg, und auf der Seite steht jetzt “The text has changed.”

myDiv.style.backgroundColor = "lightblue";
Die Hintergrundfarbe wird auf Hellblau gesetzt.

myDiv.addEventListener("click", () => {
  console.log("The div was clicked");
});
Hier wird festgelegt, was bei einem Klick passiert.


# TASK 5 (ul)
**Which parameters of this DOM element can be accessed from javascript?**
**What do these parameters do?**
Die Liste (<ul>) ist der Container, jeder <li> ist ein einzelner Eintrag darin.

- id: Der Name, mit dem man die Liste im Code findet. Hier myList.
- children: Eine Liste aller direkten Kind-Elemente, hier also aller <li>-Einträge. Man kann sie durchgehen oder einzeln ansprechen, zum Beispiel myList.children[0] für den ersten Eintrag.
- childElementCount: Die Anzahl der Kind-Elemente. Das ist dasselbe wie children.length, nur direkt als Zahl.
- textContent: Der gesamte Text in der Liste, alle Einträge zusammen. Wenn man ihn setzt, werden alle Einträge ersetzt. Das ist meistens nicht gewollt.
- append(...): Fügt ein neues Element oder Text am Ende der Liste hinzu.
- addEventListener(...): Reagiert auf Ereignisse wie Klicks auf die Liste.

const myList = document.getElementById("myList");
Die Liste mit der ID myList wird gesucht und in der Variable myList gespeichert.

console.log(myList.children.length);
children ist die Sammlung aller Einträge, .length ist deren Anzahl.

const newItem = document.createElement("li");
Ein neuer, leerer <li>-Eintrag wird erzeugt. Er existiert jetzt nur im Speicher und ist auf der Seite noch nicht zu sehen.

newItem.textContent = "New item";
Der neue Eintrag bekommt seinen Text: “New item”

myList.append(newItem);
Jetzt wird der neue Eintrag ans Ende der Liste gehängt. Erst ab diesem Moment erscheint er auf der Seite.

