import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Basket from './Pages/BAsket/Basket';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts'
import { useEffect, useState } from 'react';
function App() {
  const [data,setData] = useState([])
  const [text, setText] = useState('')
  console.log(data)
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:3000/db.json') 
      const data = await resp.json()
      setData(data)
    }
    fetchData()
  }, [])
  const searchDAta = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
  return (
    <BrowserRouter>
 <div className="App">
   <Header/>
    </div>

    <Routes>
      <Route path='/' element={<Home data={searchDAta} text={text} setText={setText}/>}/>
      <Route path='/Basket' element={<Basket/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
