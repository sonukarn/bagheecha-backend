const { Strapi } = require("@strapi/strapi");

async function start() {
  const app = await Strapi().load();
  app.start();
}

start();
