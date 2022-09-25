import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import styled from 'styled-components/macro'
import Loading from '../components/Loading'
import { getUserProfile, logOut, updateUser } from '../redux/actions/userActions'

const UserScreen = () => {


        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")

        const [errorMessage, setErrorMessage] = useState("");



        
        const userState = useSelector((state)=> state.userLogin);

        const {userInfo, loading, error} = userState;

        

        const navigate = useNavigate();

        const dispatch = useDispatch();




        useEffect(()=>{
            if(!userInfo){
                navigate("/")
            }
        },[userInfo,navigate])

        const handleSubmit = (e)=>{
            e.preventDefault();



            if(password!== confirmPassword){
                setErrorMessage("Passwords do not match")
            }else{

                
                dispatch(updateUser(userInfo._id, name, email, password))

                dispatch(logOut());


            }


        }


  return (
    <ScreenWrapper>
        {loading? <Loading/>:error?<div>ERROR</div>:(
                    <UserUpdateForm  onSubmit={handleSubmit}>
                    <h2 style={{marginBottom:"25px"}}>USER PROFILE</h2>

                    <label>Name:  {userInfo?.name}</label>
                    <Input
                        type="text"
                        placeholder='Enter name'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        required= {true}

                    />
                    <label>Email Address: {userInfo?.email}</label>
                    <Input
                        type="email"
                        placeholder='Emter email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required= {true}
                    />
                    <label>Password Address</label>
                    <Input
                        type="password"
                        placeholder='Enter password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required= {true}
                    />
                    <label>Confirm Password</label>
                    <Input
                        type="password"
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                        required= {true}
                    />


                    <Button>UPDATE</Button>

                    </UserUpdateForm>
        )}
       


        
        <h2>MY ORDERS</h2>

    </ScreenWrapper>
  )
}

const ScreenWrapper = styled.div`
    display: flex ;
    gap: 5rem;
    padding:25px ;
`
const UserUpdateForm = styled.form`
    flex:0.4 ;
    display:flex ;
    flex-direction:column ;

    label{
        font-weight:300 ;
        font-size:20px;
        margin-bottom:20px;
    }
`

const Input = styled.input`
    outline:none ;
    border:none ;
    background-color:lightgray ;
    padding:10px ;
    margin-bottom:10px ;
`

const Button = styled.button`
     color:white ;
    border:black ;

    margin-top:25px ;
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
`





export default UserScreen