import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link,   useNavigate,  useParams } from 'react-router-dom';
import {  addToCart, removeCart } from '../redux/actions/cartActions';
import {FaTrash} from 'react-icons/fa'
import styled from 'styled-components/macro';

const CartScreen = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();




  const params = useParams();


  const qtyCount = Number(window.location.href.split("=")[1])


  const cart = useSelector(state=>state.cart);

  const {cartItems} = cart;

  
  const [qty] = useState(qtyCount)





  useEffect(()=>{
    dispatch(addToCart(params.id, qtyCount))
  },[dispatch, params.id,qtyCount])



  const removeFromCartHandler = (id)=>{
    dispatch(removeCart(id));

  }


  const handleProceedCheckout = ()=>{
    navigate(`/login?redirect=shipping`)
  }

  return (


    <>
    SHOPPING CART
    {cartItems.length ===0 ? <div>
      You cart is empty <Link to='/'>Go Back</Link>
    </div>:(
 <MainDiv>
 <CartPageImp>
   {
     cartItems.map((item)=>(
       <CartContainer key={item.id}>
        <ImageWrapper>
            <Image 
                src={item.image}
                
                alt={item.name}
            />
        </ImageWrapper>

        <ItemDescription>
            <ItemLink to={`/product/${item.id}`} ><h3>{item.name}</h3></ItemLink>
        </ItemDescription>

        <ItemPrice>
            <h3>${item.price}</h3>
        </ItemPrice>

        <InputWrapper>
            <div className='qty' style={{ display:"flex"}}>
            {item.countInStock>0 && (
                <div >
                <div  >
                
                      
                        <NumInput
                          value={qty}
                          onChange={(e)=>dispatch(addToCart(item.id, Number(e.target.value)))}
                          style={{padding:"5px", border:"none",outline:"none", backgroundColor:"lightgray", width:"fit-content"}}
                        />

                </div>
                </div>
            )}
            </div>
        </InputWrapper>

        <IconWrapper>
            <FaTrash  onClick={removeFromCartHandler}/>
        </IconWrapper>

   </CartContainer>
     ))
   }
 </CartPageImp>
 <div style={{flex:"0.5"}}/>
<SubTotal>
   <div>

   SUBTOTAL ({cartItems.reduce((acc,item)=> acc + item.qty,0)})
   items
   </div>
   
   
   <div>
     TOTAL PRICE: ${cartItems.reduce((acc,item)=> acc+ item.qty * item.price,0).toFixed(2)}
   </div>
   
   <div className='btn'>
     <BTN onClick={handleProceedCheckout}>PROCEED TO CHECKOUT</BTN>
   </div>
 </SubTotal>
</MainDiv>
    )}
     

      </>
  )
}

 const MainDiv = styled.div`
 display: flex ;
 justify-content:space-around ;
 margin-top:25px ;
 padding:20px ;

 @media (max-width: 500px){
  display:flex ;
  flex-direction:column ;
 }
 `
const CartPageImp = styled.div`
  flex:2 ;
`

const SubTotal = styled.div`
  display:flex ;
  flex-direction:column ;
  flex:0.8;
  align-items:center;
  border:1px solid lightgray ;
  justify-content:center ;
  width:fit-content ;
  padding:20px ;
  gap:20px;

  @media(max-width:500px){
    
  align-items:flex-start ;

  margin-top:50px ;
  }


  & .btn{
    color:white ;
  }


`

const CartContainer = styled.div`
    display: flex ;
    align-items:center ;
    border-bottom:1px solid lightgray ;

    & :last-child{
        border-bottom:none ;
    }

    
`
const ImageWrapper = styled.div`
    display:flex ;

    flex:0.5 ;
`

const Image = styled.img`
    width:150px ;
    object-fit:cover ;
    padding:5px ;
`
const ItemDescription = styled.div`
    flex:0.5 ;
`
const ItemPrice = styled.div`
    flex:0.3 ;
`
const IconWrapper = styled.div`
    flex:0.1 ;
    color:#3f3b3b ;
    margin-left:10px ;
    cursor: pointer;
`

const BTN = styled.button`
  color:white ;
  padding:10px ;
  background-color: black;
  cursor: pointer;
`



const ItemLink = styled(Link)`
  text-decoration:none;
  color:black ;

  &:hover{
    text-decoration:underline ;
  }
`

const InputWrapper = styled.div`


`

const NumInput = styled.input`
  width:100px ;

`



export default CartScreen