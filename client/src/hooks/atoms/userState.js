import { atom } from 'recoil';

export const loginUser = atom({
  key: 'login_user',
  default: {
    username: '',
    name: '',
    image: '',
  },
});
