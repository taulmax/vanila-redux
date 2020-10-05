import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === "Plus") {
    return count + 1;
  } else if (action.type === "Minus") {
    return count - 1;
  } else {
    return count;
  }
}
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handlePlus = () => {
  countStore.dispatch({ type: "Plus" });
}

const handleMinus = () => {
  countStore.dispatch({ type: "Minus" });
}


plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);