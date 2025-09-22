console.log(Buffer.from("Testing@#$12345", "utf8").toString("base64"));
console.log(
  "Decoded Password:",
  Buffer.from("VGVzdGluZ0AjJDEyMzQ1", "base64").toString("utf8")
);
