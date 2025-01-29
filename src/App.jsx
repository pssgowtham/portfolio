import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import { ThemeProvider } from './context/ThemeContext';
function App() {

  return (
    <>
    <div className='bg-light-bg dark:bg-dark-bg'>
      <ThemeProvider>
      <Header />
      <Outlet />
      <Footer />
      </ThemeProvider>
      </div>
    </>
  )
}

export default App
