import express from 'express'
import cors from 'cors'
import { persons } from './persons.js';

const app = express();
const porta = 3333;

app.use(cors())
app.use(express.json())

const data = {
  message: "Voce está conectado no backend!"
}

app.get('/', (request, response) => {
 response.json(persons)
});

app.post("/cadastrar", (request, response) => {
  const { name, email, age, nickname } = request.body.user;

  console.log(name, email, age, nickname);

  response.status(201).json({ message: "Usuário cadastrado com sucesso!" });
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
});