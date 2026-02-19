import styled from "styled-components"
import { api } from "../services/api";
import { useState } from "react";
//import { validarSenha } from "../utils/validacoes";
import { InputSenha } from "../utils/validacoes";

const DivContainerCad = styled.div`
    
`
const DivContainerForm = styled.div`
   border: 1px solid green;
   height: 100vh;
   display: flex;
   justify-content: center;
`
const Form = styled.form`
    border: 1px solid red;
    width: 40%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    
`

const InputForms = styled.input`
    border: 1px solid red;
    width: 50%;
    height: 40px;

    
`

const ButtonSalvar = styled.button`
    cursor: pointer;
`

function CadastroCliente (){

    const [empresaId, setEmpresaId] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

   // const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const [perfil, setPerfil] = useState("");
    const [erro, setErro] = useState("");

    const [valor, setValor] = useState("");

    //const [validacao, setValidacao] = useState({});

     const{
                senha,
                validacao,
                senhaValida,
                handleChange
            } = InputSenha();

            const retorno = InputSenha();
            console.log(retorno);  //Teste de função

    {/*Salvando na Api*/}
    const salvar = async (e) => {
        e.preventDefault();

          if(!senha.trim()){
            setErro("senha em branco")
            return;
        }
        


        await api.post("/usuarios", {
            empresaId: Number(empresaId),
            nome,
            email,
            senha,
            perfil: Number(perfil)
        })

        .then(res =>{
            setValor(res.status)
        })
        .catch(err =>{
            setValor(err.response.status)
        })

    }

  


    return(
        <DivContainerCad>
    <DivContainerForm>
    <Form onSubmit={salvar}>
        <InputForms
            type="text"
            value={empresaId}
            placeholder="EmpresaId"
            onChange={e => setEmpresaId(e.target.value)}
         />
           <InputForms 
           value={nome}
            type="text"
            placeholder="Nome"
            onChange={e => setNome(e.target.value)}
         />
           <InputForms 
           value={email}
            type="text"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
         />
           <InputForms 
           value={senha}
            type={mostrarSenha ? "text" : "password"}
            placeholder="senha"
            onChange={handleChange}
         />
            <p>{erro}</p>

            <button
             type="button"
             onClick={() => setMostrarSenha(!mostrarSenha)}
            >
            {mostrarSenha ? "Esconder" : "Mostrar"}
            </button>

            <p>-Senha deve conter</p>
            <p>-Letra Maiuscula: {validacao.maiuscula ? "✅" : "❌"}</p>
            <p>-Letra Minuscula: {validacao.minuscula ? "✅" : "❌"}</p> 
            <p>-Caracter especial: {validacao.especial ? "✅" : "❌"}</p>
            <p>-Numero: {validacao.numero ? "✅" : "❌"}</p>
            <p>-Minimo de 8 caracter: {validacao.tamanho ? "✅" : "❌"}</p>
          <InputForms 
            value={perfil}
            type="text"
            placeholder="Perfil"
            onChange={e => setPerfil(e.target.value)}
         />

         <ButtonSalvar disabled = {!senhaValida}
            type="button"
            onClick={salvar}
         >
            Cadastra {senhaValida ? "✅" : "❌"}
         </ButtonSalvar>
    </Form>
    </DivContainerForm>
        <h1>Status: {valor}</h1>
        </DivContainerCad>
    )
}

export default CadastroCliente