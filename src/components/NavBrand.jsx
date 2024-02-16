import React from 'react'
import styled from 'styled-components';

const Brand = styled.div`
  font-weight: 100 !important;
  position: relative;
  overflow: hidden;
  width: 68%;
  margin-top: 4%;
  margin-left: 13%;

  .c_text {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    color: #fff;
    line-height: 2;
    font-size: 1rem;
    font-weight: 300;
    text-decoration: none;
    .c_text_span{
          padding-right: 1px;
          position: absolute;
          z-index: 100;
          background-color: #8a8e8c;
          }
    .c_code_by {
      margin-left: 19%;
      display: inline-block;  
      transition: transform 0.8s cubic-bezier(0.5, 0.5, 0.3, 1);
    }
    
  
    &:hover {
      .cont{
          display: inline-block;
          animation: rotacion .8s ease-out; 
          transform-origin: center;
          }
        

        @keyframes rotacion {
          from {
            transform: rotate(0deg); /* Comienza desde 0 grados */
          }
          to {
            transform: rotate(360deg); /* Termina en 360 grados */
        }
      }
      .c_code_by {
        transform: translate3d(-44%, 0, 0);
      }
  }
  &:not(:hover) {
    .cont{
      animation: rotacionc .8s ease-out; 
        }
    @keyframes rotacionc {
          from {
            transform: rotate(360deg); /* Comienza desde 0 grados */
              }
          to {
            transform: rotate(0deg); /* Termina en 360 grados */
             }
                         }
          }
  
}

`


function NavBrand() {
  return (
    <Brand>
        <div className="container">
          <a href="/" className="c_text"><span className="c_text_span"> <div className="cont">© </div> </span> <span className="c_code_by">Code by Juan Eduarte</span></a>
      </div>
    </Brand>
  )
}

export default NavBrand

