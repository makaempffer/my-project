import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import About from './components/About';



export default function App() {
  return (
    <BrowserRouter>
      <div className='bg-gradient-to-b from-veryDarkBlue via-slate-600 to-lightBlue h-screen'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero/>}></Route>
          <Route path="/projects" element={<Cards/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
