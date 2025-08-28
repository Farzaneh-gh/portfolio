
import React ,{useEffect} from 'react'
import Index from './pages/index/Index'
 import "aos/dist/aos.css";
import AOS from "aos";
import "virtual:svg-icons-register";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
      easing: "ease-out-cubic",
    });
 }, []);

  
  return (
    <>
      <Index />
    </>
  )
}

export default App

     

