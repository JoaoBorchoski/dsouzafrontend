import z from "zod";

export const clientSchema = z.object({
    name: z.string().nonempty("Nome obrigatório"),
    email: z.string("Insira um email valido").nonempty("Email obrigatório"),
    phone: z.string().nonempty("Telefone obrigatório"),
    address: z.string().nonempty("Endereço obrigatório"),
});
