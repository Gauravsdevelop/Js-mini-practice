let color_and_text = document.querySelector(".color_and_text").children;
let input = color_and_text[1].children[0];
input.value = "#00ffa1";
let button = document.querySelector("button");
let right_container = document.querySelector(".right-container-notes");
let textarea=document.querySelector("textarea");

let button2 = document.querySelectorAll(".buttons");

button.addEventListener("click", () => {
  if (color_and_text[0].value == "") {
    textarea.classList.add("animate__shakeX");
    alert("Enter Some Text"); 
    return;
  }
  textarea.classList.remove("animate__shakeX");
  addNotes(color_and_text[0].value, input.value);
  color_and_text[0].value = "";
  document.querySelector(".notesNotAdded").style.display = "none";
  button2 = document.querySelectorAll(".buttons");
  removeNotes();
});

function addNotes(note, color) {
  div1 = document.createElement("div");
  div1.innerHTML = `<p>${note}</p> <button class="buttons" >X</button>`;
  div1.style.backgroundColor = `${color}`;
  div1.classList.add("notes");
  right_container.appendChild(div1);
  allNotes = document.querySelectorAll(".notes");
  console.log("all notes=", allNotes);
}
function removeNotes() {
  button2 = document.querySelectorAll(".buttons");
  button2.forEach((val, idx) => {
    val.addEventListener("click", () => {
      val.parentElement.remove();
    });
  });
}
