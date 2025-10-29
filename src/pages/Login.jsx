import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/Logo.png"
import { useEffect, useState } from "react"


const PageWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    
`
const ContainerLogin = styled.div`
        background-image: url(${logo}) ;
        background-repeat: no-repeat;
        background-size: 300px;
        background-position: center;
        height: 400px;
        width: 50%;
`
const FormLogin = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 350px;
        gap: 10px;
`
const InputEmail = styled.input`
    min-width: 40%;
    height: 30px;
    border: 1px solid #C0C0C0;

`
const InputSenha = styled.input`
    min-width: 40%;
    height: 30px;
    border: 1px solid #C0C0C0;
`
const BtnEntra = styled.button`
    min-width: 15%;
      height: 30px;
      background: #1E90FF;
      color: white;
      border: none;

      &:hover{
        background: #00BFFF;
        color: black;
      }
`

const DivCheck = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`


function Login(){

const[email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [mensagem, setMensagem] = useState("");
const navigate = useNavigate();

const handleLogin = (e) => {
    e.preventDefault();

    const usuariosSalvos =  JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuariosSalvos.find(
        (u) => u.email === email && u.senha === senha 
);

    if(usuarioEncontrado){
        navigate("/home");
    }
    else{
        alert("Erro")
    }
}
/*const [usuarioLogado, setUsuarioLogado] = useState(null);
const navigate = useNavigate();


useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if(usuario){
        setUsuarioLogado(JSON.parse(usuario));
    } 
}, []);

const handleLogin = (e) => {
    e.preventDefault();

    const usuarioFake = {
        email: "teste@teste.com",
        senha: "12345",
        nome: "Matheus",
    }

    if(email === usuarioFake.email && senha === usuarioFake.senha){
        localStorage.setItem("usuario", JSON.stringify(usuarioFake));
        setUsuarioLogado(usuarioFake);
        navigate("/home");
    }else{
        alert("Email ou senha invalida!");
    }
};

const handleLogout = () =>{
    localStorage.removeItem("usuario");
    setUsuarioLogado(null);
};*/


    return (
        <PageWrapper>
            <ContainerLogin>
             {/*  {usuarioLogado ? (
                    <div>
                        <h1>Bem vindo deu certo de inicio {usuarioLogado.nome}</h1>
                        <button onClick={handleLogout}>Sair</button>
                    </div>
                ):(*/} 
                <FormLogin onSubmit={handleLogin}>
                    <InputEmail
                    type="text"
                    placeholder="Email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)} />

                    <InputSenha
                    type="password"
                    placeholder="Senha"
                   value={senha}
                   onChange={(e => setSenha(e.target.value))}
                    />
                    <BtnEntra type="submit">Entra</BtnEntra>

                    <DivCheck>
                        <input 
                        type="checkbox"/>
                        <label>Manter conectado</label>
                    </DivCheck>

                
                </FormLogin>
            
            </ContainerLogin>
             <Link to={"/home"}>Home</Link>
        </PageWrapper>

       
    )
}

export default Login