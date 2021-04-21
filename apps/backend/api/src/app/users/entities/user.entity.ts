import { IUsers } from "@int-srv/shared/data-access/interfaces";

export class UserEntity implements IUsers {
  id: number;
  username: string;
  created: string;
  updated: string;
  email: string;
  password: string;

}
