let count = 0;
let counter = document.getElementById("counter");

function decrease() {
  count--;
  counter.textContent = count;
}

function reset() {
  count = 0;
  counter.textContent = count;
}

function increase() {
  count++;
  counter.textContent = count;
}
