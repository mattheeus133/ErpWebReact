import { useEffect, useState } from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Logo.png"



const ContainerCad = styled.div`
    background-image: url(${logo}) ; // colocando imagem na pag
    background-repeat: no-repeat; // nao repitir a imgem
    background-size: 300px; // tamanho da imagem 
    background-position: center; // manter a imagem no centro 
    background-position: top; //e com o topo 0 
    border: 1px solid red;
    position: absolute; 
    top: 10px; // position absolut top 0 para deixar o main no topo da pagina
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
    const [nome, setNome] = useState(""); {/*useState("") -> inicia com o estado vazio */}
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    
  
    const handleCadastro = (e) =>{
        e.preventDefault(); {/*previne que a pagina recarregue apos o submit */}

          if(nome.trim() === ""){   //*o trim remove os espaços em branco no inicio e no final
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



        const usuario = {nome, email, senha}; {/*Aqui pega o valor digitado */}

        const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || []; {/*Aqui busca se ja a uma lista salva chamada "usuarios" se nao tiver cria um array vazio [] */}

        usuariosSalvos.push(usuario);  {/*Salva um usuario novo */}

        localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos)); {/*transforma o array de objetos em texto JSON. */}

        alert("Usuario cadastrado com sucesso!"); {/*Aqui limpa os dados para receber novos dados */}
        setNome("");
        setEmail("");
        setSenha("");
    };

 return(
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
        
    )
}

export default Cadastro