// Write your code here!
const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";




const element1 = document.getElementById("main");
element1.style.height = "300px";
element1.style.backgroundColor = "#27647B";

element1.textContent = "You've changed what's on the screen!";

element1.style.fontSize = "24px";
element1.style.marginLeft = "30px";
element1.style.lineHeight = 2;

element1.className = "pet-listing dog";

element1.classList.remove("dog");
element1.classList.add("cat", "sale");

const ul1 = document.getElementsByTagName("ul")[0];
const secondChild = ul1.querySelector("li:nth-child(2)");
ul1.removeChild(secondChild);

ul1.remove();