import React from 'react'
import './DiscountCard.css'
const DiscountCard = ({img}) => {
  return (
    <div>
      <div className='discount-div'>
         <img src={img} className='discount-img'/>
        
      </div>
    </div>
  )
}

export default DiscountCard
