import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App  from './App.jsx'
import Home from './Components/Home.jsx'
import Education from './Components/Education.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Experience from './Components/Experience.jsx'
import About from './Components/About.jsx'
import Resume from './Components/Resume.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
    <Route path='' element={<Home />} />
    <Route path='Education' element={<Education />} />
    <Route path='Skills' element={<Skills />} />
    <Route path='Experience' element={<Experience />} />
    <Route path='Projects' element={<Projects />} />
    <Route path='About' element={<About />} />
    <Route path='Resume' element={<Resume />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} 
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_normalizeFormMethod: true,
    }}
    basename="/portfolio"/>
  
  </StrictMode>,
)
