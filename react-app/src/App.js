import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="logo">Logo</p>
        <div className="header-block-right">
          <button className="header-link header-link3">Log in</button>
          <button className="header-link">FAQs</button>
          <button className="header-link">How it works</button>


        </div>
      </header>
      <div className="content">
        <div className="card1-content">
          <div className="tis-container">
            <p className="tis-paragraph">
              Time is money,
              don't waste it
            </p>
            <div className="tis-items-container">
              <div className="tis-item">
                $200—$10K Personal Loans
              </div>
              <div className="tis-item">
                Fast, Easy and Discreet
              </div>
            </div>

          </div>
          <div className="ad-container">
            <div className="ad-item-container">
              <i className="fa fa-clock-o ad-icon" />
              <p className="ad-item-title">Money as soon as next business day</p>
              <p className="ad-item-paragraph">With funds in your account as soon as the next business day*, you can get moving on your big plans</p>
            </div>
            <div className="ad-item-container ad-item2-container">
              <i className="fa fa-clock-o ad-icon" />
              <p className="ad-item-title">We consider all types of credit history </p>
              <p className="ad-item-paragraph">Just because your credit score may be "not-so-great" doesn't mean you can't get approved.</p>
            </div>
          </div>
        </div>
        <div className="card2-content">
          <div className="card2-item card2-title">Checkout faster</div>
          <div className="card2-item card2-paragraph">
            Our pre-filled form lets you request a loan faster, so you can get on with your day.
          </div>
          <div>
            <input />
          </div>
          <div>
            <button className="card2-button header-link3">Get Started</button>

          </div>
        </div>
      </div>
      <footer className="footer">
        The operator of this website is NOT a lender or a broker, does not make offers for loans and does not charge you for any service or products. This site allows you to submit your information to our network of lenders to determine if they maybe be able to offer you a personal loan ranging from $100 up to $1,500. The actual amounts, terms, and APR a customer could qualify for will vary based on credit scores, individual lender requirements, and state laws. Not all lenders can provide up to $1,500. Services are not available in all states. Credit checks may be obtained by some lenders. By using our content and services, you agree to our Terms of Website Use, Privacy Policy, and Disclaimer.
      </footer>
    </div>
  );
}

export default App;
