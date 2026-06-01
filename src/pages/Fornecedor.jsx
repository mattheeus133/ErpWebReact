//Sempre lembrar de criar a rota da pag

import styled from "styled-components"
import {Modal} from "../components/Modal";
import { useState } from "react";

/*Inicio do DivInput*/
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
/*Fim do DivInput*/

/*Inicio do DivMain*/
const DivMain = styled.div`
`
/*Fim do DivMain */

/*Inicio do DivBtns */
const DivBtns = styled.div`
    border: 1px solid blue;
    position: relative;
    top: 85%;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 2%;
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

const BtnAlterarForne = styled.button`
    border-radius: 8px;
    border: 2px solid #CDCD00;
    width: 200px;
   

      &:hover{
        background: #CDCD00;
        color: white;
     }

`

const BtnDelForne = styled.button`
     border-radius: 8px;
     border: 2px solid #ff0000;
     width: 200px;
     

     &:hover{
        background: #ff0000;
        color: white;
     }
`
/*Fim do DivBtns */

const Input2 = styled.input`
    border: 2px solid #999999;
`

/*Inicio Modal */

const FormModal = styled.form`
    
`
const DivLadoA = styled.div`
    
`
const DivAjusteA = styled.div`
    display: flex;
    flex-direction: column;
    width: 231px;
    gap: 10px;
`
/*Fim Modal */


function Fornecedor (){

    const [open, setOpen] = useState(false);

    return(
        <ContainerFor>
            <DivInput>
                <Label>Buscar Produto: </Label>
                <Input
                type="text"
                placeholder="Nome fornecedor"
                />
            </DivInput>
                <DivMain>
                    <div style={{border:"1px solid red"}}> </div>
                    <div> </div>
                    <div> </div>

                </DivMain>
            <DivBtns>
                <BtnCadForne onClick={() => setOpen(true)}>+ Cadastra fornecedor</BtnCadForne>
                <BtnAlterarForne> Alterar Cad fornecedor</BtnAlterarForne>
                <BtnDelForne>- Excluir Fornecedor</BtnDelForne>
            </DivBtns>
            <div>
                <Modal isOpen = {open} onClose={() => setOpen(false)}>
                    <FormModal>
                        <DivLadoA>
                            <label>Cadastro de Fornecedor</label>

                            <DivAjusteA>
                            <label>Razão Social</label>
                            <Input2
                            type="text"
                            placeholder=""
                            />
                        
                            <label>Nome Fantasia</label>
                            <Input2
                            type="text"
                            placeholder=""
                            />

                            <label>Tipo Pessoa</label>
                            <select>
                                <option value={"CPF"}>CPF</option>
                                <option value={"CNPJ"}>CNPJ</option>
                            </select>
                        </DivAjusteA>
                        </DivLadoA>
                    </FormModal>
                </Modal>
            </div>

        </ContainerFor>
       
    )
}

export default Fornecedor