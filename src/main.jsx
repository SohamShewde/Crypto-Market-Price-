import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/Coin.context.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-si73qswijrn6tu4f.us.auth0.com"
        clientId="I6TuMMD28vaPUO4po1lXpDQhep7JEYah"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}  >
        <CoinContextProvider>
          <App />
        </CoinContextProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

