import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Estoque from './pages/Estoque'
import Login from './pages/Login'
//import './App.css'
import Header from './components/Header'
import HomePag from './pages/HomePag'
import Cadastro from './pages/Cadastro'


{/*function Layout(){
  return (

 //Inicio da Route
       <>

       
      {/ Só mostra o nav se estiver na rota '/' 
      {location.pathname === '/' && (
        <nav>
          <h1 className="text-blue-600/100 dark:text-sky-400/100">Hello world</h1>
          <Link to="/">Home</Link> | <Link to="/estoque">Estoque</Link>
        </nav>
      )} 

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<HomePag/>} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes> 
    </>
//Fim da Route
  )

}*/}


function App() {

 return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Home />}/>
         <Route path="estoque" element={<Estoque/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
