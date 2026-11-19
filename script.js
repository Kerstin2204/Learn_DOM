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

//TASK 5 (form)
const myForm = document.getElementById("myForm");
const formOutput = document.getElementById("myDiv");
myForm.addEventListener("change", (event) => {
  if (event.target.name !== "size" && event.target.name !== "agree") return;

  const name = myForm.elements.namedItem("name").value.trim() || "Guest";
  const color = myForm.elements.namedItem("color").value;
  const selectedSize = myForm.querySelector('input[name="size"]:checked');
  const size = selectedSize ? selectedSize.value : "no size selected";
  const agreement = myForm.elements.namedItem("agree").checked ? "agreed" : "disagreed";
  formOutput.textContent = `${name} chose ${color}, ${size} and ${agreement}.`;
});

//TASK 5 (button)
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  submitBtn.textContent = "Clicked!";
});

//TASK 5 (input)
const nameInput = document.getElementById("name");
const inputOutput = document.getElementById("myDiv");
nameInput.addEventListener("input", () => {
  inputOutput.textContent = nameInput.value ? `Name: ${nameInput.value}` : "Name cleared.";
});

