import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import LoadPage from './components/LoadPage';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoadPage />
      <Navbar />
      <Home />
    </>
  );
}

export default App
