import styled from "styled-components"
//import Logo from "../assets/LogoErp.png"
import { useState } from "react"
import "../style/global.css"

const ContainerMain = styled.div`
   height: 100%;
   width: 100%;
   border: 1px solid red;
`
const Busca = styled.header`
    border: 1px solid green;
    height: 50px;
`
const MainConteudo = styled.div`
    height: 100%;
    position: relative;
`

const Conteudo = styled.div`
    border: 1px solid blue;
    width: 35%;
    height: 50%;
    margin-left: 10%;
    margin-top: 10%;
`
const Info = styled.div`
    position: absolute;
    border: 1px solid black;
    height: 50%;
    width: 30%;
    left: 55%;
    top: 0;
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
           <Busca>
        <form onSubmit={buscarProdutoPorCodigo}>
            <input
                type="text"
                placeholder="Digite o codigo"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
            
            />
            <button type="submit">Buscar</button>
        </form>
           </Busca>
           <MainConteudo>

            <Conteudo>
                 {produto?.fotoBase64 && (
               <img src={produto.fotoBase64}/>
               )}
            </Conteudo>

            <Info > 
                 {erro && <p>{erro}</p>}
                <section id="Section">
                    {produto && (
                    <table>
                        <tbody>
                            <tr>
                                <th className="title text-left">Nome: </th>
                                <td className="result">{produto.nome}</td>
                            </tr>

                            <tr>
                                <th className="title text-left">Codigo: </th>
                                <td className="result">{produto.codigoProduto}</td>
                            </tr>

                            <tr>
                                <th className="title text-left">Estoque: </th>
                                <td className="result">{produto.estoque}</td>
                            </tr>

                            <tr>
                                <th className="title text-left">Estoque minimo: </th>
                                <td className="result" style={{background:produto.estoque < produto.estoqueMinimo ? "red" : "white"}}>{produto.estoqueMinimo}</td>
                                {/*Aqui esta fazendo uma condição de que se estoque minimo for maior que estoque atual estoque minimo ficara em vermelho*/}
                            </tr>

                             <tr>
                                <th className="title text-left">Localização: </th>
                                <td className="result">{produto.localizacao}</td>
                            </tr>
                        </tbody>
                    </table>
                    )}
                </section>         
        
             </Info>
           </MainConteudo>
        </ContainerMain>

    
    )
}

export default MainPag 