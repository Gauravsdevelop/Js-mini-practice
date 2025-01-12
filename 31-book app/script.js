const categoriesApiUrl = "https://books-backend.p.goit.global/books/category-list";
const booksApiUrl = "https://books-backend.p.goit.global/books/top-books";

// Function to populate categories
async function loadCategories() {
  const categoriesList = document.getElementById("categories");

  try {
    const response = await fetch(categoriesApiUrl);
    const data = await response.json();

    data.forEach((category) => {
      const li = document.createElement("li");
      li.textContent = category.list_name;
      li.onclick = () => loadBooks(category.list_name);
      categoriesList.appendChild(li);
    });
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

// Function to fetch and display books
async function loadBooks(categoryName) {
  const pageTitle = document.getElementById("page-title");
  const booksGrid = document.getElementById("books-grid");

  pageTitle.textContent = categoryName;
  booksGrid.innerHTML = ""; // Clear previous books

  try {
    const response = await fetch(booksApiUrl);
    const data = await response.json();

    data.forEach((book) => {
      if (book.list_name === categoryName) {
        book.books.forEach((bookDetail) => {
          const bookCard = document.createElement("div");
          bookCard.className = "book-card";

          bookCard.innerHTML = `
            <img src="${bookDetail.book_image}" alt="${bookDetail.title}" />
            <h3>${bookDetail.title}</h3>
            <p>${bookDetail.author}</p>
            <p class="details">${bookDetail.description}</p>
          `;

          booksGrid.appendChild(bookCard);
        });
      }
    });
  } catch (error) {
    console.error("Error loading books:", error);
    booksGrid.innerHTML = "<p>Failed to load books. Please try again later.</p>";
  }
}


// Function to toggle Light and Dark Mode
function toggleTheme() {
    const themeButton = document.getElementById("themeButton");
    const body = document.body;
  
    // Toggle the light-mode class on the body
    body.classList.toggle("light-mode");
  
    // Update the button text based on the current mode
    if (body.classList.contains("light-mode")) {
      themeButton.textContent = "🌙 Dark Mode";
    } else {
      themeButton.textContent = "🌞 Light Mode";
    }
  }
  
  // Add event listener to the theme toggle button
  document.getElementById("themeButton").addEventListener("click", toggleTheme);
  

// Initialize categories on page load
loadCategories();
