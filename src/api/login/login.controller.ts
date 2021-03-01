import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { AdminAuthRepository } from "../../repository/admin-auth/admin-auth.repository"

export class LoginController {
  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const adminlogin = {
        user_email: "test@malinator.com",
        password: "test@1234",
      }
      let repositry = new AdminAuthRepository()
      const token = await jwt.sign({ adminlogin }, "chaipecharcha");
      let login = await repositry.createAdminAuth(adminlogin, token)
      res.status(200).json({ data: login, message: "LOGIN_SUCCESSFUL" });
    } catch (error) {
      next (error)
    }
  }
}