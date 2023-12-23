const container = document.querySelector(".container");

function addArticleToPage(article) {
  article.forEach((item) => {
    const newTitle = document.createElement("h2");
    newTitle.textContent = item.title;
    container.appendChild(newTitle);

    const newParagraph = document.createElement("p");
    newParagraph.textContent = item.body;
    container.appendChild(newParagraph);
  });
}

function sendRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => addArticleToPage(data))
    .catch((err) => console.log(`Error: ${err}`));
}

document.addEventListener("DOMContentLoaded", sendRequest);
