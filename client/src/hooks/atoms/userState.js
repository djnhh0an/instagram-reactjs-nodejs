import { atom } from 'recoil';
import { localStorageEffect } from '../localStorageEffect';

export const loginUser = atom({
  key: 'login_user',
  default: {
    username: '',
    name: '',
    image: '',
  },
  effects: [localStorageEffect('login_user')]
});
