import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/LogoErp.png'
//import App from '../App.css'


const Cabecalho = styled.header`
    border: 1px solid red;
    width: 100%;
    height: 100%;
    background: #2e2e2d;
    
` 
const Img = styled.img`
    width: 100%;
`
const Ul = styled.ul`
    
`
const Li = styled.li`
      height: 40px;
    width: 100%;
    text-align: center;
    color: white;
    background: #2e2e2d;

    &:hover{
         font-weight: bold;
        cursor: pointer;
        border: 1px solid white;
        border-radius: 20px;
    }
`

function Header(){
    return(
        <Cabecalho>
            <div>
                <Img src= {logo} alt='Logo' /> {/*Colocar imagem logo*/}
            </div>
            <div class ="hidden">
                <div>&#9776;</div>
            </div>
           
            <Ul>
                <Li><Link to={"/"}  className="block w-full h-full">Home</Link></Li>
                <Li><Link to={"/estoque"}  className="block w-full h-full">Estoque</Link></Li>
                <Li><Link to={"/cadastro"} className="block w-full h-full">Cadastro</Link></Li>
                <Li>Fornecedor</Li>
                <Li>Compras</Li>
                <Li>Vendas</Li>
                <Li>Saida</Li>
                <Li>Movimentação</Li>
                <Li>Inventario</Li>
                <Li><Link to={"/"} className="block w-full h-full">Sair</Link></Li>
            </Ul>
         </Cabecalho>
    )
}

export default Header