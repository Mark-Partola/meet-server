import { IUser } from '../domain/types';

export const users: IUser[] = [
  {
    id: '1',
    nickname: 'Peter',
    email: 'peter@example.com',
    profile: {
      firstName: 'Петр',
      lastName: 'Петров',
      age: 17,
    },
  },
  {
    id: '2',
    nickname: 'Ivan',
    email: 'ivan@example.com',
    profile: {
      firstName: 'Иван',
      lastName: 'Иванов',
      age: 18,
    },
  },
  {
    id: '3',
    nickname: 'michael',
    email: 'michael@example.com',
    profile: {
      firstName: 'Михаил',
      lastName: 'Михайлов',
      age: 40,
    },
  },
];
