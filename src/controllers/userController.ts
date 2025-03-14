import { Request, Response } from 'express';
import User from '../client';

class UserController {
  // Criar usuário
  static createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await User.create(req.body);
      res.status(201).json({
        status: true,
        message: 'Usuário criado com sucesso!',
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: 'Erro no servidor!',
      });
    }
  }

  // Listar todos
  static getUsers = async (_req: Request, res: Response): Promise<void> => {
    const users = await User.find();
    res.json({
      status: true,
      message: 'Usuários encontrados com sucesso!',
      data: users,
    });
  }

  // Buscar um só
  static getUser = async (req: Request, res: Response): Promise<void> => {
    const { userid } = req.params;
    const user = await User.findById(userid);
    res.json({
      status: true,
      message: 'Usuário encontrado com sucesso!',
      data: user,
    });
  }

  // Deletar usuário
  static deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { userid } = req.params;
    try {
      const user = await User.findById(userid);
      if (!user) {
        res.status(404).json({ status: false, message: 'Usuário não encontrado!' });
        return;
      }
      await User.findByIdAndDelete(userid);
      res.json({ status: true, message: 'Usuário deletado com sucesso!' });
    } catch {
      res.status(500).json({ status: false, message: 'Erro no servidor!' });
    }
  }

  // Atualizar usuário
  static updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userid } = req.params;
      const user = await User.findByIdAndUpdate(userid, req.body, { new: true });
      if (!user) {
        res.status(404).json({ status: false, message: 'Usuário não encontrado!' });
        return;
      }
      res.json({
        status: true,
        message: 'Dados atualizados com sucesso!',
        data: user,
      });
    } catch {
      res.status(500).json({ status: false, message: 'Erro no servidor!' });
    }
  }
}

export default UserController;
