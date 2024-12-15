const count = document.querySelector(".count");
const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const changeBy = document.querySelector(".changeBy");
const reset = document.querySelector(".reset");

decrement.addEventListener('click', () => {
  
    let countValue = parseFloat(count.innerText);
    const changeByVaue = parseInt(changeBy.value);
    // count.innerText = countValue - 1;
     count.innerText = countValue - changeByVaue;
  // console.log(countValue.innertext);

});

increment.addEventListener('click', () => {
  let countValue = parseInt(count.innerText);
  const changeByVaue = parseInt(changeBy.value);

  // count.innerText = countValue + 1;
  count.innerText = countValue + changeByVaue;
  console.log(countValue);
});

reset.addEventListener('click', ()=>{
  count.innerText = 0;
   
})