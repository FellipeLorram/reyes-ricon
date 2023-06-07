import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from './controllers/input'
import Button from '../button/button';

const contactFormSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    phone: z.string().min(10).max(11),
    message: z.string().min(10).max(255),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

export function ContactForm() {
    const { register, formState: { errors } } = useForm<ContactFormSchema>({
        resolver: zodResolver(contactFormSchema),
    });

    return (
        <form className='w-full gap-4 flex flex-col'>
            <Input.Wrapper>
                <Input.Label label='Nome' />
                <Input.Input type='text' error={errors.name?.message} {...register('name')} />
                <Input.Error message={errors.name?.message} />
            </Input.Wrapper>
            <Input.Wrapper>
                <Input.Label label='E-mail' />
                <Input.Input type='email' error={errors.email?.message} {...register('email')} />
                <Input.Error message={errors.email?.message} />
            </Input.Wrapper>
            <Input.Wrapper>
                <Input.Label label='Telefone' />
                <Input.Input type='tel' error={errors.phone?.message} {...register('phone')} />
                <Input.Error message={errors.phone?.message} />
            </Input.Wrapper>
            <Input.Wrapper>
                <Input.Label label='Mensagem' />
                <Input.TextArea error={errors.message?.message} {...register('message')} />
                <Input.Error message={errors.message?.message} />
            </Input.Wrapper>
            <Button className='w-full max-w-full'>
                Enviar
            </Button>
        </form>
    )
}
