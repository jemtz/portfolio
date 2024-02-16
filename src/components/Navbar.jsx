import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurgerButton'
import NavBrand from './NavBrand'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <div className="brandBar">
          <NavBrand />
        </div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Work</a>
          <a onClick={handleClick} href="#h">About</a>
          <a onClick={handleClick} href="#h">Contact</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`

  padding: 1.5rem;
  position: fixed;
  background-color: #8a8e8c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  left: 0;
  top: 0;
  a{
    padding-right: 1.5rem;
    color: white;
    text-decoration: none;
  }
  

  .links{
    position: absolute;
    top: -300%;
    left: -42%;
    right: 0;
    margin-left: auto;
    margin-right: 5%;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 1rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin-top: -.5rem;
      padding-right: 9%;
      a{
        font-size: 1rem;
        margin-right: 25%;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 300%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    margin-right: 10%;
    margin-top: 4%;
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #8a8e8c ;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;

 
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 900%;
  }
`