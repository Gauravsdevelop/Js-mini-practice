

// const leftItems = ['JS', 'HTML', 'CSS', 'TS'];
// const rightItems = ['React', 'Angular', 'Vue', 'Svelte'];
// const leftSection = document.querySelector('.left-section');
// const rightSection = document.querySelector('.right-section');
// const moveAllLeftButton = document.querySelector('.move-all-left');
// const moveLeftButton = document.querySelector('.move-left');
// const moveRightButton = document.querySelector('.move-right');
// const moveAllRightButton = document.querySelector('.move-all-right');

// class TransferList {
//   constructor({
//     leftSection,
//     rightSection,
//     moveAllLeftButton,
//     moveLeftButton,
//     moveRightButton,
//     moveAllRightButton,
//     leftItems,
//     rightItems,
//   }) {
//     this.leftSection = leftSection;
//     this.rightSection = rightSection;
//     this.moveAllLeftButton = moveAllLeftButton;
//     this.moveLeftButton = moveLeftButton;
//     this.moveRightButton = moveRightButton;
//     this.moveAllRightButton = moveAllRightButton;
//     this.leftItems = leftItems;
//     this.rightItems = rightItems;

//     this.populate();
//     this.setState();
//     this.addEventListeners();
//   }

//   populate() {
//     this.leftItems.forEach((item) => this.leftSection.appendChild(this.createElement(item)));
//     this.rightItems.forEach((item) => this.rightSection.appendChild(this.createElement(item)));
//   }

//   createElement(item) {
//     const divEl = document.createElement('div');
//     const checkBoxEl = document.createElement('input');
//     checkBoxEl.type = 'checkbox';
//     checkBoxEl.id = item;
//     const labelEl = document.createElement('label');
//     labelEl.htmlFor = item;
//     labelEl.textContent = item;
//     divEl.appendChild(checkBoxEl);
//     divEl.appendChild(labelEl);
//     return divEl;
//   }

//   setState() {
//     this.moveAllLeftButton.disabled = !this.rightSection.childElementCount;
//     this.moveLeftButton.disabled = !this.rightSection.querySelector('input:checked');
//     this.moveRightButton.disabled = !this.leftSection.querySelector('input:checked');
//     this.moveAllRightButton.disabled = !this.leftSection.childElementCount;
//   }

//   addEventListeners() {
//     this.leftSection.addEventListener('click', this.setState.bind(this));
//     this.rightSection.addEventListener('click', this.setState.bind(this));

//     this.moveAllLeftButton.addEventListener('click', () => {
//       this.moveAllLeft();
//       this.setState();
//     });

//     this.moveLeftButton.addEventListener('click', () => {
//       this.moveLeft();
//       this.setState();
//     });

//     this.moveRightButton.addEventListener('click', () => {
//       this.moveRight();
//       this.setState();
//     });

//     this.moveAllRightButton.addEventListener('click', () => {
//       this.moveAllRight();
//       this.setState();
//     });
//   }

//   moveAllLeft() {
//     const items = this.rightSection.querySelectorAll('div');
//     items.forEach((item) => {
//       const divEl = item;
//       this.leftSection.appendChild(divEl);
//     });
//   }

//   moveLeft() {
//     const checkedItems = this.rightSection.querySelectorAll('input:checked');
//     checkedItems.forEach((item) => {
//       const divEl = item.parentElement;
//       item.checked = false;
//       this.leftSection.appendChild(divEl);
//     });
//   }

//   moveRight() {
//     const checkedItems = this.leftSection.querySelectorAll('input:checked');
//     checkedItems.forEach((item) => {
//       const divEl = item.parentElement;
//       item.checked = false;
//       this.rightSection.appendChild(divEl);
//     });
//   }

//   moveAllRight() {
//     const items = this.leftSection.querySelectorAll('div');
//     items.forEach((item) => {
//       const divEl = item;
//       this.rightSection.appendChild(divEl);
//     });
//   }
// }

// const transferList = new TransferList({
//   leftSection,
//   rightSection,
//   moveAllLeftButton,
//   moveLeftButton,
//   moveRightButton,
//   moveAllRightButton,
//   leftItems,
//   rightItems,
// });



// // or

