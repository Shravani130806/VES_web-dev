function changeLanguage() {
  document.getElementById("portfolioText").innerText =
    "Je suis une étudiante en deuxième année d’ingénierie passionnée par le développement web, l’apprentissage de nouvelles technologies et la création de projets créatifs pour améliorer mes compétences.";
}
let count = 1;

function addItem() {
  const input = document.getElementById("itemInput");
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter an item");
    return;
  }

  const ul = document.getElementById("dynamicList");
  const li = document.createElement("li");

  li.textContent = text;

  ul.appendChild(li);

  input.value = ""; // clear input
}
function removeLastItem() {
  const ul = document.getElementById("dynamicList");

  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  } else {
    alert("List is already empty");
  }
}
function changeBg(colorClass) {
  document.body.className = colorClass + " text-gray-900";
}

