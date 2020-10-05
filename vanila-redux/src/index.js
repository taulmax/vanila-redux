const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateCount = () => {
  number.innerText = count;
}

const handlePlus = () => {
  count = count + 1;
  updateCount();
}

const handleMinus = () => {
  count = count - 1;
  updateCount();
}

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);