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
    <BrowserRouter> {/*tudo que esta aqui dentro faz parte do sistema de rotas*/}
      <Routes>
        <Route path="/" element={<Layout/>}> {/*O atributo path no React Router define qual URL o navegador precisa acessar para que aquele componente seja exibido. */} {/*Dentro do Route esta carregando layout se colocar fora do route layout nao sera carregado */}
         <Route index element={<Home />}/>  {/*index significa que essa é a rota padrão dentro de /.
    → Ou seja, quando o usuário acessa http://localhost:3000/, vai renderizar <Home /> dentro do <Layout />. */}
         <Route path="estoque" element={<Estoque/>} /> {/*E dentro do <Outlet /> do layout, coloca o componente <Estoque />. */}
         <Route path="cadastro" element={<Cadastro/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
