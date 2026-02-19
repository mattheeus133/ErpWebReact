import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Estoque from './pages/Estoque'
import Login from './pages/Login'
//import './App.css'
import Header from './components/Header'
import HomePag from './pages/HomePag'
import Cadastro from './pages/Cadastro'
import Fornecedor from './pages/Fornecedor'
import CadastroCliente from './pages/CadastroCliente'
import Teste from './pages/Testes'



function App() {

 return(
    <BrowserRouter> {/*tudo que esta aqui dentro faz parte do sistema de rotas*/}
      <Routes>
        <Route path="/" element={<HomePag/>} /> {/*Rota para a pagina de homepag fora do layout*/}
        <Route path="/login" element={<Login/>} /> {/*Rota para a pagina de login fora do layout*/}
        <Route path="/cadastroCliente" element={<CadastroCliente/>}/>
        <Route path='/teste' element={<Teste/>}/>



          <Route path="/app" element={<Layout/>}> {/*O atributo path no React Router define qual URL o navegador precisa acessar para que aquele componente seja exibido. */} {/*Dentro do Route esta carregando layout se colocar fora do route layout nao sera carregado */}
            <Route index element={<Home />}/>  {/*index significa que essa é a rota padrão dentro de /.
        → Ou seja, quando o usuário acessa http://localhost:3000/, vai renderizar <Home /> dentro do <Layout />. */}
            <Route path="estoque" element={<Estoque/>} /> {/*E dentro do <Outlet /> do layout, coloca o componente <Estoque />. */}
            <Route path="cadastro" element={<Cadastro/>}/>
            <Route path="fornecedor" element={<Fornecedor/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
