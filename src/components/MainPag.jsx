import styled from "styled-components"
//import Logo from "../assets/LogoErp.png"
import { useState } from "react"
import "../style/global.css"

const ContainerMain = styled.div`
   height: 100%;
   width: 76%;
   border: 1px solid red;
   margin-left: 25%;
`

const DivInput = styled.div`
    border: 1px solid green; 
    width: 76%; //definindo o tamanho da div da area de busca
    display: flex; //usando o flex para centralizar o input de busca
    align-items: center;
    justify-content: center;
`


const Input = styled.input`
    border: 1px solid var(--color-border);
`
const BtnBuscar = styled.button`
  border: 1px solid ;
`
const MainP = styled.div`
    border: 1px solid yellow;
    height: 100%;
    width: 76%;

`

const ImgBanco = styled.img`

    width: 100%;
    
`

const Section = styled.section`
   border: 1px solid blue;
    position: absolute;
    top: 50px;
    width: 35%;
    left: 50%; //Definição do posicionamento da div section
    height: 400px;
    flex: 2;
    padding: 0;
`
const Table = styled.table`
    margin-left: 0;
    width: 100%;
`
const Aside = styled.aside`
    position: absolute;
    top: 100px;
    left: 15%;
 border: 1px solid green;
    margin: 10px;
    height: 200px;
    width: 30%;
    flex: 1;
`
const Th = styled.th`
  border: 1px solid red;
    width: 50%;
`
const Td = styled.td`
 border: 1px solid green;
    width: 50%;
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
            <DivInput className = "absolute top-0 right-0 h-16 ..."> {/*usando o position do tailwind para posicionar a div da area de busca*/}
                <form onSubmit={buscarProdutoPorCodigo} >
                    <Input className="absolute right-[20%]" // usando o position para posicionar o input de busca
                    type="text"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    placeholder="Codigo"/>  
                    <BtnBuscar type="submit" className="absolute right-[15%]">Buscar</BtnBuscar> {/* usando o position para posicionar o input de busca */}
                </form>
            </DivInput>

        <MainP className="absolute top-[80px] right-0 h-16 ...">
                  {erro && <p>{erro}</p>}
                <Section id="Section">
                    {produto && (
                    <Table>
                        <tbody>
                            <tr>
                                <Th className="title text-left">Nome: </Th>
                                <Td className="result">{produto.nome}</Td>
                            </tr>

                            <tr>
                                <Th className="title text-left">Codigo: </Th>
                                <Td className="result">{produto.codigoProduto}</Td>
                            </tr>

                            <tr>
                                <Th className="title text-left">Estoque: </Th>
                                <Td className="result">{produto.estoque}</Td>
                            </tr>

                            <tr>
                                <Th className="title text-left">Estoque minimo: </Th>
                                <Td className="result" style={{background:produto.estoque < produto.estoqueMinimo ? "red" : "white"}}>{produto.estoqueMinimo}</Td>
                                {/*Aqui esta fazendo uma condição de que se estoque minimo for maior que estoque atual estoque minimo ficara em vermelho*/}
                            </tr>

                             <tr>
                                <Th className="title text-left">Localização: </Th>
                                <Td className="result">{produto.localizacao}</Td>
                            </tr>
                        </tbody>
                    </Table>
                    )}
                </Section>         
            <Aside id="aside">
                {produto?.fotoBase64 && (
               <ImgBanco src={produto.fotoBase64}/>
               )}
            </Aside>

          
                <div id="divbtnInventario">
                    <button id="btnInventario">Inventario</button>
                </div>
        
        </MainP>
        
        </ContainerMain>

    
    )
}

export default MainPag 