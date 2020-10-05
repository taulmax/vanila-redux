import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

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

countStore.dispatch({ type: "Plus" });
countStore.dispatch({ type: "Plus" });
countStore.dispatch({ type: "Plus" });
countStore.dispatch({ type: "Plus" });
countStore.dispatch({ type: "Minus" });
countStore.dispatch({ type: "Minus" });
countStore.dispatch({ type: "Minus" });
countStore.dispatch({ type: "Minus" });
countStore.dispatch({ type: "Minus" });
countStore.dispatch({ type: "Minus" });

console.log(countStore.getState());