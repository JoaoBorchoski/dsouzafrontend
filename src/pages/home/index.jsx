import { useContext } from "react";
import { Header } from "../../components/header";
import { StyledDivMain } from "./styles";
import { UserContext } from "../../contexts/userContext";
import { Pedidos } from "../../components/orderPage";
import { Clientes } from "../../components/clientsPage";
import { FinishedOrders } from "../finishedOrders";

export const Home = () => {
    const { page, finishedPage } = useContext(UserContext);

    return (
        <>
            <Header />
            <StyledDivMain>
                {finishedPage === true ? (
                    <FinishedOrders />
                ) : page === true ? (
                    <Clientes />
                ) : (
                    <Pedidos />
                )}
            </StyledDivMain>
        </>
    );
};
