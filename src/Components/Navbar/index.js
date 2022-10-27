import React, {useState, useEffect} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks,NavItemBtn, NavBtnLink  } from './NavbarElements';
import {IconContext } from 'react-icons/lib'
import { Button } from '../../GlobalStyles';

const Navbar = () => {

const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = ()=>setClick(!click)
const showButton = ()=> {
    if(window.innerWidth <= 960){
        setButton(false)
    }else{
        setButton(true)
    }
}

useEffect(()=>{
    showButton()
},[])
window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{color :'#fff'}}>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                <NavIcon />
                Liad Sahpira
            </NavLogo>
            <MobileIcon onClick={handleClick} to='/' >
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                    <NavLinks to='/'>
                        about me
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='/services'>
                        experience
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='/products'>
                        projects
                    </NavLinks>
                </NavItem>
                <NavItemBtn>
                    {button ? (
                        <NavBtnLink to="/sign-up">
                            <Button primary> lets connect</Button>
                        </NavBtnLink>
                    ):(
                        <NavBtnLink to="/sign-up">
                            <Button  fontBig primary>
                                lets connect!
                            </Button>
                        </NavBtnLink>
                    )}
                </NavItemBtn>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;