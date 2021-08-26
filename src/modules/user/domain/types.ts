export interface IUser {
  id: string;
  nickname: string;
  email: string;
  profile: IUserProfile;
}

export type IUserId = string;

export interface IUserProfile {
  firstName: string;
  lastName: string;
  age: number;
}
