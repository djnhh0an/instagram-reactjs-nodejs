import { cacheProvider } from '../common/cache.js';
import { httpClient } from '../common/httpClient.js'
import { GRAPH_URL } from '../common/contants.js';
export class InstagramProvider {
    getUserProfile = async (userId) => {
        const accessToken = cacheProvider.get(userId);
        if (!accessToken) {
            throw new Error("Access token is not valid.");
        }
        const url = `${GRAPH_URL}/${userId}?fields=id,username,media_count,account_type&access_token=${accessToken}`;
        const res = await httpClient.get(url);
        return res.data;
    }

    getUserMedia = async (userId) => {
        const accessToken = cacheProvider.get(userId);
        if (!accessToken) {
            throw new Error("Access token is not valid.");
        }

        const url = `${GRAPH_URL}/${userId}/media?fields=id,caption,media_type,media_url,tag&access_token=${accessToken}`
        const res = await httpClient.get(url);
        return res.data;
    }

    searchByTag = async (userId, tag) => {
        const accessToken = cacheProvider.get(userId);
        if (!accessToken) {
            throw new Error("Access token is not valid.");
        }

        return null;
    }
}

export const instagramProvider = new InstagramProvider();