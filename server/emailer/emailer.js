const nodemailer = require('nodemailer');
const path = require('path');
const Queue = require('bull');
const asyncWrapper = require('../async');
const hbs = require('nodemailer-express-handlebars');

const sendEmail = asyncWrapper((req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'semkamirov@mail.ru',
            pass: '2wcqwrECLUk47AJBzqQZ'
        }
    });

    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve('./emailer/emails/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./emailer/emails/'),
    };

    transporter.use('compile', hbs(handlebarOptions))

    const mailOptions = {
        from: 'semkamirov@mail.ru',
        to: 'semkamirov@mail.ru',
        subject: 'Проверночное письмо',
        template: 'notification',
        context: {
            title: 'Это заголовок'
        }
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            res.status(500).json({ message: error })
            return;
        };

        res.status(200).json({ message: "Success" })
    });
})


module.exports = { sendEmail };
