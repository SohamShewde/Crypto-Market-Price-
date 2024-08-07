import React, { useState, useEffect, useContext } from 'react'
import { coinContext } from '../../context/Coin.context'
import { useParams } from 'react-router-dom'

const Exchange = () => {
    const {rate} = useParams()
    const [exchange, setExchange] = useState([])
    const {currency} = useContext(coinContext)

    const fetchExchangeRate = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-RFKRRJ4jmH7D5eeRUUQZRuJe'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/search/${rate}`, options)
            .then(response => response.json())
            .then(response => setExchange(response))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchExchangeRate(); 
      }, [currency])

    return (
        <div className="exchange-rate">
            <h5>Exchange Rates</h5>
            <div className="rates">
                <p>{exchange.coins}</p>
            </div>
        </div>
    )
}

export default Exchange
