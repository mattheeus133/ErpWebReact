import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-Content: center;
    align-Items: center;
`
const Modall = styled.div`
    position: relative;
   /* background: linear-gradient(
    90deg,
    #001535 0%,
    #000f25 50%,
    #00060f 100%
    );*/

    background: #CFCFCF;
    width: 618px;
    height: 400px;
    padding: 20px;
    border-Radius: 10px;
    min-Width: 300px;
`
const BtnClose = styled.button`
    position: absolute;
    color: white;
    width: 40px;
    height: 40px;
    top: 20px;
    left: 90%;
    background: none;
    font-size: 2rem;
    border: none;
`




export function Modal({isOpen, onClose, children}){
    if(!isOpen) return null;

    return(
       <Overlay onClick={onClose}>
                <Modall onClick={(e) => e.stopPropagation()}>
                    {children}
                    <BtnClose onClick={onClose}>X</BtnClose>
                        
                </Modall>
            </Overlay>
    )
}

