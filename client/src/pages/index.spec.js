import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/index';
import * as  useUserState from '../hooks/useUserState';
import * as  useSuggestionState from '../hooks/useSuggestionState';

describe('Test Home page', () => {
    const mockedData = {
        username: 'hoantran',
        name: 'Hoan Tran',
        image: 'https://picsum.photos/id/301/600/600',
    };

    jest.spyOn(useUserState, 'useUserState').mockImplementation(() => ({
        useClientRect: () => [mockedData, jest.fn()]
    }));

    jest.spyOn(useSuggestionState, 'useSuggestionState').mockImplementation(() => ({
        useClientRect: () => [[mockedData], jest.fn()]
    }));

    it('should take a home snapshot', () => {
        const home = renderer.create(<Home />).toJSON();
        expect(home).toMatchSnapshot();
    });
});
