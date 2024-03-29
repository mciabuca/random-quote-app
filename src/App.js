import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" className="text-center">
      <p id="text">{quote}</p>
      <p id="author">- {author}</p>
      <button id="new-quote" onClick={fetchQuote}>New Quote</button>
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " - " + author)}`} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faXTwitter} beat style={{color: "#ffffff",}} size="3x"/>
      </a>
    </div>
  );
}

export default App;
