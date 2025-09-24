export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://bagheecha-backend.onrender.com'), // Replace later
  app: {
    keys: env.array('APP_KEYS'),
  },
});
