import { useEffect, useState } from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Logo.png"



const ContainerCad = styled.div`
    background-image: url(${logo}) ;
    background-repeat: no-repeat;
    background-size: 300px;
    background-position: center;
    background-position: top;
    border: 1px solid red;
    margin-left: 23%;
    position: absolute; 
    top: 0; // position absolut top 0 para deixar o main no topo da pagina
    width: 76%;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    //border: 1px solid red;
    margin-top: 300px;
    width: 50%;
    gap: 10px;
`

const InputNome =styled.input`
    border-bottom: solid 2px #C3C6C4;
`
const InputEmail =styled.input`
    border-bottom: solid 2px #C3C6C4;
`
const InputSenha =styled.input`
    border-bottom: solid 2px #C3C6C4;
`
const BtnSalvar =styled.button`
    border: 2px solid #C3C6C4;
    width: 15%;
`

function Cadastro(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    
  
    const handleCadastro = (e) =>{
        e.preventDefault();

          if(nome.trim() === ""){ //o trim remove os espaços em branco no inicio e no final
            alert("Nome nao pode ser vazio");
            return;
         }

         if(email.trim() === ""){
            alert("Email nao pode ser vazio");
            return;
         }

          if(senha.trim() === ""){
            alert("Senha nao pode ser vazio");
            return;
         }



        const usuario = {nome, email, senha};

        const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

        usuariosSalvos.push(usuario);

        localStorage.setItem("usuarioswd", JSON.stringify(usuariosSalvos));

        alert("Usuario cadastrado com sucesso!");
        setNome("");
        setEmail("");
        setSenha("");
    };

 return(
    <div>
         <Header/>
        <ContainerCad>
           
           <Form onSubmit={handleCadastro}>

            <div>
                <InputNome
                type="text"
                placeholder="Nome*"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                
                />
            </div>

            <div>
                <InputEmail
                type="text"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              
                />
            </div>

            <div>
                <InputSenha
                type="password"
                placeholder="Senha*"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            <BtnSalvar type="submit">Salvar</BtnSalvar>
           </Form>
        </ContainerCad>
    </div>
        
    )
}

export default Cadastro