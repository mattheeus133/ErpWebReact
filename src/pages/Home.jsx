import styled from "styled-components"
import Header from "../components/Header"

const Cards = styled.div`

`

function Home(){
    return(
    <div className = "relative max-w-7xl">
        <Cards>
            <div>
                <h1>Ola bem vindo ao Erp da sua empresa
                    Sua empresa com melhore Erp do mercado 
                </h1>
            </div>
        </Cards>
    </div>
    )
}

export default Home