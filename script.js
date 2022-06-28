let count= 0;
let countEl= document.getElementById('count-el')
let currentCount= document.getElementById('current-count')
let totalCount= document.getElementById('total');
let newCount= [];

function increment() {
   count += 1;
   countEl.textContent= count;
}

function save() {
   if(count) {
      currentCount.textContent += count + " - ";
      newCount.push(count)
      countEl.textContent= 0; 
      count= 0
   } 
}

function undo() {
  if(count){
     count -= 1;
  }
  countEl.textContent= count;
}

function sum() {
   let total= newCount.reduce((totalCount, count) => {   
         return totalCount + count;

   }, 0)
      totalCount.textContent = total;       
      currentCount.textContent= "";
}

function reset() {
   newCount= [];
    countEl.textContent= 0; 
    currentCount.textContent= "";
    totalCount.textContent= 0;
}
 