import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from './controllers/input'
import Button from '../button/button';
import { ContactFormSchema, contactFormSchema } from '@/lib/schemas/contactFormSchema';


interface Props {
    onSubmit: (data: ContactFormSchema) => void;
    className?: string;
}

export function ContactForm({ onSubmit, ...props }: Props) {
    const { register, formState: { errors }, handleSubmit } = useForm<ContactFormSchema>({
        resolver: zodResolver(contactFormSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            {...props}
            className={`gap-4 flex flex-col ${props.className}`}
        >
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
                <Input.Label label='Mensagem' />
                <Input.TextArea error={errors.message?.message} {...register('message')} />
                <Input.Error message={errors.message?.message} />
            </Input.Wrapper>
            <Button className='w-full md:max-w-full'>
                Enviar
            </Button>
        </form>
    )
}
