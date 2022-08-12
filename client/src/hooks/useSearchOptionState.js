import { atom } from 'recoil';
import { useRecoilState } from 'recoil';

const searchOptionState = atom({
    key: 'search_option_state',
    default: {
        image: '',
        username: '',
        name: ''
    },
});

export const useSearchOptionState = () => {
    const [searchOption, setSearchOptionState] = useRecoilState(searchOptionState);
    const setSearchOption = (data) => setSearchOptionState(data);
    return { searchOption, setSearchOption };
};