import { atom } from 'recoil';

export const modalState = atom({
  key: 'modal_state',
  default: {
    showModal: false,
    data: {},
  },
});
