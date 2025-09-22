// export default ({env}) => ({

//     upload: {
//     config: {
//       provider: "@strapi/provider-upload-cloudinary",
//       providerOptions: {
//         cloud_name: env("CLOUDINARY_NAME"),
//         api_key: env("CLOUDINARY_KEY"),
//         api_secret: env("CLOUDINARY_SECRET"),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//     },
//   },
//   email: {

//     config: {
//       provider: "nodemailer",
//       providerOptions: {
//         host: env("SMTP_HOST", "webmail.bagheecha.com"),
//         port: env.int("SMTP_PORT", 465),

//         secure: true, // true for 465
//         auth: {
//           user: env("SMTP_USER"),
//           pass: env("SMTP_PASS"),
//           // pass: "Welcome@#$12345",

//         },
//       },
//       settings: {
//         defaultFrom: env("SMTP_FROM"),
//         defaultReplyTo: env("SMTP_REPLY_TO"),
//       },
//     },
//   },

// });
export default ({ env }) => {
  return {
    upload: {
      config: {
        provider: "@strapi/provider-upload-cloudinary",
        providerOptions: {
          cloud_name: env("CLOUDINARY_NAME"),
          api_key: env("CLOUDINARY_KEY"),
          api_secret: env("CLOUDINARY_SECRET"),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    email: {
      config: {
        provider: "nodemailer",
        providerOptions: {
          host: env("SMTP_HOST", "webmail.bagheecha.com"),
          port: env.int("SMTP_PORT", 465),
          secure: true,
          auth: {
            user: env("SMTP_USER"),
            // pass: env("SMTP_PASS"),
            pass: Buffer.from(env("SMTP_PASS_B64"), "base64").toString("utf8"),
          },
        },
        settings: {
          defaultFrom: env("SMTP_FROM"),
          defaultReplyTo: env("SMTP_REPLY_TO"),
        },
      },
    },
  };
};

// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: "@strapi/provider-upload-cloudinary",
//       providerOptions: {
//         cloud_name: env("CLOUDINARY_NAME"),
//         api_key: env("CLOUDINARY_KEY"),
//         api_secret: env("CLOUDINARY_SECRET"),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//     },
//   },
//   email: {
//     config: {
//       provider: "nodemailer",
//       providerOptions: {
//         host: env("SMTP_HOST", "webmail.bagheecha.com"),
//         port: env.int("SMTP_PORT", 465),
//         secure: true,
//         auth: {
//           user: env("SMTP_USER"),
//           pass: env("SMTP_PASS"),
//         },
//       },
//       settings: {
//         defaultFrom: env("SMTP_FROM"),
//         defaultReplyTo: env("SMTP_REPLY_TO"),
//       },
//     },
//   },
// });
