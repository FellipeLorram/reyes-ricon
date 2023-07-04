import { contactFormSchema } from '@/lib/schemas/contactFormSchema';
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, email, message } = contactFormSchema.parse(req.body);
    // const transporter = nodemailer.createTransport({
    //   service: 'Gmail',
    //   auth: {
    //     user: 'fellipelorram@gmail.com',
    //     pass: process.env.GMAIL_PASSWORD,
    //   },
    // });

    // const mailOptions = {
    //   from: 'fellipelorram@gmail.com',
    //   to: 'fellipelorram@gmail.com',
    //   subject: 'Contato pelo site',
    //   text: `Nome: ${name} \n Email: ${email} \n Mensagem: ${message}`,
    // };

    // await transporter.sendMail(mailOptions);
  } catch (e: any) {
    return res.status(400).json({ errors: e.message || 'Unexpected error.' });
  }

  res.status(200);
}
