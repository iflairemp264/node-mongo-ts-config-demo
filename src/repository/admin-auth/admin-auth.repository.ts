import { AdminToken } from '../../models/admin.token.model';

export class AdminAuthRepository {
  async createAdminAuth(userDetails: { user_email: any; password?: string; }, token: any) {
    try {
      let adminTokenDetails = new AdminToken({
        token: token,
        userEmail: userDetails.user_email
      });
      let insertToken = await adminTokenDetails.save();
      let result = insertToken.id ? true : false;
      if (result === true) {
        return insertToken
      } else if (result === false) {
        return false;
      }
    } catch (err) {
      throw err;
    }
  }
}