import nodemailer from 'nodemailer';

const email = process.env.NODE_EMAIL;
const password = process.env.NODE_EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
