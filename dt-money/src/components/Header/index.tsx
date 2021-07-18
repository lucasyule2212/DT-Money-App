import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import {ThemeContext} from "styled-components"
import Switch from 'react-switch';
import { useContext } from "react";

interface HeaderProps{
  onOpenNewTransactionModal:()=>void;
  toggleTheme:()=>void;
}

function Header({onOpenNewTransactionModal,toggleTheme}:HeaderProps) {
  const{colors,title}=useContext(ThemeContext)
  return (
    <Container>
      <Content>
        <img src={logo} alt="DT Money" />
        <div>
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
        <Switch 
        onChange={toggleTheme} 
        checked={title==='dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        handleDiameter={20}
        offColor={colors.background}
        onColor={colors.background}

        /> 
        </div> 
      </Content>
    </Container>
  );
}

export { Header };
