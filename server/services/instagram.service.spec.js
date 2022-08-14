import { instagramService } from './instagram.service.js';
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
        it('Should return the user profile', async () => {
            const response = await instagramService.getProfile();
            expect(response).toEqual(profileMock);
        });
    });
});