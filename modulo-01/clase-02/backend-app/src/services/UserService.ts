// services/UserService.ts
import { User } from '../models/User';

class UserService {
  static async getAllUsers(): Promise<User[]> {
    return []
  }

  static async getUserById(userId: string): Promise<User | null> {
    return null
  }

  static async createUser(userData: User): Promise<User |null> {
    return null
  }

  static async updateUser(userId: string, updatedUserData: User): Promise<User | null> {
    return null
  }

  static async deleteUser(userId: string): Promise<void> {
  }
}

export default UserService;
