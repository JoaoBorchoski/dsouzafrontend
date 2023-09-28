import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { UserContext } from "../../contexts/userContext";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "react-modal";
import { StyledModal, StyledModalClient } from "./style";
import { useForm } from "react-hook-form";
import { Input } from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema } from "../../schemas/clientsSchemas";

Modal.setAppElement("#root");

const Clientes = () => {
    const {
        clients,
        addClient,
        setAddClient,
        submitClient,
        submitDeleteUser,
        loading,
    } = useContext(UserContext);
    const [busca, setBusca] = useState("");
    const [modalClient, setModalCliente] = useState(false);
    const [client, setClient] = useState({
        name: "anna",
        email: "anna@anna.com",
        address: "rua das flores 123",
        phone: "42123456789",
        id: 2,
    });
    const [deleteClient, setDeleteClient] = useState(false);

    const lowerBusca = busca.toLowerCase();

    const clientsFiltrados = clients.filter((client) =>
        client.name.toLowerCase().includes(lowerBusca)
    );

    const toggleModal = () => {
        setAddClient(!addClient);
    };
    const toggleModalCliente = () => {
        setModalCliente(!modalClient);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: zodResolver(clientSchema),
    });

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
        },
    };

    return (
        <>
            <div>
                <h1>Clientes</h1>
                <section>
                    <button onClick={() => setAddClient(!addClient)}>
                        <IoIosAddCircleOutline size={30} />
                    </button>
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
                {clientsFiltrados?.map((client) => {
                    return (
                        <li
                            key={client.id}
                            onClick={() => {
                                setClient(client);
                                setModalCliente(true);
                            }}
                        >
                            <span>
                                <h3>Cliente:</h3>
                                <p>{client.name}</p>
                            </span>
                            <span>
                                <h3>Número:</h3>
                                <p>{client.phone}</p>
                            </span>
                            <span>
                                <h3>Email:</h3>
                                <p>{client.email}</p>
                            </span>
                            <span>
                                <h3>Endereço:</h3>
                                <p>{client.address}</p>
                            </span>
                            <button
                                onClick={() => {
                                    console.log(client);
                                }}
                            >
                                <AiOutlineEdit size={25} />
                            </button>
                        </li>
                    );
                })}
            </ul>
            <Modal
                isOpen={addClient}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <StyledModal>
                    <div>
                        <h2>Novo usuário</h2>
                        <button onClick={toggleModal}>X</button>
                    </div>
                    <form onSubmit={handleSubmit(submitClient)}>
                        <section>
                            <Input
                                id={"name"}
                                label={"Nome"}
                                placeholder={"digite aqui o nome"}
                                register={register("name")}
                                type={"text"}
                            />
                            <span>
                                {errors?.name ? errors.name.message : null}
                            </span>
                        </section>
                        <section>
                            <Input
                                id={"email"}
                                label={"Email"}
                                placeholder={"digite aqui o email"}
                                register={register("email")}
                                type={"email"}
                            />
                            <span>
                                {errors?.email ? errors.email.message : null}
                            </span>
                        </section>
                        <section>
                            <Input
                                id={"phone"}
                                label={"Telefone"}
                                placeholder={"digite aqui o telefone"}
                                register={register("phone")}
                                type={"text"}
                            />
                            <span>
                                {errors?.phone ? errors.phone.message : null}
                            </span>
                        </section>
                        <section>
                            <Input
                                id={"address"}
                                label={"Endereço"}
                                placeholder={"digite aqui o endereço"}
                                register={register("address")}
                                type={"text"}
                            />
                            <span>
                                {errors?.address
                                    ? errors.address.message
                                    : null}
                            </span>
                        </section>

                        <button disabled={loading}>Criar</button>
                    </form>
                </StyledModal>
            </Modal>
            <Modal
                isOpen={modalClient}
                onRequestClose={toggleModalCliente}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <StyledModalClient>
                    <section>
                        <h2>Descrição do cliente</h2>
                        <button onClick={toggleModal}>X</button>
                    </section>
                    <div>
                        <h3>{client.name}</h3>
                        <p>Email: {client.email}</p>
                        <p>Telefone: {client.phone}</p>
                        <p>Endereço: {client.address}</p>

                        {deleteClient === false ? (
                            <button onClick={() => setDeleteClient(true)}>
                                Deletar cliente
                            </button>
                        ) : (
                            <button
                                disabled={loading}
                                onClick={() => {
                                    submitDeleteUser(client);
                                    setDeleteClient(false);
                                    setModalCliente(false);
                                }}
                            >
                                Confirmar
                            </button>
                        )}
                    </div>
                </StyledModalClient>
            </Modal>
        </>
    );
};

export { Clientes };
