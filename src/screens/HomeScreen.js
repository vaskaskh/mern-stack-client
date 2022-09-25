import React, { useEffect } from 'react';
import styled from 'styled-components';
import Product from './../components/Product.js';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../redux/actions/productActions.js';
import Loading from '../components/Loading.js';




const HomeScreen = () => {


    const dispatch = useDispatch();


useEffect(()=>{
    dispatch(listProducts());
},[dispatch]);

const {loading, error, products} = useSelector(state=> state.productList)


  return (
    <div style={{padding:"15px"}}>
    <h1>LATEST PRODUCTS</h1>

    {loading?<div>
        <Loading/>
    </div>:error?
    <div>
        ERROR
    </div>:

<HomeContainer>

{
    products?.map((product)=>(
        <Product
            key={product._id}
            {...product}
        />
    ))
}

</HomeContainer>

    }
</div>
  )
}

const HomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 25px;


`        

export default HomeScreen