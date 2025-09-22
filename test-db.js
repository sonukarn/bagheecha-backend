// test-db.js
const mysql = require("mysql2/promise");

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "bagheecha_bagheecha",
      password: Buffer.from("VGVzdGluZ0AjJDEyMzQ1", "base64").toString("utf-8"),

      database: "bagheecha_bagheecha",
    });

    console.log("✅ Connected to MySQL successfully!");
    const [rows] = await connection.execute("SELECT NOW() as time");
    console.log("⏰ Current DB Time:", rows[0].time);

    await connection.end();
  } catch (err) {
    console.error("❌ Failed to connect to MySQL:", err.message);
  }
})();
