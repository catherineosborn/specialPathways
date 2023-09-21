import React, { useEffect, useState } from 'react';
import './App.css';
import Bar from './assets/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assets/Home';
import Services from './assets/Services';
import About from './assets/About';
import Contact from './assets/Contact';
import Banner from './images/SP-Banner.png';
import Footer from './assets/Footer';
import NotFound from './assets/NotFound';
import { initializeApp } from "firebase/app";

export default function App() {
  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe6khkiI7jaxoL_aUrGddNDFGKG_zXR9c",
  authDomain: "special-pathways.firebaseapp.com",
  projectId: "special-pathways",
  storageBucket: "special-pathways.appspot.com",
  messagingSenderId: "15994084147",
  appId: "1:15994084147:web:ede3be78d6c56028253c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  useEffect(() => {
    logPathname();
  }, []);

  const logPathname = () => {
    console.log(window.location.pathname);
  };

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/Services":
      component = <Services />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/Contact":
      component = <Contact />;
      break;
    default:
      component = <NotFound />;
  }

  return (
    <>
      <Bar />
      <div style={{ padding: 0, margin: 0 }}>
        <img src={Banner} className="container-fluid homeBanner" alt="Banner" style={{ padding: 0, margin: 0 }} />
      </div>
      <div style={{ paddingBottom: '80px' }}> 
        {component}
      </div>
      <Footer />
    </>
  );
}
