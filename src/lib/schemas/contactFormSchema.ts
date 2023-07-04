import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(3, { message: 'Minimo de 3 Letras' }).max(255, { message: 'Maximo de 255 Letras' }),
    email: z.string().email({ message: 'Email Invalido'}),
    message: z.string().min(3, {message: 'Minimo de 3 Letras'}).max(255),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
