const myBox = document.getElementById("myBox");
console.log(myBox);

function changeColor(event) {
  // I do not see pointerEvent under inspect, console
  // console.log(event);
  event.target.style.backgroundColor = "tomato";
  event.targettextContent = "OUCH! 🤕"
}

myBox.addEventListener("click", changeColor);
