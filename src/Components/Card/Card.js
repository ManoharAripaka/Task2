import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCardData, updateDisplay, updatePosition } from '../../Store/DataStore'
import './Card.css'

export default function Card() {
  const { cardData, position, display } = useSelector(state => state.data)
  const dispatch = useDispatch()
  let top = ''
  let left = ''
  if (position.clientY >= 70 && position.clientY<=190) top = '60'
  else if (position.clientY >= 190 && position.clientY <= 315) top = '100'
  else  top = '135'
  if (position.clientX <= 162) left = '63'
  else if (position.clientX >= 1195) left = '1100'
  else left = position.clientX-100
    
  const discard = () => {
    dispatch(updateCardData({}))
    dispatch(updatePosition({}))
    dispatch(updateDisplay('none'))
  }
  return (
      <div className="card" style={{display : `${display}`, top : `${top}px`, left : `${left}px`}} onMouseLeave={discard} >
          <div className='inside'>
            <img id='card_image' src={cardData.image} alt='' />
            <p id='card_name'>{cardData.product_name}</p>
            <p id='card_rating'>Rating: {cardData.rating}/5</p>
            <p id='card_price'>$ {cardData.price}</p>
            <p id='card_seller'>{cardData.product_seller}</p>
        </div>
        <a href='https://amazon.com' id='more'>see more...</a>
      </div>
  )
}
