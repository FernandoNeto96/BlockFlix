import { useContext } from "react";
import { MyContext } from "../../Context/Context";
import Carrinho from "../../Img/1001596.svg"
import Sair from "../../Img/sair.png"
import Historia from "../../Img/historia.png"

import {
  StyledNavbar,
  StyleCartLogin,
} from "./Navbar.styled";

import { Link, useHistory } from "react-router-dom";


export default function Navbar() {
  
  const { carrinho, AtualizaCarrinho } = useContext(MyContext);

  const history = useHistory();

  const mudarRota = (routes) => {
    history.push(routes)
  }



 
  return (
    <StyledNavbar>
      <h1 onClick={() => mudarRota("/home")}>Blockflix</h1>

      <StyleCartLogin>
      <img src={Carrinho} alt="..." onClick={() => mudarRota("/carrinho")}/>
        {carrinho.length > 0 ? <div>{carrinho.length}</div> : null}
        <img src={Historia} alt="..." onClick={() => mudarRota("/historico")}/>
        <img src={Sair} alt="..." onClick={() => mudarRota("/")}/>

      </StyleCartLogin>
    </StyledNavbar>
  );
}
