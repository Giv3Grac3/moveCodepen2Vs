const myBox = document.getElementById("myBox");
console.log(myBox);

function changeColor(event) {
  console.log(event);
  //   event.target.style.backgroundColor = "tomato";
  //   event.targettextContent = "OUCH! 🤕"
}

myBox.addEventListener("click", changeColor);
