//TASK 1+2
const myTable = document.getElementById("myTable");

const tabelle = document.getElementById("myTable");
tabelle.tBodies[0].rows[0].cells[1].textContent = "30";

//TASK 3 (table)
const newRow = myTable.insertRow();
const cell1 = newRow.insertCell();
cell1.textContent = "Lisa";

const cell2 = newRow.insertCell();
cell2.textContent = "32";
myTable.tBodies[0].deleteRow(1);

myTable.tHead.style.fontStyle = "italic";

