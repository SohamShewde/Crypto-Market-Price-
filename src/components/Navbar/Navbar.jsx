import React, { useContext } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import arrow_icon from "../../assets/arrow_icon.png"
import { coinContext } from '../../context/Coin.context'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { setCurrency } = useContext(coinContext)
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated} = useAuth0();

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$"
        });
        break;
      }
      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€"
        });
        break;
      }
      case "inr": {
        setCurrency({
          name: "inr",
          symbol: "₹"
        });
        break;
      }
    }
  }
  return (
    <div className='navbar'>
      <h1>CoinSight</h1>
      <ul>
        {/* <Link to={'/'}><li>Home</li></Link> */}
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>

        {
          isAuthenticated ? (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          ) :  (<button onClick={() => loginWithRedirect()} className='login'>Log In</button>)
        }
        

      </div>
    </div>
  )
}

export default Navbar
