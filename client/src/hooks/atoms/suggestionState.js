import { atom } from 'recoil';
import { localStorageEffect } from '../localStorageEffect';

export const suggestions = atom({
    key: 'suggestions_state',
    default: [
        {
            username: 'vietnam',
            image: 'https://picsum.photos/600/600'
        }
    ],
    effects: [localStorageEffect('suggestions_state')]
});
