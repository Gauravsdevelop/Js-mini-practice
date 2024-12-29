const keyDisplay = document.getElementById('key');
const keycodeDisplay = document.getElementById('keycode');
const historyList = document.getElementById('history-list');

// Function to play sound
function playSound() {
  const audio = new Audio('keypress.mp3'); // Use a short sound effect file
  audio.play();
}

// Event listener for key presses
document.addEventListener('keydown', (event) => {
  // Display key and keycode
  const key = event.key === ' ' ? 'Space' : event.key;
  keyDisplay.textContent = key;
  keycodeDisplay.textContent = event.keyCode;

  // Play sound on keypress
  playSound();

  // Display combinations like Ctrl+Z
  const combo = [];
  if (event.ctrlKey) combo.push('Ctrl');
  if (event.altKey) combo.push('Alt');
  if (event.shiftKey) combo.push('Shift');
  combo.push(key);

  // Add to history
  const historyItem = document.createElement('li');
  historyItem.textContent = `${combo.join('+')} (Keycode: ${event.keyCode})`;
  historyList.prepend(historyItem);

  // Limit history to last 20 entries
  if (historyList.childNodes.length > 20) {
    historyList.removeChild(historyList.lastChild);
  }
});