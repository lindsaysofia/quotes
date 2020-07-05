const QUOTES = [
  {
    text:"Hazlo. Hazlo. No digas: <<No puedo hacerlo>>. ¡Hazlo!",
    author: "Desconocido"
  },
  {
    text:"You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis"
  },
  {
    text:"Si vas a cometer errores, que sean nuevos.",
    author: "Desconocido"
  },
  {
    text:"Know that the world is an inherently beautiful place.",
    author: "Unknown"
  },
  {
    text:"La vida es un 10% lo que haces y un 90% cómo te la tomas.",
    author: "Irving Berlin"
  }
];

const quote = document.querySelector('.quote');
const quoteText = document.querySelector('.quote__text');
const quoteAuthor = document.querySelector('.quote__author');
let index = 0;

quote.addEventListener('click', event => {
  switch (event.target.id) {
    case "left":
      index = (index - 1 === -1 ? QUOTES.length - 1 : index - 1);
      break;
    case "right":
      index = (index + 1 === QUOTES.length ? 0 : index + 1);
      break;
    case "surprise":
      index = Math.floor(Math.random() * 5);  
      break;
  }
  let newQuote = QUOTES[index % QUOTES.length];
  quoteText.innerText = newQuote.text;
  quoteAuthor.innerText = newQuote.author;
});