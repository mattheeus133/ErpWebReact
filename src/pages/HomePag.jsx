import { Link} from "react-router-dom"
import styled from "styled-components"
import logo from '../assets/LogoTransparente.png'
import fundoPag from '../assets/FundoPagInicial2.png'

const ContainerBody = styled.div`
    background-image: url(${fundoPag});
    background-attachment: fixed;
`


const Nav = styled.div`
    width: 100%;
`

const Img = styled.img`
    width: 10%;
    margin-left: 10px;
`
const DivImg = styled.div`
    
`
const Ul = styled.ul`
    width: 300px;
    display:flex ;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items : center;
    top: 10px;
`
const Li = styled.li`
    border: 1px solid #C0C0C0;
    height: 50px;
    width: 100px;
    background: #00FF00;
    border-radius: 10px;

    &:hover{
        color: #1E90FF; 
    }

`

const BtnLogin = styled.button`
    border: 1px solid #C0C0C0;
    background: #1E90FF;
    border-radius: 10px;
    color: white;
    height: 50px;
    width: 100px;
    top: 10px;

      &:hover{
        color: black;
        background: #FF0000;
        opacity: 1;
      }
`

const Saudacao = styled.div`
    border: 1px solid red;
    height: 70vh;

`
const P = styled.p`
    width: 100%;
    font-family: "Bebas Neue";
    font-size: 3rem;
`

const MainPag = styled.div`
    
`
const DivSobre = styled.div`
    height: 500px;
    width: 40%;
    background: black;
    margin: 10px 0 10px 100px;
    border-radius: 10px;
`
const DivTag = styled.div`
    width: 300px;
    height: 50px;
`

function HomePag(){
    return(
        <ContainerBody> 
            <Nav className="relative size-32 ...">
                    <Img src= {logo} alt='Logo' /> {/*Colocar imagem logo*/}
        
                <Ul className="absolute left-150 top-0 h-16 ...">
                    <Li className="block w-full h-full flex items-center justify-center">Sobre</Li>
                    <Li className="block w-full h-full flex items-center justify-center">Funções</Li>
                    <Li className="block w-full h-full flex items-center justify-center">Contato</Li>
                </Ul>

                <BtnLogin className="absolute top-0 right-10 size-16 ..." > <Link to={"/login"} className="block w-full h-full flex items-center justify-center">Login</Link> </BtnLogin>

              
            </Nav>
            <Saudacao>
                <P className="block w-full h-full flex items-center justify-center">Ola bem vindo ao ErpWeb da sua empresa</P>
            </Saudacao>

            <MainPag>
                   <DivSobre className="opacity-50">
                       
                    </DivSobre> 
                     <DivTag style={{border: "1px solid red", background:"white"}}><h2 style={{color: "black"}}>Ola mundo</h2></DivTag>
                   
            </MainPag>
        </ContainerBody>
    )
}

export default HomePag