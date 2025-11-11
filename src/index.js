import express from 'express'
import cors from 'cors'
import { persons } from './persons.js';

const app = express();
const porta = 3333;

app.use(cors())

const data = {
  message: "Voce está conectado no backend!"
}

app.get('/', (request, response) => {
 response.json(persons)
});

app.listen(porta, () => {
 console.log(`Servidor rodando na porta ${porta}`)
});