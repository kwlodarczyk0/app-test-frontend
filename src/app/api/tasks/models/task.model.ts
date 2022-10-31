import { UserModel } from '../../user/models/user.model';

export interface TaskModel {
  id: number;
  code: string;
  creationDate: string;
  description: string;
  priority: string;
  status: string;
  user?: UserModel;
}
