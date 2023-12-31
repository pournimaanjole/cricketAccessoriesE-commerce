import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Card = ({off,newprice,oldprice,brand,productName,ProductImg}) => {
  return (
    <div>
      <div className='card-div'>
      <img src={ProductImg[0]} />
      <span className='brand'>{brand}</span>
      <div className='product-name-div'> <span className='productname'>{productName}</span></div>
      
      <div className='display-property'><div>
        <span className='oldprice'> <del>{oldprice}</del>  </span>
       
        <span className='newprice'>{newprice}</span>
        </div>
        <div className='off-div'>{off}</div>
        </div>

        <div className='display-property'>
          <div><span className='add-to-card'>ADD TO CARD+</span></div>
          <div> <FontAwesomeIcon icon={faHeart} className='icon-height' /></div>
        </div>
      </div>
        
    
     

    </div>
  )
}

export default Card
