// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header">
    <Link to="/">
      <img
        src="
https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="image"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          type="button"
          className="trigger-button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div>
          <button
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose size="30" color="#616e7c" />
          </button>
          <ul>
            <li className="homelink">
              <Link to="/" className="AiHome" onClick={() => close()}>
                <AiFillHome />
                <p>Home</p>
              </Link>
            </li>
            <li className="homelink">
              <Link to="/about" className="AiHome" onClick={() => close()}>
                <BsInfoCircleFill />
                <p>About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)
export default withRouter(Header)
