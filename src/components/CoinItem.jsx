import React from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {Sparklines, SparklinesLine} from 'react-sparklines';

const CoinItem = ({coins}) => {
  return (
    <tr className='h-[80px] border-b overflow-hidden'>
                        <td><AiOutlineStar/></td>
                        <td>{coins.market_cap_rank}</td>
                        <td>
                          <Link to={`/coin/${coins.id}`}>

                          <div className='flex itemes-center'>
                                <img className='w-6 mr-2 rounded-full' src={coins.image} alt={coins.id} />
                                <p className='hidden sm:table-cell'>{coins.name}</p>
                            </div>

                          </Link>
                            
                        </td>
                        <td>{coins.symbol.toUpperCase()}</td>
                        <td>${coins.current_price.toLocaleString()}</td>
                        <td>
                          {coins.price_change_percentage_24h > 0 ? (<p className='text-green-600'>{coins.price_change_percentage_24h.toFixed(2)}%</p>) : (<p className='text-red-600'>{coins.price_change_percentage_24h.toFixed(2)}%</p>)}
                          </td>
                        <td className='w-[180px] hidden md:table-cell'>${coins.total_volume.toLocaleString()}</td>
                        <td className='w-[180px] hidden sm:table-cell'>${coins.market_cap.toLocaleString()}</td>
                        <td>
                            <Sparklines data={coins.sparkline_in_7d.price} >
                                <SparklinesLine color='teal' />
                            </Sparklines> 
                        </td>
    </tr>
  )
}

export default CoinItem