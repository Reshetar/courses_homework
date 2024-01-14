let content = document.querySelector("#list");
let paginationSection = document.querySelector("#pagination");
const itemsPerPage = 3;
let currentPage = 0;
let items = Array.from(content.getElementsByTagName("div")).slice(0);

function showPage(page) {
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  items.forEach((item, index) => {
    item.classList.toggle("hidden", index < startIndex || index >= endIndex);
  });
  updateActiveButtonStates();
}

function createPageButtons() {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginationContainer = document.createElement("div");
  const paginationDiv = document.body.appendChild(paginationContainer);
  paginationContainer.classList.add("pagination");

  // Add page buttons
  for (let i = 0; i < totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i + 1;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      showPage(currentPage);
      updateActiveButtonStates();
    });

    content.appendChild(paginationContainer);
    paginationSection.appendChild(pageButton);
  }
}

function updateActiveButtonStates() {
  const pageButtons = document.querySelectorAll(".pagination button");
  pageButtons.forEach((button, index) => {
    if (index === currentPage) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

function updateActiveButtonStates2() {
  const pageButtons2 = document.querySelectorAll(".pagination button");
  pageButtons2.forEach((button, index) => {
    if (index === currentPage2) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

createPageButtons(); // Call this function to create the page buttons initially
showPage(currentPage);
