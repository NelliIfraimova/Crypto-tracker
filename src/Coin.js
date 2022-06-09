import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coinContainer'>
      <div className='coinRow'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coinSymbol'>{symbol}</p>
        </div>
        <div className='coinInfo'>
          <p className='coinPrice'>${price}</p>
          <p className='coinVolume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coinPercent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coinPercent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coinMarketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;