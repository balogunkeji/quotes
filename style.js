// 'use strict';

// (function () {

// const quotes = [
//     {
//         quote:
//           "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
//         author: " Life"
//       },
//       {
//         quote:
//           "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
//         author: "John Kenneth Galbraith"
//       },
//       {
//         quote:
//           "God save me from my friends. I can protect myself from my enemies.",
//         author: "Claude Louis Hector de Villars "
//       },
//       {
//         quote: "The price of anything is the amount of life you exchange for it.",
//         author: "David Thoreau"
//       },
//       {
//         quote:
//           "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
//         author: "Charles Lindbergh"
//       },
//       {
//         quote:
//           "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
//         author: " Tyne Daly"
//       }
// ];

// const btn = document.getElementById('but');
// const main = document.getElementById('main').style.backgroundColor = 'cornflowerblue';
// const colors = ['green', 'red', 'indigo', 'teal', 'grey', 'skyblue', 'hotpink', 'cyan', 'purple', 'tomatored', 'orangered']

//   btn.addEventListener('click', function (){
//       let random = Math.floor(Math.random()*quotes.length);

//       console.log(random);

//       const colorIndex = Math.floor(Math.random()*colors.length);
//       console.log(colorIndex);

//       document.getElementById('quotes').textContent = quotes[random].quote;
//       document.querySelector('#author').textContent = quotes[random].author;
//       document.getElementById('main').style.backgroundColor = colors[colorIndex]
//   });

// })();

const btn = document.getElementById('but');
const main = document.getElementById('main').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
// const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10
// "
const colors = ['rgba(255, 99, 71, 0.5)', 'rgba(60, 179, 113, 0.5)', 'rgba(255, 165, 0, 0.5)', 'rgba(106, 90, 205, 0.5)', 'rgba(238, 130, 238, 0.5)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 0, 144, 0.5)', 'rgba(52, 103, 85, 0.5)', 'rgba(9, 103, 85, 0.5)', 'rgba(9, 200, 103, 0.5)', 'rgba(9, 45, 85, 0.5)'];

  btn.addEventListener('click', function (){
    fetch("https://type.fit/api/quotes")
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      const test = Math.floor(Math.random()*data.length);
      console.log(test);
      const colorIndex = Math.floor(Math.random()*colors.length);
      console.log(colorIndex);
      document.getElementById("quotes").innerText = data[test].text;               
      document.querySelector("#author").innerText
       = "- " + data[test].author;
      document.getElementById('main').style.backgroundColor = colors[colorIndex];
      console.log(data);
   })
      // document.getElementById('quotes').textContent = quotes[random].quote
      // document.querySelector('#author').textContent = quotes[random].author
  .catch(error => console.log(err));

      
  });

