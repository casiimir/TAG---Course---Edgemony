// const cE = (type) => document.createElement(type);
const qS = (type) => document.querySelector(type);

function cE(type) {
  // counter = counter + 1;
  // counter += 1
  // counter ++
  return document.createElement(type);
}

// Definizione - parametri
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

const cardGen = ({ id, title, thumbnail }) => {
  const cardEl = cE("div");
  const titleEl = cE("h3");
  const imageEl = cE("img");
  const buttonEl = cE("button");

  cardEl.id = id;
  cardEl.className = "card";
  titleEl.textContent = title;
  imageEl.src = thumbnail;
  buttonEl.textContent = "X";

  cardEl.append(titleEl, imageEl, buttonEl);

  buttonEl.addEventListener("click", () => {
    bodyEl.textContent = "";
  });

  return cardEl;
};

export { qS, cE, sum, cardGen };
