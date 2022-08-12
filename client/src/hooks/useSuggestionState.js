import { useRecoilState } from 'recoil';
import { suggestions } from './atoms/suggestionState';

export const useSuggestionState = () => {
    const [suggestionsData, setSuggestionData] = useRecoilState(suggestions);
    const setSuggestions = (data) => setSuggestionData(data);
    return { suggestionsData, setSuggestions };
};

