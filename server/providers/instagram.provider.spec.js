import { httpClient } from '../common/httpClient.js';
import { cacheProvider } from '../common/cache.js'
import { instagramProvider } from './instagram.provider';
import { profile } from '../static/data/profile';
import { profileMock } from '../mock-data/profile.mock.js';

describe('Test instagram service', () => {
    beforeEach(() => {
        jest.resetModules();
        process.env = {};
    });

    afterEach(() => {
        jest.resetModules();
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    describe('Get profile service', () => {
        const userId = 1;
        jest.spyOn(cacheProvider, 'get').mockResolvedValue('valid_token');
        jest.spyOn(httpClient, 'get').mockResolvedValue({
            data: {
                ...profileMock
            }
        });

        it('Should return the user profile', async () => {
            const response = await instagramProvider.getUserProfile(userId);
            expect(response).toEqual(profile);
        });
    });
});