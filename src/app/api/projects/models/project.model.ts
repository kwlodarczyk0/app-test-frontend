import { TaskModel } from '../../tasks/models/task.model';
import { UserModel } from '../../user/models/user.model';

export interface ProjectModel {
  id: number;
  name: string;
  productManager: string;
  users: UserModel[];
  tasks: TaskModel[];
}
