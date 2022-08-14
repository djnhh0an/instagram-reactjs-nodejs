import app from '../index.js';
import superTest from 'supertest';
import { profileMock } from '../mock-data/profile.mock.js';
describe('Test instagram mock controller', () => {
  beforeEach(() => {
    jest.resetModules();
    process.env = {};
    jest.mock('../common/metaUrl.js', () => ({
      metaUrl: () => 'http://localhost:3001'
    }));
  });

  afterEach((done) => {
    jest.resetModules();
    jest.restoreAllMocks();
    jest.clearAllMocks();
    done();
  });

  describe('Health check api', () => {
    it('Should success', done => {
      superTest(app).get('/api/healthCheck').expect(200, done);
    });
  });

  describe('Get profile api', () => {
    it('Should return the user profile', async () => {
      const response = await superTest(app).get('/api/profile');
      expect(response.status).toEqual(200);
      expect(JSON.parse(response.text)).toEqual(profileMock);
    });
  });
});