import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcYqJXeOMJQTDloW6zisz-HPx1MPuu4I",
  authDomain: "scientific-conference-d56ea.firebaseapp.com",
  databaseURL:
    "https://scientific-conference-d56ea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scientific-conference-d56ea",
  storageBucket: "scientific-conference-d56ea.appspot.com",
  messagingSenderId: "321832621840",
  appId: "1:321832621840:web:6d9f28994c26dbb09b1788",
  measurementId: "G-1ZVJZBWXQV",
};

const institutions = [
  "Софийски университет „Св. Климент Охридски“",
  "Технически университет - София",
  "Университет за национално и световно стопанство",
  "Нов български университет",
  "Минно-геоложки университет „Св. Иван Рилски“",
  "Лесотехнически университет - София",
  "Университет по архитектура, строителство и геодезия",
  "Медицински университет - София",
  "Медицински университет - Пловдив",
  "Медицински университет - Варна",
  "Медицински университет - Плевен",
  "Пловдивски университет „Паисий Хилендарски“",
  "Великотърновски университет „Св. Св. Кирил и Методий“",
  "Русенски университет „Ангел Кънчев“",
  "Шуменски университет „Епископ Константин Преславски“",
  "Югозападен университет „Неофит Рилски“",
  "Бургаски университет „Проф. Асен Златаров“",
  "Аграрен университет - Пловдив",
  "Тракийски университет - Стара Загора",
  "Висше училище по телекомуникации и пощи",
  "Висше транспортно училище „Тодор Каблешков“",
  "Висше строително училище „Любен Каравелов“",
  "Национална спортна академия „Васил Левски“",
  "Академия на МВР",
  "Военна академия „Г. С. Раковски“",
  "Национална художествена академия",
  "Национална музикална академия „Проф. Панчо Владигеров“",
  "Държавна консерватория - Пловдив",
  "Американски университет в България",
  "Европейско висше училище по икономика и мениджмънт",
  "Висше училище по мениджмънт - Варна",
  "Международно висше бизнес училище - Ботевград",
  "Колеж по телекомуникации и пощи",
  "Колеж по икономика и администрация - Пловдив",

  "ПМГ „Васил Друмев“ - Велико Търново",
  "ПМГ „Гео Милев“ - Стара Загора",
  "ПМГ „Акад. Иван Гюзелев“ - Габрово",
  "ПМГ „Никола Обрешков“ - Казанлък",
  "ПМГ „Екзарх Антим I“ - Видин",
  "ПМГ „Яне Сандански“ - Сандански",
  "ПМГ „Св. Климент Охридски“ - Монтана",
  "ПМГ „Акад. Боян Петканчин“ - Хасково",
  "ПМГ „Проф. Емануил Иванов“ - Кюстендил",
  "ПМГ „Добри Чинтулов“ - Сливен",

  "ЕГ „Пловдив“ - Пловдив",
  "ЕГ „Гео Милев“ - Бургас",
  "ЕГ „Иван Вазов“ - Смолян",
  "ЕГ „Пейо Яворов“ - Петрич",
  "ЕГ „Христо Ботев“ - Кърджали",
  "ЕГ „Акад. Людмил Стоянов“ - Благоевград",
  "ЕГ „Д-р Петър Берон“ - Варна",
  "ЕГ „Проф. д-р Асен Златаров“ - Хасково",

  "ПГЕЕ „М. В. Ломоносов“ - Горна Оряховица",
  "ПГЕЕ „К. Фотинов“ - Бургас",
  "ПГЕЕ „А. С. Попов“ - Варна",
  "ПГЕЕ „Т. Каблешков“ - Стара Загора",
  "ПГЕЕ „Джон Атанасов“ - София",
  "ПГЕЕ „Н. Й. Вапцаров“ - Русе",

  "ПГ по туризъм „Васил Левски“ - Велико Търново",
  "ПГ по туризъм „Проф. д-р Асен Златаров“ - Бургас",
  "ПГ по туризъм „Иван П. Павлов“ - Русе",

  "ПГ по икономика „Тодор Влайков“ - Костинброд",
  "ПГ по икономика „Елиас Канети“ - Русе",
  "ПГ по икономика „Благоевград“ - Благоевград",

  "СУ „Вичо Грънчаров“ - Горна Оряховица",
  "СУ „Св. Патриарх Евтимий“ - Пловдив",
  "СУ „Св. Климент Охридски“ - Добрич",
  "СУ „Христо Ботев“ - Враца",
  "СУ „Св. Паисий Хилендарски“ - Пловдив",
  "СУ „Максим Райкович“ - Лясковец",
  "СУ „Георги Измирлиев“ - Горна Оряховица",

  "ОУ „Св. Св. Кирил и Методий“ - Горна Оряховица",
  "ОУ „Иван Вазов“ - Велико Търново",
  "ОУ „Христо Ботев“ - София",
  "ОУ „П. Р. Славейков“ - Варна",
  "ОУ „Д-р Петър Берон“ - Бургас",
  "ОУ „Св. Климент Охридски“ - Пловдив",

  "ЧСУ „Американски колеж“ - София",
  "ЧСУ „Малкият принц“ - Варна",
  "ЧСУ „Евлоги и Христо Георгиеви“ - София",
  "ЧСУ „Образователни технологии“ - София",
  "ЧСУ „Рьорих“ - София",
  "ЧСУ „Свети Георги“ - София",
  "ЧСУ „Меридиан 22“ - София",
  "ЧСУ „Дружба“ - Пловдив",
  "ЧСУ „Британика“ - София",
  "ЧСУ „Увекинд“ - София",
];

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const form = document.getElementById("contactForm");

const institutionInput = document.getElementById("institution");
const institutionList = document.getElementById("institution-list");

institutionInput.addEventListener("input", () => {
  const value = institutionInput.value.toLowerCase();
  institutionList.innerHTML = "";

  if (value.length === 0) return;

  const filtered = institutions.filter((inst) =>
    inst.toLowerCase().startsWith(value),
  );

  filtered.forEach((inst) => {
    const item = document.createElement("div");
    item.classList.add("autocomplete-item");
    item.textContent = inst;

    item.addEventListener("click", () => {
      institutionInput.value = inst;
      institutionList.innerHTML = "";
    });

    institutionList.appendChild(item);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const surname = document.getElementById("surname").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const status = document.getElementById("status").value;
  const speciality = document.getElementById("speciality").value;
  const institution = document.getElementById("institution").value;
  const topic = document.getElementById("topic").value;
  const consultant = document.getElementById("consultant").value;
  const thematicDirection = document.getElementById("thematic-direction").value;
  const summary = document.getElementById("summary").value;
  const software = document.getElementById("software").value;

  push(ref(db, "messages"), {
    firstName,
    surname,
    lastName,
    email,
    status,
    speciality,
    institution,
    topic,
    consultant,
    thematicDirection,
    summary,
    software,
    timestamp: new Date().toLocaleDateString("bg-BG"),
  });

  form.reset();
  alert("Регистрацията е успешна!");
});
