const categories = [
    "Middle Grade Paperback Monthly",
    "Trade Fiction Paperback",
    "Childrens Middle Grade Hardcover",
    "Advice How-To and Miscellaneous",
    "Young Adult Hardcover",
    "Audio Nonfiction",
    "Hardcover Fiction",
    "Graphic Books and Manga",
    "Picture Books",
    "Series Books",
  ];
  
  const apiUrl = "https://books-backend.p.goit.global/books/category-list";
  
  // Function to populate categories
  function loadCategories() {
    const categoriesList = document.getElementById("categories");
    categories.forEach((category, index) => {
      const li = document.createElement("li");
      li.textContent = category;
      li.onclick = () => loadBooks(category, index);
      categoriesList.appendChild(li);
    });
  }
  
  // Function to fetch and display books
  async function loadBooks(category, index) {
    const pageTitle = document.getElementById("page-title");
    const booksGrid = document.getElementById("books-grid");
  
    pageTitle.textContent = category;
    booksGrid.innerHTML = ""; // Clear previous books
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const selectedCategory = data[index]?.books || [];
  
      selectedCategory.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
  
        bookCard.innerHTML = `
          <img src="${book.book_image}" alt="${book.title}" />
          <h3>${book.title}</h3>
          <p>${book.author}</p>
        `;
  
        booksGrid.appendChild(bookCard);
      });
    } catch (error) {
      console.error("Error loading books:", error);
      booksGrid.innerHTML = `<p>Failed to load books. Please try again later.</p>`;
    }
  }
  
  // Dark and Light Mode Toggle
  const themeButton = document.getElementById("themeButton");
  const body = document.body;
  
  // Check for saved theme preference in localStorage
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme) {
    body.classList.add(savedTheme);
    themeButton.textContent = savedTheme === "light-mode" ? "🌙 Dark Mode" : "🌞 Light Mode";
  }
  
  // Toggle Theme Functionality
  themeButton.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      themeButton.textContent = "🌞 Light Mode";
      localStorage.setItem("theme", "");
    } else {
      body.classList.add("light-mode");
      themeButton.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light-mode");
    }
  });
  
  // Initialize categories on page load
  loadCategories();
  