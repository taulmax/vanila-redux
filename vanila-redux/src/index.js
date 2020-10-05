import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector(".number");

const PLUS = "PLUS";
const MINUS = "MINUS";

number.innerText = 0;

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handlePlus = () => {
  countStore.dispatch({ type: PLUS });
}

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
}


plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);







const form = document.querySelector(".toDoForm");
const input = document.querySelector(".toDoInput");
const ul = document.querySelector(".toDoUl");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const toDoReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return state;
    case DELETE_TODO:
      return state;
    default:
      return state;
  }
};

const toDoStore = createStore(toDoReducer);

const onSubmit = e => {
  e.preventDefault();
  const task = input.value;
  input.value = "";
  toDoStore.dispatch({ type: ADD_TODO, text: task });
}

form.addEventListener("submit", onSubmit);