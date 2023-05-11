//your code here
const txt = document.getElementById("item-name-input");
const num = document.getElementById("item-price-input");
const btn = document.getElementById("add");
const itemList = document.getElementById('list');
const total = document.getElementById('total');
let grandTotal = 0;
btn.addEventListener('click',()=>{

  const name = txt.value.trim();
   const price = parseFloat(num.value.trim());
   if(name && price){
    const newRow = itemList.insertRow();
          const itemCell = newRow.insertCell();
          const priceCell = newRow.insertCell();
          itemCell.textContent = name;
          priceCell.textContent = price.toFixed(2);
          grandTotal += price;
          total.textContent = grandTotal.toFixed(2);
          txt.value = '';
        num.value = '';
   }

})
