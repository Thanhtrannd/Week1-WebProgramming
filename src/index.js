import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const myButton = document.getElementById("my-button");
  const addNoteButton = document.getElementById("add-data");

  myButton.addEventListener("click", function () {
    console.log("hello world");

    const h1Elem = document.getElementById("sec1");
    h1Elem.innerText = "My notebook";
  });

  addNoteButton.addEventListener("click", function () {
    const listElem = document.getElementById("list");
    let newNoteText = document.getElementById("note").value;

    let newNoteElem = document.createElement("li");
    newNoteElem.innerText = newNoteText;

    listElem.appendChild(newNoteElem);
  });
}
