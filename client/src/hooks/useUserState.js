import { useRecoilState } from 'recoil';
import { loginUser } from './atoms/userState';

export const useUserState = () => {
  const [loginUserData, setLoginUserData] = useRecoilState(loginUser);

  const { data } = loginUserData;
  const setLoginUser = (newData) => setLoginUserData({ data: newData });

  return { data, setLoginUser };
};

