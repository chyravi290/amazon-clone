import React from 'react'
import './Home.css'
import Banner1 from '../assets/images/banner1.jpg'
import Product from '../Product/Product'
import ProductImage1 from '../assets/images/product1.jpg'


const Home = () => {
  return (
    <div class="home">
        <div class="home__container">
            <img className='home__image' src={Banner1} alt="banner-1" />
        </div>
        <div class="home__row">
            <Product title='Ugly Love: A Novel' price={566} rating={4} image={ProductImage1} />
            <Product title='Ugly Love: A Novel' price={566} rating={4} image={ProductImage1} />

        </div>
        <div class="home__row">
        <Product title='Ugly Love: A Novel' price={566} rating={4} image={ProductImage1} />
        <Product title='Ugly Love: A Novel' price={566} rating={4} image={ProductImage1} />
        <Product title='Ugly Love: A Novel' price={566} rating={4} image={ProductImage1} />

        </div>
        <div class="home__row">
            <Product title='Ugly Love: A Novel' price={566} rating={4} image={ProductImage1} />


        </div>
    </div>
  )
}

export default Home