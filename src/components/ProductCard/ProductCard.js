import React from 'react'
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const ProductCard = ({off,newprice,oldprice,brand,productName,ProductImg}) => {
  return (
    <div>
      <div>
      <div className='product-card'>
      <img src={ProductImg[0]} className='product-img' />
      <span className='brand'>{brand}</span>
      <div className='product-name-div'> <span className='productname'>{productName}</span></div>
      
      <div className='display-property'><div>
        <span className='oldprice'> <del>{oldprice}</del>  </span>
       
         </div>
        <div className='off-div'>{off}</div>
       
        </div>
        <span className='newprice'>{newprice}</span>
        <div className='display-property'>
          <div><span className='add-to-card'>ADD TO CARD+</span></div>
          <div> <FontAwesomeIcon icon={faHeart} className='icon-height' /></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductCard
