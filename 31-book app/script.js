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

    let booksLoaded = 0;
    data.forEach((book) => {
      if (book.list_name === categoryName) {
        book.books.forEach((bookDetail) => {
          if (booksLoaded < 50) {  // Limit the books to 50
            const bookCard = document.createElement("div");
            bookCard.className = "book-card";

            bookCard.innerHTML = `
              <img src="${bookDetail.book_image}" alt="${bookDetail.title}" />
              <h3>${bookDetail.title}</h3>
              <p>${bookDetail.author}</p>
              <p class="details">${bookDetail.description}</p>
            `;

            bookCard.onclick = () => openPopup(bookDetail); // Open popup on click
            booksGrid.appendChild(bookCard);
            booksLoaded++;
          }
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

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    themeButton.textContent = "🌙 Dark Mode";
  } else {
    themeButton.textContent = "🌞 Light Mode";
  }
}

document.getElementById("themeButton").addEventListener("click", toggleTheme);

// Function to show book details popup
function openPopup(book) {
  document.getElementById("bookTitle").textContent = book.title;
  document.getElementById("bookImage").src = book.book_image;
  document.getElementById("bookAuthor").textContent = book.author;
  document.getElementById("bookDescription").textContent = book.description;

  document.getElementById("bookPopup").style.display = "flex";
}

// Function to close book details popup
function closePopup() {
  document.getElementById("bookPopup").style.display = "none";
}

// Modal handling code
function showSignUpModal() {
  document.getElementById("signUpModal").style.display = "flex";
}

function closeSignUpModal() {
  document.getElementById("signUpModal").style.display = "none";
}

function showLoginModal() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

function signUp() {
  // Implement your sign up logic here
  closeSignUpModal();
}

function login() {
  // Implement your login logic here
  closeLoginModal();
}

// Initialize the page
loadCategories();
