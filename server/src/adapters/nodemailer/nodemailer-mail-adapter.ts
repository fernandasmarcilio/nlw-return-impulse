import nodemailer from 'nodemailer';

import { MailAdapter, MailAdapterData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ea1dea8caee7de",
    pass: "9d391968b83ef8"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: MailAdapterData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Fernanda Marcilio <fernandas.marcilio@gmail.com>',
      subject,
      html: body,
    })
  }
}