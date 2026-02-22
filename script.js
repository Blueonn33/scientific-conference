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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const surname = document.getElementById("surname").value;
  const lastName = document.getElementById("last-name").value;
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
  alert("Изпратено успешно!");
});
