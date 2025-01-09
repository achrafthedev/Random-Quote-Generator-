const quotes = [
    "The best way to predict the future is to create it.",
    "Life is what happens when you're busy making other plans.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The purpose of our lives is to be happy."
];

// Load a random quote on page load
window.onload = function() {
    displayRandomQuote();
};

// Function to display a random quote
const displayRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
};

// Event listener for the Get Quote button
document.getElementById('generateQuote').addEventListener('click', displayRandomQuote);