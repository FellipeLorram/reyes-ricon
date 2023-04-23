import React from 'react'
import { Input } from './controllers/input'
import { TextArea } from './controllers/textArea'

export function ContactForm() {
    return (
        <form className='w-full flex flex-col'>
            <Input label='Nome' />
            <Input label='E-mail' />
            <Input label='Telefone' />
            <TextArea label='Mensagem' />
        </form>
    )
}
