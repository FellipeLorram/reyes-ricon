import { contactFormSchema } from '@/lib/schemas/contactFormSchema';
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, email, message } = contactFormSchema.parse(JSON.parse(req.body));
    const transporter = nodemailer.createTransport({
      host: 'email-ssl.com.br',
      port: 465,
      secure: true,
      auth: {
        user: 'contato@wasidl.com.br',
        pass: 'rG2074@3lb'
      }
    });

    const mailOptions = {
      from: 'contato@wasidl.com.br',
      to: 'contato@wasidl.com.br',
      subject: 'Contato pelo site',
      text: `Nome: ${name} \n Email: ${email} \n Mensagem: ${message}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (e: any) {
    return res.status(400).json({ errors: e.message || 'Unexpected error.' });
  }
  return res.status(200).json({});
}
