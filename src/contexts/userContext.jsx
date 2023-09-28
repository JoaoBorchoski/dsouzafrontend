import { createContext, useEffect, useState } from "react";
import { api } from "../services/axios";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [page, setPage] = useState(false);
    const [orders, setOrders] = useState(null);
    const [clients, setClients] = useState(null);
    const [addClient, setAddClient] = useState(false);
    const [addOrder, setAddOrder] = useState(false);
    const [finishedPage, setFinishedPage] = useState(false);
    const [observer, setObserver] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function infos() {
            const token = localStorage.getItem("@TOKEN");
            const myId = localStorage.getItem("@ID");

            if (!token && !myId) {
                return;
            }

            try {
                const myToken = JSON.parse(token);
                api.defaults.headers.common.authorization = `Bearer ${myToken}`;
                const response = await api.get(`/users/${myId}`);
                setUser(response.data);
                navigate("/home");
            } catch (error) {
                console.log(error);
                localStorage.clear();
            }

            const clientsResponse = await api.get("/clients");

            const orderedArrayClients = await clientsResponse.data.sort(
                function (a, b) {
                    if (a.name < b.name) {
                        return -1;
                    } else {
                        return true;
                    }
                }
            );

            setClients(orderedArrayClients);
            const ordersResponse = await api.get("/orders");

            const orderedArrayOrder = await ordersResponse.data?.sort(
                (a, b) =>
                    new Date(a.delivery_date).getTime() -
                    new Date(b.delivery_date).getTime()
            );

            const formatArrayOrder = await orderedArrayOrder
                ?.map((order) => {
                    order.delivery_date = order.delivery_date
                        ?.split("-")
                        .reverse()
                        .join("/");
                    return order;
                })
                .map((order) => {
                    order.payment_deadline = order.payment_deadline
                        ?.split("-")
                        .reverse()
                        .join("/");
                    return order;
                })
                .map((order) => {
                    order.order_date = order.order_date
                        ?.split("-")
                        .reverse()
                        .join("/");
                    return order;
                });

            setOrders(formatArrayOrder);
        }

        infos();
    }, [navigate, observer]);

    function searchClient(value) {
        const search = clients.filter((client) =>
            client.name.toLowerCase().includes(value.trim().toLowerCase())
        );
        if (value === "") {
            setObserver(observer + 1);
        }

        return setClients(search);
    }

    const login = async (data) => {
        try {
            setLoading(true);
            const response = await api.post("/login", data);
            localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
            localStorage.setItem("@ID", JSON.stringify(response.data.user.id));
            localStorage.setItem(
                "@INFOS",
                JSON.stringify({
                    name: response.data.user.name,
                    email: response.data.user.email,
                })
            );
            setUser(response.data.user);
            navigate("/home");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@ID");
        localStorage.removeItem("@INFOS");
        setUser(null);
        navigate("/");
    };

    const submitClient = async (data) => {
        try {
            const response = await api.post("/clients", data);
            console.log(response.data);
            setObserver(observer + 1);
            setAddClient(false);
        } catch (error) {
            console.log(error);
        }
    };

    const submitOrder = async (data) => {
        try {
            const response = await api.post("/orders", data);
            console.log(response.data);
            setObserver(observer + 1);
            setAddOrder(false);
        } catch (error) {
            console.log(error);
        }
    };

    const submitDeleteOrder = async (data) => {
        try {
            await api.delete(`/orders/${data.id}`);
            setObserver(observer + 1);
        } catch (error) {
            console.log(error);
        }
    };

    const sumbitUpdateOrder = async (data) => {
        try {
            const response = await api.patch(`/orders/${data.id}`, {
                is_finished: true,
            });
            console.log(response.data);
            setObserver(observer + 1);
        } catch (error) {
            console.log(error);
        }
    };

    const submitDeleteUser = async (data) => {
        try {
            await api.delete(`/clients/${data.id}`);
            setObserver(observer + 1);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <UserContext.Provider
            value={{
                login,
                page,
                setPage,
                logout,
                orders,
                clients,
                observer,
                setObserver,
                searchClient,
                user,
                addClient,
                setAddClient,
                submitClient,
                addOrder,
                setAddOrder,
                submitOrder,
                navigate,
                finishedPage,
                setFinishedPage,
                submitDeleteOrder,
                sumbitUpdateOrder,
                submitDeleteUser,
                loading,
                setLoading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
