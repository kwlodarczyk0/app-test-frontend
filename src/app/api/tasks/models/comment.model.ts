import { UserModel } from '../../user/models/user.model';

export interface CommentModel {
  id: number;
  text: string;
  user: UserModel;
  date: string;
}
