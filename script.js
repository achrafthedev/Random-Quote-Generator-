const apiUrl = 'https://api.allorigins.win/get?url=https://quotes.toscrape.com/random';

// Function to fetch and display a random quote
const displayRandomQuote = async () => {
    try {
        // Add a unique cache-busting parameter to the API URL
        const response = await fetch(`${apiUrl}&timestamp=${new Date().getTime()}`);
        const data = await response.json();

        // Parse the HTML content from the response
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'text/html');

        const quoteText = doc.querySelector('.text').innerText;
        const quoteAuthor = doc.querySelector('.author').innerText;

        document.getElementById('quote').innerText = `"${quoteText}" - ${quoteAuthor}`;
    } catch (error) {
        document.getElementById('quote').innerText = 'Oops! Something went wrong. Please try again.';
    }
};

// Load a random quote on page load
window.onload = displayRandomQuote;

// Event listener for the Get Quote button
document.getElementById('generateQuote').addEventListener('click', displayRandomQuote);
