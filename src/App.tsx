import React from 'react'
import Home from './components/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App:React.FC = () => {
  return (
    <>
    <Router>
      <Routes>
          <Route path='/flashcard' element={<Home />} />
          <Route path='/mathematics' element={<Home />} />
          <Route path='/relationandfunction' element={<Home />} />
          <Route path="/" element={<Home />} />
      </Routes>
     
    </Router>
    </>
  )
}

export default App
