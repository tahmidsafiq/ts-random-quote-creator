const btnEl = document.getElementById("btn");

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const appURL = "https://api.quotable.io/random"


async function getQuote(){

  try {
    btnEl.innerText = "Loading...";
    btnEl.Disabled = true;
    quoteEl.innerText = "Searching...";
    authorEl.innerText = "Searching...";
    const response = await fetch(appURL);
   const data = await response.json();
   const quoteContent = data.content;
   const quoteAuthor = data.author;
   quoteEl.innerText = quoteContent;
   authorEl.innerText = "~ " + quoteAuthor;
   btnEl.innerText = "new quote";
   btnEl.Disabled = false;
    
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again later";
    authorEl.innerText = "An error happened, try again later";
    btnEl.innerText = "new quote";
    btnEl.Disabled = false;
  }
   
}

getQuote()

btnEl.addEventListener("click", getQuote)
