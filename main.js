let lastTime = null;
let totalTime = 0;

setInterval(function loop() {
  const currentTime = performance.now();
  if (lastTime == null) {
    lastTime = currentTime;
  }
  const deltaTime = currentTime - lastTime;
  totalTime += deltaTime;
  lastTime = currentTime;

  update(deltaTime);
}, 1000 / 60);

let food = 0;
let toggleFood = false;
const foodDisplay = document.getElementById("food");
const foodPerMs = 0.001;

let stone = 0;
let toggleStone = false;
const stoneDisplay = document.getElementById("stone");
const stonePerMs = 0.001;

let science = 0;
let toggleScience = false;
const scienceDisplay = document.getElementById("science");
const sciencePerMs = 0.001;

document.getElementById("hunt").addEventListener("click", function () {
  toggleFood = !toggleFood;
  toggleStone = false;
  toggleScience = false;
});

document.getElementById("gather").addEventListener("click", function () {
  toggleStone = !toggleStone;
  toggleFood = false;
  toggleScience = false;
});

document.getElementById("think").addEventListener("click", function () {
  toggleScience = !toggleScience;
  toggleFood = false;
  toggleStone = false;
});

function update(deltaTime) {
  if (toggleFood) food += foodPerMs * deltaTime;
  if (toggleStone) stone += stonePerMs * deltaTime;
  if (toggleScience) science += sciencePerMs * deltaTime;

  foodDisplay.textContent = "Food: " + food.toFixed(2);
  stoneDisplay.textContent = "Stone: " + stone.toFixed(2);
  scienceDisplay.textContent = "Science: " + science.toFixed(2);
}
