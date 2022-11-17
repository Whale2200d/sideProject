const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

searchBarContainerEl.addEventListener("click", ()=>{
  searchBarContainerEl.classList.toggle("active");
});
