import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';

const Product = ({title, image, price, rating}) => {
  return (
    <div className='product'>
        <div class="product__info">
            <p>{title}</p>
            <p class="product__price">
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
            <div class="product__rating">
              {Array(rating).fill().map((_, i)=> (

                <p><StarIcon /></p>
              ))}
            </div>
        </div>
        <img src={image} alt="" />
        <button>Add To Basket</button>
    </div>
  )
}

export default Product