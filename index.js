let word = "elephant";

let chances = 5;

let wordEL = document.getElementById("word");

for (let i = 0; i < word.length; i++) {
  let letter = document.createElement("div");
  letter.setAttribute("id", i.toString());
  letter.className = word[i];
  letter.classList.add("text");
  wordEL.appendChild(letter);
}

const handleKeyDown = (el) => {
  let keyPressed = el.key.toLowerCase();
  let elements = document.getElementsByClassName(keyPressed);

  if (elements.length === 0) {
    chances--;
    console.log("Lives decreased by 1");
  }

  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = keyPressed;
  }
};

document.addEventListener("keydown", handleKeyDown);
