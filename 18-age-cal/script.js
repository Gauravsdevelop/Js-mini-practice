function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) return alert("Please select your date of birth.");
  
    const dobDate = new Date(dob);
    const today = new Date();
  
    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();
  
    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
  }
  