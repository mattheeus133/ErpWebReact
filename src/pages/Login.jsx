import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/Logo.png"
import { useEffect, useState } from "react"
import { api } from "../services/api"

const Div = styled.div`
    border: 1px solid red;
    height: 100vh;
    display: flex;
    justify-content: center;
  
`
const ContainerInput = styled.div`
  border: 1px solid red;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 10px;
  

`
const DivInputBtn = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
`

const InputEmail = styled.input`
  width: 50%;
  height: 40px;
`

const InputSenha = styled.input`
  width: 50%;
  height: 40px;
 
`
const Button = styled.button`
 position: absolute;
 left: 62%;
 top: 20%;
`
const ButtonEntra = styled.button`
  cursor: pointer;
  border: 2px solid #0498c9;
  width: 30%;
  height: 30px;
  border-radius: 20px;
 

  &:hover{
    background: #0498c9;
    color: white;
    border: 2px solid black;
  }
`


function Login(){
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [senha, setSenha] = useState();

    return(

    <Div>
      <ContainerInput>
      <InputEmail
        type="text"
        placeholder="Digite seu Email"
      />

      <DivInputBtn>
        <InputSenha
          type={mostrarSenha ? "text" : "password"}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
        />

        <Button
          type="button"
          onClick={() => setMostrarSenha(!mostrarSenha)}
        >
          {mostrarSenha ? "Esconder" : "Mostrar"}
        </Button>
      </DivInputBtn>

      <ButtonEntra 
        type="button"

      >
        Entrar
      </ButtonEntra>
   


        <a><Link to={"/teste"}>Esqueci minha senha</Link></a>
        <a><Link to={"/cadastroCliente"}>Realizar cadastro</Link></a>
      </ContainerInput>
    </Div>
    )
}


export default Login