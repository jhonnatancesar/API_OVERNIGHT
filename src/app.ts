import Express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/user.routes';

const app = Express();
app.use(Express.json());

const port = process.env.PORT || 3000;
const mongoURL = process.env.DATABASE_URL || 'mongodb://localhost:27017/userdb';

// Rota simples
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/users', userRoute);

// Espera conexão com o MongoDB antes de iniciar
async function startServer() {
  try {
    await mongoose.connect(mongoURL);
    console.log('✅ Banco de dados conectado com sucesso!');

    app.listen(port, () => {
      console.log(`🚀 Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error);
    process.exit(1);
  }
}

startServer();
