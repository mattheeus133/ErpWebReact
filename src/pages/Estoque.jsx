import styled from "styled-components"
//import Logo from "../assets/LogoErp.png"
import { useState } from "react"
import "../style/global.css"

const ContainerMain = styled.div`
   height: 100%;
   width: 100%;
   border: 1px solid red;
`


function MainPag(){
   /* const [valor, setValor] = useState('');

    const handleClick = () => {
        console.log('Valor digitado: ', valor);
        alert("funciono")
     } COMO PEGAR O VALOR DO INPUT */

    const [codigo, setCodigo] = useState('');
    const [produto, setProduto] = useState (null);
    const [erro, setErro] = useState(''); 
   // const [menuAberto, setMenuAberto] = useState(false);

    const buscarProdutoPorCodigo = (e) => {
        e.preventDefault();
        setErro('');
        setProduto(null);

        fetch(`https://localhost:7098/api/CadProduto/codigo/${codigo}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Produto não encontrado');
            }
            return response.json();
        })
        .then((data) => {
            setProduto(data);
        })
        .catch((err) => {
            setErro(err.message);
        });


    };



    return(
        <ContainerMain> 
           
        </ContainerMain>

    
    )
}

export default MainPag 