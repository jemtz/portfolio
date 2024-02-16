import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Hello = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  background-color: #1c1d20;
  color: #fff;
  z-index: 10;
  top: 0;
  left: 0;

  transform: translateY(${props => props.show ? '0' : '-100%'});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  
  .loading_words {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: ${props => props.show ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
    display: flex;
    align-items: center;
  }
  .word {
    white-space: nowrap;
    font-size: 4rem;
    position: absolute;
    opacity: 0;
    transition: opacity 0.05s ease-in-out;
    margin: 10px; /* Añade margen para una mejor apariencia */
  }
`;

function LoadPage() {
  const [mostrarPaginaCarga, setMostrarPaginaCarga] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarPaginaCarga(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mostrarPalabras = () => {
      const palabras = document.querySelectorAll('.word');
      palabras.forEach((palabra, index) => {
        setTimeout(() => {
          palabra.style.opacity = '1';
        }, index * 170); // Ajusta la duración aquí

        setTimeout(() => {
          palabra.style.opacity = '0';
        }, (index + 1) * 170); // Ajusta la duración aquí para desaparecer
      });
    };

    if (mostrarPaginaCarga) {
      mostrarPalabras();
    }
  }, [mostrarPaginaCarga]);

  const palabras = [
    "· Hola!",
    "· Hello",
    "· Ciao",
    "· Olá",
    "· こんにちは",
    "· 你好",
    "· Szia",
    "· Chào bạn",
    "· Привіт",
    "· Χαῖρε",
    "· नमस्ते",
    "· שָׁלוֹם",
    "· Salve",
    "· ¡Niltze!",
    "· Bonjour"
  ];

  return (
    <Hello show={mostrarPaginaCarga}>
      <div className="loading_words">
        {palabras.map((palabra, index) => (
          <div key={index} className="word">
            {palabra}
          </div>
        ))}
      </div>
    </Hello>
  );
}

export default LoadPage;
