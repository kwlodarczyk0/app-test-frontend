export interface RoleModel {
  id: number;
  name: string;
}

export interface UserModel {
  id: number;
  name: string;
  password: string;
  roles: RoleModel[];
  username: string;
}
