import { useRef } from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'

function App() {
  const aboutRefs = [useRef(), useRef(), useRef(), useRef()]
  
  return (
    <>
      <Header/>
      <About ref={aboutRefs[0]}/>
      <About ref={aboutRefs[1]}/>
      <About ref={aboutRefs[2]}/>
      <About ref={aboutRefs[3]}/>
    </>
  )
}

export default App
