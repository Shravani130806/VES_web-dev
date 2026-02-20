function changeLanguage() {
  document.getElementById("portfolioText").innerText =
    "Je suis une étudiante en deuxième année d’ingénierie passionnée par le développement web, l’apprentissage de nouvelles technologies et la création de projets créatifs pour améliorer mes compétences.";
}
let count = 1;

function addItem() {
  const ul = document.getElementById("dynamicList");

  const li = document.createElement("li");
  li.textContent = "List item " + count;

  ul.appendChild(li);

  count++;
}
