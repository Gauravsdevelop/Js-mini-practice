let searchemg = document.getElementById("search");
let displayEmg = document.getElementById("display-emoji");
let filterEmg = document.getElementById("filter-emogi");

filterEmg.addEventListener("click", (e) => {
    const button = e.target.closest(".filter-btn");
    
    if (button) {
        e.preventDefault();
        const category = button.getAttribute("data-category");
        filterFunction(category);
    }
});

let filterFunction = (value) => {
    let filteredData;

    if (value.toLowerCase() === "all") {
        filteredData = emojiList;
    } else {
        filteredData = emojiList.filter(e => {
            if (e.description.toLowerCase().includes(value.toLowerCase())) {
                return true;
            }
            if (e.aliases.some(alias => alias.toLowerCase().startsWith(value.toLowerCase()))) {
                return true;
            }
            if (e.tags.some(tag => tag.toLowerCase().startsWith(value.toLowerCase()))) {
                return true;
            }
            return false;
        });
    }

    displayEmoji(filteredData);
};


function displayEmoji(value = emojiList) {
    displayEmg.innerHTML = "";
    value.forEach(e => {
        let newEmojiContainer = document.createElement("div");
        let emoji_box = document.createElement("span");
        emoji_box.style.width = "50px";
        emoji_box.style.fontSize = "50px";
        emoji_box.innerText = e.emoji;
        emoji_box.classList.add('animate__animated', 'animate__backInDown');
        emoji_box.style.cursor = "pointer";
        displayEmg.append(emoji_box);
    });
}

window.addEventListener("load", () => {
    displayEmoji(emojiList);
});

searchemg.addEventListener('keyup', (event) => {
    let value = event.target.value;
    filterFunction(event.target.value);
});

displayEmg.addEventListener("click", (e) => {
     navigator.clipboard.writeText(e.target.innerText);

     alert("Copied to clipboard");
    console.log( e.target);
});

// displayEmg.addEventListener("click", (e) => {
//   if (e.target.nodeName === "IMG") {
//     let val = e.target.alt;
//     navigator.clipboard.writeText(val);
//     Toastify({
//       text: "Emojee copied",
//       className: "info",
//       close: true,
//       style: {
//         background: "linear-gradient(to right, #00b09b, #96c93d)",
//       },
//     }).showToast();
//   }
// });

// const listOfEmojis = ["😀", "😎", "❤️", "📚", "✋", "⚽", "🚩"]; // Add more emojis as needed

// const randomEmojiGenerator = () => {
//     let randomIndex = Math.floor(Math.random() * listOfEmojis.length);
//     let randomEmoji = listOfEmojis[randomIndex];
//     let randomEmojiElement = document.getElementById("random-emogi");

//     if (randomEmojiElement) {
//         // Update the alt attribute for accessibility
//         randomEmojiElement.alt = randomEmoji;
//         // Update the source for the image element
//         randomEmojiElement.src = `path-to-your-emoji-images/${randomEmoji}.png`;

//         setTimeout(randomEmojiGenerator, 3000);
//     }
// };

// randomEmojiGenerator();

