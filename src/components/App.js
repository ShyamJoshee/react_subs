import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div id="main">
      <div class="container">
        <div class="community">
          <h2 class="community-header" style={{ color: 'rgb(0,185,195)' }}>Join our community</h2><br></br>
          <h2 style={{ color: 'rgb(100,158,36)' }}>30-day, hassle-free monkey back gurarantee</h2><br></br>
          <p strong style={{ color: 'rgb(149,166,197)' }}>Gain access to our full library of tutorials along with experts code reviews. Perfect for any developers
            who are serious about honing their skills.
          </p>
        </div>
        <div class="card-details">
          <div class="card">
            <h3 class="card-header" style={{ color: 'antiquewhite' }}>Monthly Subscription</h3>
            <h3 style={{ color: 'antiquewhite' }}>             <span>$29</span>            Per Month</h3>
            <h3 style={{ color: 'antiquewhite' }}>Full access for less than $1 a day.</h3>
            <button class="btn" ><h3>Sign Up</h3></button>
          </div>
          <div class="why-us">
            <h4 class="why-us-header">Why Us</h4>
            <ul className="why-us-items">
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access yo our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;