import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "react-modal";
import { UserContext } from "../../contexts/userContext";
import { IoIosAddCircleOutline } from "react-icons/io";
import { StyledModal } from "../clientsPage/style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import { orderSchema } from "../../schemas/ordersSchemas";
import { StyledModalOrder } from "./style";

Modal.setAppElement("#root");

const Pedidos = () => {
    const {
        orders,
        addOrder,
        setAddOrder,
        submitOrder,
        finishedPage,
        setFinishedPage,
        submitDeleteOrder,
        sumbitUpdateOrder,
        loading,
    } = useContext(UserContext);

    const [busca, setBusca] = useState("");

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

    const [deleteOrder, setDeleteOrder] = useState(false);
    const [finishedOrder, setFinishedOrder] = useState(false);

    const lowerBusca = busca.toLowerCase();
    const clientsFiltrados = orders?.filter((order) =>
        order.client.name.toLowerCase().includes(lowerBusca)
    );

    const toggleModalAddOrder = () => {
        setAddOrder(!addOrder);
    };

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
        overlay: { zIndex: 1000 },
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: zodResolver(orderSchema),
    });

    return (
        <>
            <div>
                <span>
                    <h1>Pedidos</h1>
                    <button onClick={() => setFinishedPage(!finishedPage)}>
                        Pedidos finalizados
                    </button>
                </span>
                <section>
                    <button onClick={() => setAddOrder(!addOrder)}>
                        <IoIosAddCircleOutline size={30} />
                    </button>
                    <section>
                        <AiOutlineSearch size={30} />
                        <input
                            onChange={(event) => setBusca(event.target.value)}
                            placeholder="Pesquisar por cliente..."
                        />
                    </section>
                </section>
            </div>
            <ul>
                {clientsFiltrados?.map((order) => {
                    if (order.is_finished === true) {
                        return null;
                    }
                    return (
                        <li
                            key={order.id}
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
                    );
                })}
            </ul>
            <Modal
                isOpen={addOrder}
                onRequestClose={toggleModalAddOrder}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <StyledModal>
                    <div>
                        <h2>Novo pedido</h2>
                        <button onClick={toggleModalAddOrder}>X</button>
                    </div>
                    <form onSubmit={handleSubmit(submitOrder)}>
                        <section>
                            <Input
                                id={"name"}
                                label={"Nome"}
                                placeholder={"digite aqui o nome do pedido"}
                                register={register("name")}
                                type={"text"}
                            />
                            <span>
                                {errors?.name ? errors.name.message : null}
                            </span>
                        </section>
                        <section>
                            <Input
                                id={"description"}
                                label={"Descriçao"}
                                placeholder={
                                    "digite aqui a descrição do pedido"
                                }
                                register={register("description")}
                                type={"text"}
                            />
                            <span>
                                {errors?.description
                                    ? errors.description.message
                                    : null}
                            </span>
                        </section>
                        <section>
                            <Input
                                id={"price"}
                                label={"Preço"}
                                placeholder={"digite aqui o preço"}
                                register={register("price")}
                                type={"text"}
                            />
                            <span>
                                {errors?.price ? errors.price.message : null}
                            </span>
                        </section>
                        <section>
                            <Input
                                id={"delivery_date"}
                                label={"Data de entrega"}
                                placeholder={"digite aqui a data de entrega"}
                                register={register("delivery_date")}
                                type={"date"}
                            />
                            <span>
                                {errors?.delivery_date
                                    ? errors.delivery_date.message
                                    : null}
                            </span>
                        </section>
                        <section>
                            <Input
                                id={"payment_deadline"}
                                label={"Data de pagamento"}
                                placeholder={"digite aqui a data de pagamento"}
                                register={register("payment_deadline")}
                                type={"date"}
                            />
                            <span>
                                {errors?.payment_deadline
                                    ? errors.payment_deadline.message
                                    : null}
                            </span>
                        </section>
                        <section>
                            <Input
                                id={"client"}
                                label={"Cliente"}
                                placeholder={"digite aqui o cliente"}
                                register={register("client")}
                                type={"text"}
                            />
                            <span>
                                {errors?.client ? errors.client.message : null}
                            </span>
                        </section>

                        <button disabled={loading}>Criar</button>
                    </form>
                </StyledModal>
            </Modal>
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
                        <section>
                            {finishedOrder === false ? (
                                <button onClick={() => setFinishedOrder(true)}>
                                    Finalizar pedido
                                </button>
                            ) : (
                                <button
                                    disabled={loading}
                                    onClick={() => {
                                        sumbitUpdateOrder(orderModal);
                                        setFinishedOrder(false);
                                        setModalOrder(false);
                                    }}
                                >
                                    Confirmar
                                </button>
                            )}
                            {deleteOrder === false ? (
                                <button
                                    onClick={() => {
                                        setDeleteOrder(true);
                                    }}
                                >
                                    Deletar pedido
                                </button>
                            ) : (
                                <button
                                    disabled={loading}
                                    onClick={() => {
                                        submitDeleteOrder(orderModal);
                                        setDeleteOrder(false);
                                        setModalOrder(false);
                                    }}
                                >
                                    Confirmar deleção?
                                </button>
                            )}
                        </section>
                    </div>
                </StyledModalOrder>
            </Modal>
        </>
    );
};

export { Pedidos };
