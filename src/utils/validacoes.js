/*export function validarSenha(senha){
       const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
       console.log("Nao validado")
       return regex.test(senha);
}*/
    
import { useState } from "react";

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
}



