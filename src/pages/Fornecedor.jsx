//Sempre lembrar de criar a rota da pag

import styled from "styled-components"


const ContainerFor = styled.div`
    border: 1px solid red;
    height: 100%;
   
`
const DivInput = styled.div`
    border: 1px solid green;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`
const Label = styled.div`
    margin: 10px;
`

const Input = styled.input`
  border: 1px solid black ;
  margin-right: 30px;
  width: 20%;
  
`

const DivBtns = styled.div`
    border: 1px solid blue;
    position: relative;
    top: 85%;
    height: 50px;
    display: flex;
    align-items: center;
`

const BtnCadForne =styled.button`
    margin-left: 10%;
    border-radius: 8px;
    border: 2px solid #536DFE;
    width: 200px;
    cursor: pointer;

    &:hover{
        background: #536DFE;
        color: white;
    }

`

const BtnDelForne = styled.button`
     border-radius: 8px;
     border: 2px solid #ff0000;
     width: 200px;
     margin: 2%;

     &:hover{
        background: #ff0000;
        color: white;
     }
`



function Fornecedor (){
    return(
        <ContainerFor>
            <DivInput>
                <Label>Buscar Fornecedor: </Label>
                <Input
                type="text"
                placeholder="Nome fornecedor"
                />
            </DivInput>
      
            <DivBtns>
                <BtnCadForne>+ Cadastra fornecedor</BtnCadForne>
                <BtnDelForne>- Excluir Fornecedor</BtnDelForne>
            </DivBtns>
    

        </ContainerFor>
       
    )
}

export default Fornecedor