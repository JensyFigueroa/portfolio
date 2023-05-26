
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/page/header/Header.jsx'
import Main from './components/page/main/Main'

function App() {

  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </>
  )
}

export default App
