TASK 1:
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





TASK 2
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





