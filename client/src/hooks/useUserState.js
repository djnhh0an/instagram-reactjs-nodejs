import { useRecoilState } from 'recoil';
import { loginUser } from './atoms/userState';

export const useUserState = () => {
  const [loginUserData, setLoginUserData] = useRecoilState(loginUser);
  const setLoginUser = (data) => setLoginUserData(data);

  return { loginUserData, setLoginUser };
};

