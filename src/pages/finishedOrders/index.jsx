import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { UserContext } from "../../contexts/userContext";
import { StyledModalOrder } from "../../components/orderPage/style";
import Modal from "react-modal";

export const FinishedOrders = () => {
    const { orders, setFinishedPage } = useContext(UserContext);

    const [busca, setBusca] = useState("");
    const lowerBusca = busca.toLowerCase();

    const [orderModal, setOrderModal] = useState({
        id: 1,
        name: "order teste",
        description: "descrição",
        price: "1",
        order_date: "2023-09-20",
        delivery_date: "2023-09-22",
        payment_deadline: "2023-10-22",
        is_finished: true,
        client: {
            name: "teste",
        },
    });
    const [modalOrder, setModalOrder] = useState(false);

    const clientsFiltrados = orders?.filter((order) =>
        order.client.name.toLowerCase().includes(lowerBusca)
    );

    const toggleModal = () => {
        setModalOrder(!modalOrder);
    };

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "500px",
            background: "#d9d9d9",
            maxHeight: "90%",
            overFlow: "auto",
        },
    };

    return (
        <>
            <div>
                <span>
                    <h1>Pedidos</h1>
                    <button onClick={() => setFinishedPage(false)}>
                        Voltar
                    </button>
                </span>
                <section>
                    <section>
                        <AiOutlineSearch size={30} />
                        <input
                            onChange={(event) => setBusca(event.target.value)}
                            placeholder="Pesquisar cliente..."
                        />
                    </section>
                </section>
            </div>
            <ul>
                {clientsFiltrados?.map((order) => {
                    if (order.is_finished === false) {
                        return null;
                    }
                    return (
                        <section key={order.id}>
                            <li
                                onClick={() => {
                                    setOrderModal(order);
                                    setModalOrder(true);
                                }}
                            >
                                <span>
                                    <h3>Pedido número:</h3>
                                    <p>{order.id}</p>
                                </span>
                                <span>
                                    <h3>Nome do cliente:</h3>
                                    <p>{order.client.name}</p>
                                </span>
                                <span>
                                    <h3>Nome do pedido:</h3>
                                    <p>{order.name}</p>
                                </span>
                                <span>
                                    <h3>Data de entrega:</h3>
                                    <p>{order.delivery_date}</p>
                                </span>

                                <span>
                                    <h3>Estado do pedido:</h3>
                                    <p>
                                        {order.is_finished
                                            ? "Finalizado"
                                            : "Em andamento"}
                                    </p>
                                </span>
                            </li>
                        </section>
                    );
                })}
            </ul>
            <Modal
                isOpen={modalOrder}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <StyledModalOrder>
                    <section>
                        <h2>Descrição do pedido</h2>
                        <button onClick={toggleModal}>X</button>
                    </section>
                    <div>
                        <h3>{orderModal.name}</h3>
                        <p>Cliente: {orderModal.client.name}</p>
                        <p>Descrição: {orderModal.description}</p>
                        <p>Preço: {orderModal.price}</p>
                        <p>Data de pedido: {orderModal.order_date}</p>
                        <p>Data de entrega: {orderModal.delivery_date}</p>
                        <p>Data de pagamento: {orderModal.payment_deadline}</p>
                        <p>
                            Estado do pedido:
                            <span>
                                {orderModal.is_finished
                                    ? "Finalizado"
                                    : "Em andamento"}
                            </span>
                        </p>
                        <button
                            onClick={() => {
                                console.log(orderModal);
                            }}
                        >
                            Deletar pedido
                        </button>
                    </div>
                </StyledModalOrder>
            </Modal>
        </>
    );
};
