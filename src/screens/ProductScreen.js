import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { detailProduct } from '../redux/actions/productActions';
import Loading from '../components/Loading'








const ProductScreen = () => {

const [qty, setQty] = useState(1);

const navigate = useNavigate();



const params = useParams();

const dispatch= useDispatch();



useEffect(()=>{
  dispatch(detailProduct(params.id))
},[dispatch, params.id])


const {error,loading,product} = useSelector(state=> state.productDetail);



const submitHandler=()=>{
  navigate(`/cart/${params.id}?qty=${qty}`)
}


  return (
    <>


    {loading?<div>
      <Loading/>
    </div>:error? <div>
      error
    </div>:
    <>
    <Link to="/" style={{textDecoration:"none", color:"gray", padding:"5px"}}>
   Go Back
</Link>    
   <ProductContainer>
  

       <ImageWrapper>
      
               <img
               src={product.image}
               alt={product.name}
               />
       </ImageWrapper>
<div>
       <InfoWrapper>
           <div className='name'>
           <h2>{product.name}</h2>
           </div>

           <div className='rating'  style={{borderBottom:"1px solid lightgray"}}>
             <Rating
               value={product.rating}
               text={product.numReviews}
             />
           </div>

           <div className='price'  style={{borderBottom:"1px solid lightgray",}}>
             <b>Price:</b> ${product.price}
           </div>

           <div className='description' >
             <b>Description:</b> {product.description}
           </div>

       </InfoWrapper>

       <CheckoutBox>

         <div className='price' style={{borderBottom:"1px solid lightgray"}}>
           <b>Price:</b> ${product.price}
         </div>

         <div className='status' style={{borderBottom:"1px solid lightgray",  display:"flex", justifyContent:"space-between"}}>
          <b> Status:</b> <span> {product.countInStock>0 ?'In  Stock' : "Out of stock"}</span>
         </div>


         
         <div className='qty' style={{borderBottom:"1px solid lightgray", display:"flex", justifyContent:"space-between"}}>
          <b> Quantity:</b> {product.countInStock>0 && (
            <div>
              <div style={{display:"flex"}}>
            
                    <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                      <option >Qty</option>
                      {
                      [...Array(product.countInStock).keys()].map(x=>(
                        <option key={x+1} value={x+1}>
                          {x+1}
                        </option>
                      ))
}                     
                    </select>

              </div>
            </div>
          )}
         </div>

         <div className='btn'   >
           <Button  
            onClick={submitHandler}
           disabled={product.countInStock=== 0}>ADD TO CART</Button>
         </div>

       </CheckoutBox>

       </div>

   </ProductContainer>
   </>
    }
 
    </>
  )
}




const ProductContainer = styled.div`
  display: flex;
  padding:85px ;
  justify-content:space-around;

@media (width:350px){
  display:flex ;
  flex-direction:column ;
}


`
const ImageWrapper = styled.div`
display:flex ;
flex-direction:column ;
flex:1 ;

 img{
  width:500px;
  height:500px ;
  object-fit:cover ;
  margin-top:25px ;

 }
`
const InfoWrapper = styled.div`

  display:flex ;
  flex-direction:column ;
  justify-content:space-between ;
  height:350px ;
  width:250px ; 
  margin-top:25px ;
  gap: 25px;

  flex:2 ;


 
`
const CheckoutBox = styled.div`

  padding:25px 50px ;
  margin-top:25px ;
  border:1px solid black;
  height:fit-content ;
 display:flex ;
 flex-direction:column ;
    gap: 25px;


`

const Button = styled.button`
  color:white ;
  background-color: black;
  padding:15px ;
  width:fit-content ;
  cursor: pointer;


  &:hover{
    color:black ;
    background-color: whitesmoke;
    transition:all 0.3s ease-in ;
  }

  &:active{
    transform:scale(0.98  ) ;
    transition:all 0.1s ease-in ;
  }
  &:disabled{
  cursor: not-allowed;
  transition:none ;
  transform:scale(1) ;
  color:black ;
  background-color:gray ;
 }

`



export default ProductScreen