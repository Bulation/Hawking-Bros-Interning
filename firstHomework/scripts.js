const loadBtn = document.querySelector(".load-button");
const usersLoadBtn = document.querySelector(".users-load-button");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const GITHUB_USERS_URL = "https://api.github.com/users/";

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault(); //fix error of reloading
  const searchValue = searchInput.value.trim().toLowerCase();
  if (!searchValue) {
    return;
  }
  fetch(`${GITHUB_USERS_URL}${searchValue}`)
    .then((data) => data.json()) //fix error of rendering undefined values
    .then((data) => {
      resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`
    })
    .catch((err) => console.error(err));
});

usersLoadBtn.addEventListener("click", function (evt) {
  evt.preventDefault(); //fix error of reloading
  resultsContainer.innerHTML = ''; 
  axios.get(USERS_URL)
    .then((response) => response.data.forEach((user) => {
        resultsContainer.innerHTML += `<div class="response-container">
                <p> id: <span>${user.id}</span><p>
                <p> Name: <span>${user.name}</span><p>
                <p> Username: <span>${user.username}</span><p>
                <p> Email: <span>${user.email}</span><p>
                <p> Phone: <span>${user.phone}</span><p>
                <p> Website: <span>${user.website}</span><p>
            </div>`
    }))
    .catch((err) => console.error(err));
});
