
export default {
  async send(ctx) {
    const { name, email, phone, message } = ctx.request.body;

    try {
      await strapi.plugin('email').service('email').send({
        to: 'contact@bagheecha.com', // receiving email
        from: process.env.SMTP_FROM,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      ctx.send({ success: true, message: 'Email sent successfully!' });
    } catch (err) {
      ctx.send({ success: false, message: 'Failed to send email', error: err });
    }
  },
};
