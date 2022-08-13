import { atom } from 'recoil';
import { useRecoilState } from 'recoil';
import { localStorageEffect } from './localStorageEffect';

const searchOptionState = atom({
    key: 'search_option_state',
    default: {
        image: '',
        username: '',
        name: ''
    },
    effects: [localStorageEffect('search_option_state')]
});

export const useSearchOptionState = () => {
    const [searchOption, setSearchOptionState] = useRecoilState(searchOptionState);
    const setSearchOption = (data) => setSearchOptionState(data);
    return { searchOption, setSearchOption };
};