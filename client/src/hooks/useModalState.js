import { useRecoilState } from 'recoil';
import { modalState as state } from './atoms/modalState';

export const useModalState = () => {
  const [modalState, setModalState] = useRecoilState(state);

  const { showModal, data } = modalState;
  const modalData = data;
  const setModal = (status, newData) =>
    setModalState({ showModal: status, data: newData });

  return { showModal, modalData, setModal };
};
