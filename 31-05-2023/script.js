const GET = async (endpoint) => {
  const res = await fetch(endpoint);

  try {
    if (!res.ok) throw new Error("Request failed!");
  } catch (error) {
    console.error(error);
  }
  const data = await res.json();

  return data;
};

let postsList = [];
let usersList = [];

// Chiamata REST API in parallelo
// const resData = Promise.all([
//   GET("https://dummyjson.com/posts"),
//   GET("https://dummyjson.com/users"),
// ])
//   .then((res) => {
//     postsList = res[0];
//     usersList = res[1];
//   })
//   .then(() => console.log(postsList, usersList));

// Chiamata REST API in serie
// GET("https://dummyjson.com/posts").then((data) =>
//   GET("https://dummyjson.com/users")
// );

const onHandleSubmit = (event) => {
  const username = event.target[0].value;
  const password = event.target[1].value;

  event.preventDefault();

  fetch("https://dummyjson.com/users/add", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  });
};

const qS = (type) => document.querySelector(type);

const colorInputEl = qS(".color");
const dateInputEl = qS(".date");
const textInputEl = qS(".text");

// colorInputEl.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// dateInputEl.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// textInputEl.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

const formEl = qS("form");

formEl.addEventListener("submit", onHandleSubmit);

// setTimeout(() => console.log("Esecuzione dopo 1 secondo"), 1000);

// console.log("Esecuzione istantanea");

// setInterval(() => {
//   console.log(`${new Date().getHours()}:${new Date().getMinutes()}`);
// }, 1000);
