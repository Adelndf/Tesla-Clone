import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [open, setOpen] = useState(false);

    const cars = useSelector(selectCars);

    return (
        <Container>
            <a href="">
                <img src="/images/logo.svg" alt="Logo" />
            </a>
            <Menu>
                {cars && cars.map((car, i) => (
                    <a key={i} href="">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Tesla Account</a>
                <CustomMenu onClick={() => setOpen(true)} />
            </RightMenu>
            <BurgerNav show={open}>
                <CloesWrapper>
                    <CustomClose onClick={() => setOpen(false)} />
                </CloesWrapper>
                {cars && cars.map((car, i) => (
                    <li key={i}><a href="">{car}</a></li>
                ))}
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade-In</a></li>
                <li><a href="">Test Drive</a></li>
                <li><a href="">Powerwall</a></li>
                <li><a href="">Commercial Energy</a></li>
                <li><a href="">Utilities</a></li>
                <li><a href="">Charging</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header


const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    z-index: 1;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.01));
    img{
        object-fit: contain;
        display: flex;
        align-items: center;
    }
    @media (max-width: 400px){
        min-height: 50px;
        padding: 0px 15px;
        img{
            width: 70px;
        }    
    }

`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 400;
        font-size: 18px;
        padding: 0px 15px;
    }
    @media (max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 400;
        font-size: 18px;
        margin-right: 15px;
    }
    @media (max-width: 400px){
        a{
            font-size: 16px;
        }
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    box-shadow: 0px 0px 20px -6px rgba(0, 0, 0, 0.5);
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.25s ease-in-out;
    li{
        padding: 15px 0px;
        border-bottom: 1px solid lightgray;
        font-size: 16px;
        font-weight: 600;
    }
    @media (max-width: 400px){
        width: 200px;
        li{
            font-size: 15px;
        }
    }

`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloesWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`