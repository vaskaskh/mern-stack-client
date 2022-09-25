import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import  Rating  from './Rating';


const Product = ({...product}) => {
  return (

    <ProductContainer>
      <Link to={`/product/${product._id}`}>        
        <ProductImg
          src={product.image}
          alt={product.name}
        />
        </Link>
      <ProductDescription>
        {product.description}
      </ProductDescription>


      
      <ProductReviews>
        <Rating
         value={product.rating}
         text={`${product.numReviews} reviews`}
        />
       </ProductReviews>

      <ProductPrice>
       $ {product.price}
      </ProductPrice>

    </ProductContainer>
  )
}


const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 25px;
  height: 600px;

  border: 1px solid lightgray;
  padding: 15px;


`


const ProductImg = styled.img`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  object-fit: cover;

`

const ProductDescription = styled.h5`
  width: 200px;
  display: flex;
  height: 125px;
  margin-top: 15px;
  
  margin-bottom: 15px;
  font-size: 15px;
`

const ProductPrice = styled.h2`
height: 20px;
font-weight: 900;

`


const ProductReviews = styled.div`
  height: 20px;
`

export default Product