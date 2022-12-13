/* этот код помечает картинки, для удобства разработки */
let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

/* конфигурация */
let width = 330; // ширина картинки
let count = 5; // видимое количество изображений

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 1; // положение ленты прокрутки

carousel.querySelector(".prev").onclick = function () {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 5, а на 4 или 3 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};
