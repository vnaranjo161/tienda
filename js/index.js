let counter = 0;
let counterElement = document.getElementById("counter");
let incrementButtons = document.getElementsByClassName("incrementButton");

for (let i = 0; i < incrementButtons.length; i++) {
  incrementButtons[i].addEventListener("click", function() {
    counter++;
    counterElement.innerText = counter;
  });
}