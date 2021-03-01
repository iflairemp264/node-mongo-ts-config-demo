import { model, Model } from 'mongoose';
import { AdminTokenModel } from '../repository/model/admin-token.model';
import { AdminTokenSchema } from '../repository/schema/admin-token.schema';

const AdminToken: Model<AdminTokenModel> = model<AdminTokenModel>('AdminToken', AdminTokenSchema);

export { AdminToken }