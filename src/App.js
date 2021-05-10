import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import NavBar from './components/NavBar'
import StickyFooter from './components/StickyFooter'
import Routes from './routes/Routes'



function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes/>
      <StickyFooter/>
    </BrowserRouter>
  )
}

export default App;