// const leftItems = ['JS', 'HTML', 'CSS', 'TS'];
// const rightItems = ['React', 'Angular', 'Vue', 'Svelte'];
// const leftSection = document.querySelector('.left-section');
// const rightSection = document.querySelector('.right-section');
// const moveAllLeftButton = document.querySelector('.move-all-left');
// const moveLeftButton = document.querySelector('.move-left');
// const moveRightButton = document.querySelector('.move-right');
// const moveAllRightButton = document.querySelector('.move-all-right');

// function createList(items, container) {
//   container.innerHTML = items
//     .map(
//       (item) =>
//         `<div>
//           <input type="checkbox" id="${item}">
//           <label for="${item}">${item}</label>
//         </div>`
//     )
//     .join('');
// }

// function transferItems(source, target, all = false) {
//   const itemsToMove = all
//     ? source.querySelectorAll('div')
//     : source.querySelectorAll('input:checked');
//   itemsToMove.forEach((item) => target.appendChild(all ? item : item.parentElement));
// }

// function updateButtons() {
//   moveAllLeftButton.disabled = !rightSection.childElementCount;
//   moveLeftButton.disabled = !rightSection.querySelector('input:checked');
//   moveRightButton.disabled = !leftSection.querySelector('input:checked');
//   moveAllRightButton.disabled = !leftSection.childElementCount;
// }

// // Initialize sections
// createList(leftItems, leftSection);
// createList(rightItems, rightSection);
// updateButtons();

// // Add event listeners
// [leftSection, rightSection].forEach((section) =>
//   section.addEventListener('change', updateButtons)
// );

// moveAllLeftButton.addEventListener('click', () => {
//   transferItems(rightSection, leftSection, true);
//   updateButtons();
// });

// moveLeftButton.addEventListener('click', () => {
//   transferItems(rightSection, leftSection);
//   updateButtons();
// });

// moveRightButton.addEventListener('click', () => {
//   transferItems(leftSection, rightSection);
//   updateButtons();
// });

// moveAllRightButton.addEventListener('click', () => {
//   transferItems(leftSection, rightSection, true);
//   updateButtons();
// });

const leftItems = ['JS', 'HTML', 'CSS', 'TS'];
const rightItems = ['React', 'Angular', 'Vue', 'Svelte'];
const leftSection = document.querySelector('.left-section');
const rightSection = document.querySelector('.right-section');
const moveAllLeftButton = document.querySelector('.move-all-left');
const moveLeftButton = document.querySelector('.move-left');
const moveRightButton = document.querySelector('.move-right');
const moveAllRightButton = document.querySelector('.move-all-right');

function createList(items, container) {
  container.innerHTML = items
    .map(
      (item) =>
        `<div>
          <input type="checkbox" id="${item}">
          <label for="${item}">${item}</label>
        </div>`
    )
    .join('');
}

function transferItems(source, target, all = false) {
  const itemsToMove = all
    ? source.querySelectorAll('div')
    : source.querySelectorAll('input:checked');
  itemsToMove.forEach((item) => {
    const elementToMove = all ? item : item.parentElement;
    target.appendChild(elementToMove);
    // Uncheck checkboxes
    const checkbox = elementToMove.querySelector('input[type="checkbox"]');
    if (checkbox) checkbox.checked = false;
  });
  updateButtons(); // Ensure button states are updated after items are moved
}

function updateButtons() {
  moveAllLeftButton.disabled = !rightSection.childElementCount;
  moveLeftButton.disabled = !rightSection.querySelector('input:checked');
  moveRightButton.disabled = !leftSection.querySelector('input:checked');
  moveAllRightButton.disabled = !leftSection.childElementCount;
}

// Initialize sections
createList(leftItems, leftSection);
createList(rightItems, rightSection);
updateButtons();

// Add event listeners
[leftSection, rightSection].forEach((section) =>
  section.addEventListener('change', updateButtons)
);

moveAllLeftButton.addEventListener('click', () => {
  transferItems(rightSection, leftSection, true);
});

moveLeftButton.addEventListener('click', () => {
  transferItems(rightSection, leftSection);
});

moveRightButton.addEventListener('click', () => {
  transferItems(leftSection, rightSection);
});

moveAllRightButton.addEventListener('click', () => {
  transferItems(leftSection, rightSection, true);
});
