import {Outlet} from "react-router-dom"
import Header from "../components/Header"
import styled from "styled-components"

const ContainerLayout = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const HeaderArea = styled.div`
  width: 250px;
  background-color: #1f1f1f;
  color: #fff;
`;

const MainArea = styled.main`
  flex: 1;
  background-color: #f4f4f4;
  padding: 0px;
  overflow-y: auto;
`;

function Layout(){
    return(
      <ContainerLayout> {/*Container da pag */}
      <HeaderArea>
        <Header /> {/*header definido da pag */}
      </HeaderArea>

      <MainArea>
        <Outlet /> {/* Aqui entra sua página, ex: Estoque.jsx */}
      </MainArea>
    </ContainerLayout>
        
    )
}

export default Layout