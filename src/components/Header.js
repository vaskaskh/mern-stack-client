import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/actions/userActions';
import LogoutIcon from '@mui/icons-material/Logout';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import SelectInput from '@mui/material/Select/SelectInput';





const Header = () => {

    const userLogin = useSelector((state)=>state.userLogin);


    const {userInfo} = userLogin;

    const dispatch  = useDispatch();


    const LogoutHandler = ()=>{
        dispatch(logOut());
    }



  return (
    <HeaderContainer>
        <HeaderWrapper>
            <Logo to="/">
                VSKSHOP
            </Logo>

            <HeaderNavigations>
                <CartContainer to="/cart">
                    <ShoppingCartIcon/>
                    Cart
                </CartContainer>
                <UserContainer >
                    {userInfo?<FormControl >
                       
                                    <SelectInputMenu
                                      
                                    color='success'
                                        >
                                    <MenuItem >User:  {userInfo.name}</MenuItem>
                                   
                                    <MenuItem ><LinkHeader to="/profile" >Profile</LinkHeader></MenuItem>
                                    <MenuItem  ><LinkHeader to="/" onClick={LogoutHandler} >log Out</LinkHeader></MenuItem>
                                    
                                    </SelectInputMenu>
                                </FormControl>
                                :
                                <>
                                    <PersonIcon/>
                                    <HeaderLink to='/login'> SIGN IN</HeaderLink>
                                </>
                    }
                   
                </UserContainer>
            </HeaderNavigations>

        </HeaderWrapper>
    </HeaderContainer>
  )
}


const HeaderContainer = styled.div`
    background-color:#3d3d3d ;
    min-height: 8vh;
    
`  

const HeaderWrapper = styled.div`
    display: flex ;

    justify-content: space-between;
    align-items: center;
    padding: 20px;

    color: white;

`  


const Logo = styled(Link)`
    outline: none;
    text-decoration: none;
    color: white;
    font-size: 26px;

`

const HeaderNavigations = styled.div`
display: flex;
    
`


const CartContainer = styled(Link)`
    margin-right: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    color: white;

    &:first-child{
        margin-right: 10px;
    }
`

const UserContainer = styled.div`
     
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    color: white;

    &:first-child{
        margin-right: 10px;
    }
`
const HeaderLink = styled(Link)`
display:flex ;
align-items:center ;
      outline: none;
      cursor: pointer;
    outline: none;
    text-decoration: none;
    color: white;
    
   
`
const LinkHeader = styled(Link)`
    outline:none ;
    text-decoration:none ;
    color:black ;
`

const SelectInputMenu = styled(Select)`
    outline:none ;

`


export default Header