/*import { useState } from "react";

export function InputSenha() {
  const [senha, setSenha] = useState("");
  const [validacao, setValidacao] = useState({
    minuscula: false,
    maiuscula: false,
    numero: false,
    especial: false,
    tamanho: false
  });

  // Regras separadas (bem profissional)
  const regras = {
    minuscula: /[a-z]/,
    maiuscula: /[A-Z]/,
    numero: /\d/,
    especial: /[@$!%*?&]/,
    tamanho: /^.{8,}$/
  };

  // Função que valida a senha inteira
  function validarSenha(senha) {
    return {
      minuscula: regras.minuscula.test(senha),
      maiuscula: regras.maiuscula.test(senha),
      numero: regras.numero.test(senha),
      especial: regras.especial.test(senha),
      tamanho: regras.tamanho.test(senha)
    };
  }

  // Dispara a cada caractere digitado
  function handleChange(e) {
    const value = e.target.value;
    setSenha(value);
    setValidacao(validarSenha(value));
  }

  const senhaValida = Object.values(validacao).every(Boolean);

  return {
    senha,
    validacao,
    senhaValida,
    handleChange
  };
}*/

import { useEffect, useState } from "react"
import { api } from "../services/api";

function Teste(){

  const [nomeBusca, setNomeBusca] = useState("");
  const [usuarios, setUsuario] = useState([]);

const buscarUsuario = async () => {
   try{
    const response = await api.get("/usuarios")

    console.log("Response", response.data);
    console.log("E array?", Array.isArray(response.data));

    setUsuario([response.data]);
   }
   catch(err){
    console.log(err.status);
   }
}
  return(
      <div>
        <input
          type="number"
          value={nomeBusca}
          onChange={(e) => setNomeBusca(e.target.value)}
          placeholder="Digite aqui"
        />

        <button onClick={buscarUsuario}>Mostrar</button>

        {usuarios.map(u => (
          
          <p>{u.nome} - {u.email}</p>

        ))}



      </div>
  )
}

export default Teste
