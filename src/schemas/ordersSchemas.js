import z from "zod";

export const orderSchema = z.object({
    name: z.string().nonempty("Nome obrigatório"),
    description: z
        .string("Insira um email valido")
        .nonempty("Email obrigatório"),
    price: z.string().nonempty("Telefone obrigatório"),
    delivery_date: z.string().nonempty("Endereço obrigatório"),
    payment_deadline: z.string().nonempty("Endereço obrigatório"),
    client: z.string().nonempty("Endereço obrigatório").optional(),
});

export const orderUpdateSchema = orderSchema.omit({ client: true });
