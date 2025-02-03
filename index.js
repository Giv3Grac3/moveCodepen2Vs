const myBox = document.getElementById("myBox");
console.log(myBox);

myBox.addEventListener("click", function (event) {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH! 🤕";
});
