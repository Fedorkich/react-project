import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="logo">Logo</p>
        <div className="header-block-right"> 
          <button className="header-link">How it works</button>
          <button className="header-link">FAQs</button>
          <button className="header-link header-link3">Log in</button>
        </div>
      </header>
      <div className="content">
        <div className="card1-content">

        </div>
        <div className="card2-content">

        </div>
      </div>
      <footer>
      The operator of this website is NOT a lender or a broker, does not make offers for loans and does not charge you for any service or products. This site allows you to submit your information to our network of lenders to determine if they maybe be able to offer you a personal loan ranging from $100 up to $1,500. The actual amounts, terms, and APR a customer could qualify for will vary based on credit scores, individual lender requirements, and state laws. Not all lenders can provide up to $1,500. Services are not available in all states. Credit checks may be obtained by some lenders. By using our content and services, you agree to our Terms of Website Use, Privacy Policy, and Disclaimer.
      </footer>
    </div>
  );
}

export default App;
