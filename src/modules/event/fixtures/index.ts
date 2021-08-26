import { Event } from '../domain/Event';

export const events: Event[] = [
  new Event({
    id: '1',
    title: 'Ищу людей для игры в настолки',
    description: 'Хочу сыграть в монополию',
  }),
  new Event({
    id: '2',
    title: 'Пойдемте в бар',
    description: 'Пора выпить стаут и поговорить о политике',
  }),
  new Event({
    id: '3',
    title: 'Ищу попутчика',
    description: 'Завтра вылет в Пермь, гостиница за мой счет',
    restrictions: { participantsLimit: 1, minAge: 18 },
  }),
];
