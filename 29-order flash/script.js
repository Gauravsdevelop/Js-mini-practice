function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 2000; // Random time between 2 to 7 seconds
  }
  
  function getRandomOrderId() {
    return `F-${Math.floor(Math.random() * 1000) + 100}`; // Random ID with 'F-' prefix
  }
  
  document.getElementById('orderButton').addEventListener('click', function () {
    const selectedItems = [];
    const checkBoxes = document.getElementsByName('foodItem');
  
    checkBoxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        selectedItems.push(checkbox.value);
      }
    });
  
    if (selectedItems.length === 0) {
      alert('Please select at least one item.');
      return;
    }
  
    const orderButton = document.getElementById('orderButton');
    orderButton.disabled = true;
  
    const loadingMessage = document.getElementById('loadingMessage');
    const foodImage = document.getElementById('foodImage');
    const orderIdElement = document.getElementById('orderId');
    const orderIdValueElement = document.getElementById('orderIdValue');
    const feedback = document.getElementById('feedback');
  
    orderIdElement.style.display = 'none';
    foodImage.style.display = 'none';
    loadingMessage.style.display = 'block';
    feedback.style.display = 'none';
  
    const promise = new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, getRandomTime());
    });
  
    promise.then(function () {
      const orderId = getRandomOrderId();
      orderIdValueElement.textContent = orderId;
      orderIdElement.style.display = 'block';
  
      const foodToShow = selectedItems[Math.floor(Math.random() * selectedItems.length)];
  
      switch (foodToShow) {
        case 'Burger':
          foodImage.src =
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60';
          break;
        case 'Fries':
          foodImage.src =
            'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60';
          break;
        case 'Drink':
          foodImage.src =
            'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60';
          break;
      }
  
      loadingMessage.style.display = 'none';
      foodImage.style.display = 'block';
      feedback.style.display = 'block';
      orderButton.disabled = false;
  
      const audio = new Audio('./button-1.mp3');
      audio.play();
    });
  });
  
  function submitFeedback(feedbackType) {
    alert(`Thank you for your ${feedbackType} feedback!`);
  }
  