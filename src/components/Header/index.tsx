import logo from "../../assets/logo.png";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="dt money" />
        <NewTransactionButton type="button">
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
