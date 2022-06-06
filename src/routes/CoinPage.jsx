import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import {Sparklines, SparklinesLine} from 'react-sparklines';
import {FaTwitter, FaFacebook, FaGithub} from 'react-icons/fa'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'

const CoinPage = () => {
  const [coins, setCoins] =useState({});
  const params = useParams()

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

  useEffect (()=>{
    axios.get(url).then((Response)=> {
      setCoins(Response.data);
      console.log(Response.data);
  });
  },[url]);
  return (
    <div className='rounded-div my-12 py-8'>
        <div className='flex py-8'>
          <img className='w-20 mr-8' src={coins.image?.large} alt="/" />
          <div>
            <p className='text-3xl font-bold'>{coins?.name} price</p>
            <p>({coins.symbol?.toUpperCase()} / USD )</p>
          </div>
        </div> 

        <div className='grid md:grid-cols-2 gap-8 '>
          <div>
            <div className='flex justify-between'>
              {coins.market_data?.current_price ? (<p className='text-3xl font-bold'>${coins.market_data.current_price.usd.toLocaleString()}</p>):
               null} <p>7 Days</p>
            </div>
            <div>
              {/* <Sparklines data={coins.market_data?.sparklines_7d.price}>
                <SparklinesLine color='teal' />
              </Sparklines> */}
            </div>
            <div className='flex justify-between py-4 '>
              <div>
                <p className='text-gray-500 text-sm'>Market Cap</p>
                {coins.market_data?.market_cap ? (<p>${coins.market_data.market_cap.usd.toLocaleString()}</p>) : null}
              </div>
              <div>
                <p className='text-gray-500 text-sm'>Volume (24hr)</p>
                {coins.market_data?.market_cap ? (<p>${coins.market_data.total_volume.usd.toLocaleString()}</p>) : null}
              </div>
            </div>

              <div className='flex justify-between py-4'>
                <div>
                  <p className='text-gray-500 text-sm'>24h High</p>
                  {coins.market_data?.high_24h ? (<p>${coins.market_data.high_24h.usd.toLocaleString()}</p>) : null}
                </div>

                <div>
                  <p className='text-gray-500 text-sm'>24h Low</p>
                  {coins.market_data?.low_24h ? (<p>${coins.market_data.low_24h.usd.toLocaleString()}</p>) : null}
                </div>


              </div>



          </div>

              <div>
                <p className='text-xl font-bold'>Market Statistics</p>
                <div className='flex justify-between py-4'>
                  <div>
                    <p className='text-gray-500 text-sm'>Market Rank</p>
                    {coins.market_cap_rank}
                  </div>
                  <div>
                    <p className='text-gray-500 text-sm'>Hashing Algorithm</p>
                    {coins.hashing_algorithm ? <p>{coins.hashing_algorithm}</p> : null}
                  </div>
                  <div>
                    <p className='text-gray-500 text-sm'>Trust Score</p>
                    {coins.tickers ? <p>{coins.liquidity_score.toFixed(2)}</p> : null}
                  </div>
                </div>

                <div className='flex justify-between py-4'>
                  <div>
                    <p className='text-gray-500 text-sm'>Price Change (24h)</p>
                    {coins.market_data ? (<p>{coins.market_data.price_change_percentage_24h.toFixed(2)}%</p>) : null}
                  </div> 


                  <div>
                    <p className='text-gray-500 text-sm'>Price Change (7d)</p>
                    {coins.market_data ? (<p>{coins.market_data.price_change_percentage_7d.toFixed(2)}%</p>) : null}
                  </div> 

                  <div>
                    <p className='text-gray-500 text-sm'>Price Change (14d)</p>
                    {coins.market_data ? (<p>{coins.market_data.price_change_percentage_14d.toFixed(2)}%</p>) : null}
                  </div> 
                </div>

                <div className='flex justify-between py-4'>
                  <div>
                    <p className='text-gray-500 text-sm'>Price Change (30d)</p>
                    {coins.market_data ? (<p>{coins.market_data.price_change_percentage_30d.toFixed(2)}%</p>) : null}
                  </div>

                  <div>
                    <p className='text-gray-500 text-sm'>Price Change (60d)</p>
                    {coins.market_data ? (<p>{coins.market_data.price_change_percentage_60d.toFixed(2)}%</p>) : null}
                  </div>

                  <div>
                    <p className='text-gray-500 text-sm'>Price Change (1y)</p>
                    {coins.market_data ? (<p>{coins.market_data.price_change_percentage_1y.toFixed(2)}%</p>) : null}
                  </div>
                </div>


                <div className='flex justify-around p-8  text-accent'>
                  <FaTwitter />
                  <FaFacebook />
                  <FaGithub />
                </div>

              </div>


        </div>

        {/* Coin Description */}

        <div className='py-4 '>
          <p className='text-xl font-bold'>About {coins.name}</p>
          <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coins.description ? coins.description.en  : ''),}}></p>
        </div>


    </div>
  )
}

export default CoinPage