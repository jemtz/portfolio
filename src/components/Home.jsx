import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import puppy from '../assets/puppy.png'


const HomeComponent = styled.div`
/* position: relative; */
display: flex;
min-width: 100vh;
min-height: 110vh;
background-color: #8a8e8c;
/* z-index: -1; */
.me{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  }
`


export const Home = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;

    const handleScroll = () => {
      if (parallaxElement) {
        const scrollTop = window.pageYOffset;
        const offset = parallaxElement.offsetTop;
        const distance = offset - scrollTop;
        parallaxElement.style.backgroundPositionY = `${distance * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HomeComponent>
      <div className="location">
        México
        <div className="circle">
          
        </div>
      </div>
      <div className="title">
          Juan Eduarte -Software developer
        <span></span>
      </div>

      <div className="me">
        <div className="parallax-me">
          <img src={puppy} alt="Me" />
        </div>
      </div>
    </HomeComponent>
  )
}

export default Home