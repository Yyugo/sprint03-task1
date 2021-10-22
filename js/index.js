// DOM Document Object Model

// The first way

//User 1 
console.log(document.getElementById('list').children[0].innerText);

//User 2 
console.log(document.getElementById('list').children[4].innerText);

//User 3 
console.log(document.getElementById('list').children[1].innerText);

//User 4 
console.log(document.getElementById('list').children[3].innerText);

//User 5 
console.log(document.getElementById('list').children[2].innerText);

// The second way 

const listEls = document.getElementById("list").children;
const listElsContent = Array.from(listEls).map(el => {
  return el.innerText;
});
console.log(`${listElsContent[0]} ${listElsContent[4]} ${listElsContent[1]} ${listElsContent[3]} ${listElsContent[2]}`);