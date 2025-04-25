const searchBar = document.getElementById("searchBar");
const searchResult = document.getElementById("searchResult");
const searchButton = document.getElementById("searchButton");
const page = document.querySelector("body");

searchResult.style.visibility = "hidden";

function searchFunc() {
  const value = searchBar.value;

  if (value) {
    const textFormated = formatString(`Você buscou por: '${value}'`);
    searchResult.innerText = textFormated;
    searchResult.style.visibility = "visible";
  } else {
    searchResult.style.visibility = "hidden";
  }

  page.addEventListener("click", () => {
    searchResult.style.visibility = "hidden";
  });
}

searchButton.addEventListener("click", (e) => {
  e.stopPropagation();
  searchFunc();
});

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchFunc();
  }
});

function formatString(value) {
  return value.trim();
}

