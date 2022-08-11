import { cacheProvider } from "../common/cache.js";
import { AUTH_URL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../common/contants.js";
import { httpClient } from "../common/httpClient.js";
import * as qs from "qs";

export class AuthService {
    async getAccessToken(code) {
        const body = {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code,
            grant_type: 'authorization_code',
            redirect_uri: REDIRECT_URI
        };
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            const response = await httpClient.post(`${AUTH_URL}/oauth/access_token/`, qs.stringify(body), config);
            cacheProvider.set(response.data.user_id, response.data.access_token);
            return response.data.access_token;
        } catch (error) {
            throw error;
        }

    }
}

export const authService = new AuthService();