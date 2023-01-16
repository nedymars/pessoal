
import express, {Request, Response, NextFunction} from 'express';
import userRoute from './routes/users.route';

const app = express();

// Configuração da Aplicação
app.use(express.json());

// Configuração das Rotas
app.use(userRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso!'});
});

//Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});