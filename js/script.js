/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//Below is an array of Objects with the quote, source, citation, year (if availble), and tags as properties
const quotes = [
  {
    quote:'Live all you can – it’s a mistake not to. It doesn’t so much matter what you do in particular, so long as you have your life.',
    source: 'Henry James',
    citation: 'The Ambassadors',
    tags: 'Drama-Comedy, Inspirational'
  },
  {
    quote:'I avoid looking forward or backward, and try to keep looking upward.',
    source: 'Charlotte Bronte',
    citation: 'The Life of Charlotte Bronte',
    year: 'January 15th, 1849',
    tags: 'Book, Inspirational'
  },
  {
    quote: 'Go to the edge of the cliff and jump off. Build your wings on the way down. ',
    source: 'Ray Bradbury',
    citation: 'Brown Daily Record',
    year: '1995',
    tags: 'Article, Inspirational'
  },
  {
    quote: 'It is impossible to live without failing at something unless you live so cautiously that you might as well not have lived at all.',
    source: 'J.K. Rowling',
    citation:'Harvard Commencement Address',
    year: '2008',
    tags: 'Speech, Inspirational'
  },
  {
    quote: 'All life is just a progression toward, and then a recession from, one phrase – I love you.',
    source:'F. Scott Fitzgerald',
    citation: 'The Offshore Pirate',
    tags: 'Book'
  },
  {
    quote: 'In real life, the hardest aspect of the battle between good and evil is determining which is which.',
    source: 'George R.R. Martin',
    citation: 'Interview with Infinity Plus',
    year: '2001',
    tags: 'Interview, Inspirational'
  },
  {
    quote: 'Not all those who wander are lost.',
    source: 'J.R.R. Tolkien',
    citation: 'The Lord of the Rings',
    tags: 'Book, Inspirational'
  },
  {
    quote: 'Think wrongly, if you please, but in all cases think for yourself.',
    source: 'Doris Lessing',
    citation: 'Interview with Amanda Craig',
    year: '2003',
    tags: 'Interview, Inspirational'
  },
  ]
  
// This function chooses a random background color. The randomBackgroundColor function will be called under the printQuote function
function randomBackgroundColor() {
  const red = Math.floor(Math.random()*256);
  const blue = Math.floor(Math.random()*256);
  const green = Math.floor(Math.random()*256);
  const randomColor = `rgb(${red}, ${blue}, ${green})`
  document.body.style.background = randomColor;
}



/***
 * `getRandomQuote` function
***/
// The getRandomQuote function below selects and returns a random quote object from the objects above. 
function getRandomQuote() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

/***
 * `printQuote` function
***/

function printQuote() {
  let theRandomQuote = getRandomQuote(); //calls the getRandomQuote function and stores it in another variable titled theRandomQuote
  let html = 
    `<p class = 'quote'> ${theRandomQuote.quote} </p>`;
    html += `<p class = 'source'> ${theRandomQuote.source}`;
      
//If statements test to see if the citation and/or year property is in the current theRandomQuote. If yes, then it adds it to the html string. 
  if("citation" in theRandomQuote) {
    html += `<span class = 'citation'>  ${theRandomQuote.citation} </span>`;
  }
  if("year" in theRandomQuote) {
    html += `<span class = 'citation'>  ${theRandomQuote.year} </span>`
  }
    html += `<p class = 'tags'> ${theRandomQuote.tags}`;
    html += "</p>";
  
    document.getElementById('quote-box').innerHTML = html; 
    randomBackgroundColor()

}

//Runs the printQuote function to print the quotes as well as randomly change the background colors.
printQuote();

//setInterval() function will refresh the page every 7 seconds automatically
setInterval(function(){printQuote()},7000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
