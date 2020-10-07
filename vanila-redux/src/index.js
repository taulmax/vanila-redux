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

const addTask = (task) => {
  return {
    type: ADD_TODO,
    task
  }
};

const deleteTask = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
};

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { task: action.task, id: Date.now() }];
    case DELETE_TODO:
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
};

const toDoStore = createStore(toDoReducer);

toDoStore.subscribe(() => console.log(toDoStore.getState()));

const dispatchAddTask = (task) => {
  toDoStore.dispatch(addTask(task));
}

const dispatchDeleteTask = (e) => {
  const id = parseInt(e.target.parentNode.id);
  toDoStore.dispatch(deleteTask(id));
}

const paintTasks = () => {
  const tasks = toDoStore.getState();
  ul.innerText = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.id = task.id;
    li.innerText = task.task;
    btn.innerText = "❌";
    li.appendChild(btn);
    btn.addEventListener("click", dispatchDeleteTask);
    ul.appendChild(li);
  });
}

toDoStore.subscribe(paintTasks);


const onSubmit = e => {
  e.preventDefault();
  const task = input.value;
  input.value = "";
  dispatchAddTask(task);
}

form.addEventListener("submit", onSubmit);