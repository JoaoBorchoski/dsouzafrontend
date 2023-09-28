import { StyledHeader } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { MdExitToApp } from "react-icons/md";
import logo from "../../img/dsouzaimage.jpeg";

export const Header = () => {
    const { logout, setPage, setFinishedPage } = useContext(UserContext);

    return (
        <StyledHeader>
            <img src={logo} alt="Logo" />
            <nav>
                <button
                    onClick={() => {
                        setPage(false);
                        setFinishedPage(false);
                    }}
                >
                    Pedidos
                </button>
                <button
                    onClick={() => {
                        setPage(true);
                        setFinishedPage(false);
                    }}
                >
                    Clientes
                </button>
                <button
                    onClick={() => {
                        logout();
                    }}
                >
                    <MdExitToApp size={30} />
                </button>
            </nav>
        </StyledHeader>
    );
};
