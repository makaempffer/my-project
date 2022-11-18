import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/Cards';


export default function App() {
  return (
    <BrowserRouter>
      <div className='bg-gradient-to-b from-veryDarkBlue to-lightBlue h-screen'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Hero/>}></Route>
          <Route path='projects' element={<Cards/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
  )
}
