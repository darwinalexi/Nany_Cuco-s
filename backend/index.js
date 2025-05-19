import express from "express";

const server = express();

const port = process.env.PORT || 3333;

server.get('/', (req, res) => {
  res.status(200).send('Server is healthy');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
