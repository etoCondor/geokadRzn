//-----------------------
// Кнопка "наверх"
//-----------------------

const offset = 100;
const scrollUp = document.querySelector(".scrollUp");
const scrollUpPath = document.querySelector(".scrollUpPath");
const pathLength = scrollUpPath.getTotalLength();

scrollUpPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpPath.style.transition = `stroke-dashoffset 20ms`;

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// updateDashoffset
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  let dashoffset = pathLength - (getTop() * pathLength) / height;
  if (dashoffset < 0) {
    dashoffset = 0;
  }
  scrollUpPath.style.strokeDashoffset = dashoffset;
};

// onScroll
window.addEventListener("scroll", () => {
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add("scrollUpActive");
  } else {
    scrollUp.classList.remove("scrollUpActive");
  }
});

// клик
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//-----------------------
// плавная прокрутка
//-----------------------

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

//-----------------------
// Всплывающие окна
//-----------------------

let popUp = document.querySelector(".popUp");
let popUpContent = document.querySelector(".popUpContent");
let contactsButton = document.querySelector(".contactsButton");
let licenseButton = document.querySelector(".licenseButton");
let priceButton = document.querySelector(".priceButton");
let orderButton = document.querySelectorAll(".orderButton");
let contacts = document.querySelector(".contacts");
let license = document.querySelector(".license");
let order = document.querySelector(".order");
let price = document.querySelector(".price");
let closeButton = document.querySelector(".close");
let body = document.querySelector("body");

//показываем всплывающее окно
function openPop() {
  body.classList.add("noScroll"); //Запрещаем прокрутку окна
  popUp.style.display = "flex";
}

//скрываем все всплывающие окна
function closeAll() {
  popUp.scrollTo(0, 0);
  body.classList.remove("noScroll"); //Разрешаем прокрутку окна
  popUp.style.display = "none";
  contacts.style.display = "none";
  license.style.display = "none";
  order.style.display = "none";
  price.style.display = "none";
  popUpContent.style.height = "auto"; //костыль
  document.querySelector(".fields").style.display = ""; // тоже костыль
  document.querySelector(".note").innerHTML = "";
}

//показываем контакты
contactsButton.onclick = function () {
  openPop();
  contacts.style.display = "block";
  popUpContent.style.height = "100%"; //костыль
};

//показываем окно заказа
for (let i = 0; i < orderButton.length; i++) {
  orderButton[i].onclick = function () {
    openPop();
    order.style.display = "block";
    document.querySelector(".ajax-contact-form").reset();
  };
}

//показываем описание
licenseButton.onclick = function () {
  openPop();
  license.style.display = "block";
  popUpContent.style.height = "100%"; //костыль
};

//показываем цены
priceButton.onclick = function () {
  openPop();
  price.style.display = "block";
  popUpContent.style.height = "100%"; //костыль
};

//закрываем всплывающие окна по нажатию крестика
closeButton.onclick = closeAll;

//закрываем всплывающие окна  по клику вне блока
window.onclick = function (e) {
  if (e.target == popUp) {
    closeAll();
  }
};
