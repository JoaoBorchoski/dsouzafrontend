import z from "zod";

export const loginSchema = z.object({
    name: z.string().nonempty("Nome obrigatório"),
    password: z.string("Insira uma senha valida").nonempty("Senha obrigatória"),
});
export const registerSchema = z
    .object({
        email: z.string().email("Deve ser um e-mail válido"),
        name: z.string().nonempty("Nome obrigatório"),
        password: z.string().nonempty("Senha é obrigatória"),
        confirmPassword: z.string().nonempty("Senha é obrigatória"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Senhas não correspondem",
        path: ["confirmPassword"],
    });
