import { useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { StyledContainerLogin } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/userSchemas";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

import "react-toastify/dist/ReactToastify.css";
import { PulseLoader } from "react-spinners";

export const LoginPage = () => {
    const { login, loading } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: zodResolver(loginSchema),
    });

    return (
        <>
            <StyledContainerLogin>
                <form action="submit" onSubmit={handleSubmit(login)}>
                    <h1>Login</h1>

                    <section>
                        <Input
                            id={"email"}
                            label={"Usuário"}
                            placeholder={"Digite aqui seu nome de usuário"}
                            register={register("name")}
                            type={"text"}
                        />
                        <span>{errors?.name ? errors.name.message : null}</span>
                    </section>
                    <section>
                        <Input
                            id={"password"}
                            label={"Senha"}
                            placeholder={"Digite aqui sua senha"}
                            register={register("password")}
                            type={"password"}
                        />
                        <span>
                            {errors?.password ? errors.password.message : null}
                        </span>
                    </section>
                    {loading === false ? (
                        <button>Entrar</button>
                    ) : (
                        <button>
                            <PulseLoader
                                color="#36d7b7"
                                size={10}
                                speedMultiplier={0.7}
                            />
                        </button>
                    )}
                </form>
            </StyledContainerLogin>
        </>
    );
};
