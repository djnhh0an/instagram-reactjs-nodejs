import { atom } from 'recoil';

export const suggestions = atom({
    key: 'suggestions_state',
    default: [
        {
            username: 'vietnam',
            image: 'https://picsum.photos/600/600'
        }
    ]
});
