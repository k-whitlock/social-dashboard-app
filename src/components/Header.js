import Toggle from './Toggle';
import './Header.css';


function Header() {
  return (
      <>
        <header className="header-container">
          <div>
            <h1 className="heading">Social Media Dashboard</h1>
            <h2 className="total">Total Followers: 23,004</h2>
          </div>
          <div className="toggle-container">
            <label htmlFor="toggle" className="toggle-text">Dark Mode</label>
            <Toggle />
          </div>
        </header>    
      </>
  );
}

export default Header;