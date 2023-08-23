// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="header-img"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li className="nav-link">Home</li>
        <li className="nav-link">Products</li>
        <li className="nav-link">Cart</li>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </ul>
    </div>
  </nav>
)

export default Header
