// controllers/UserController.ts
import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getUserById(req: Request, res: Response) {
    const userId = req.params.id;

    try {
      const user = await UserService.getUserById(userId);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async createUser(req: Request, res: Response) {
    const userData = req.body;

    try {
      const newUser = await UserService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateUser(req: Request, res: Response) {
    const userId = req.params.id;
    const updatedUserData = req.body;

    try {
      const updatedUser = await UserService.updateUser(userId, updatedUserData);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    const userId = req.params.id;

    try {
      await UserService.deleteUser(userId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default UserController;
