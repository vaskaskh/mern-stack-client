import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import {Link as LINKR,  useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {  registerUser } from '../redux/actions/userActions';
import Loading from '../components/Loading';
import {Error} from '../components/Messages';
import { Alert } from '@mui/material';


const RegisterScreen = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("")

    const [errorForm, setErrorForm] = useState("")
    

    const dispatch = useDispatch();


    const userRegister = useSelector((state)=> state.userRegister);




    const {loading, error, userInfo}= userRegister;

    const navigate = useNavigate();



    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[navigate,userInfo])


    const handleSubmit = (e)=>{
        e.preventDefault()

        if(password !== confirmPassword){
            setErrorForm('Passwords do not match')
        }else{
            dispatch(registerUser(name,email, password))
        }
        

     

    }

  return (
    <>
    {loading? <Loading/>
    :error?<Error/>:
    <Container>
      <LoginFormWrapper onSubmit={handleSubmit}>
        <label>Register </label>
        <br/>
        <br/>
{ errorForm? <Alert severity="error">{errorForm}</Alert>:<div></div>}
        <br/>
        <br/>

        <label>Name</label>
        <INPUT
        placeholder='Name'
        type='text'
        value={name}

        onChange={(e)=> setName(e.target.value)}
        />

        <label>Email Address</label>
        <INPUT
        placeholder='Email'
        type='email'
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        value={email}

        onChange={(e)=> setEmail(e.target.value)}
        />

        <label>Password</label>
        <INPUT
        placeholder='Password'
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <INPUT
        placeholder='Confirm Password'
        type="password"
        value={confirmPassword}
        onChange={(e)=> setConfirmPassword(e.target.value)}
        />


        <Button >Register</Button>


        <LINK to="/login">Already Have an account?</LINK>

        
      </LoginFormWrapper>
    </Container>
    }
    
    </>
  )
}


const Container = styled.div`
background-color:#DEE0E1 ;
height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px;
  justify-content: center;
  margin-bottom: 10px;
  width: 50%;
  background-color: white;
  opacity: 0.9;
  label{
    margin-bottom: 15px;
  }
`

const INPUT = styled.input`
margin-bottom: 15px;
width: 90%;
padding: 15px;
font-size: 18px;
outline: none;
color: lightgray;
border: 1px solid lightgray;
`

const Button = styled.button`
  color:white ;
  background-color: black;
  padding:15px ;
  width:fit-content ;
  cursor: pointer;
  margin:20px 0  ;
  width:100px;
  border:none ;



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
const LINK = styled(LINKR)`
  margin-bottom: 15px;
  outline: none;
  color: black;
  text-decoration: none;
`

export default RegisterScreen