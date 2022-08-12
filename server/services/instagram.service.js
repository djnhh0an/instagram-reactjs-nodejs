import { instagramProvider } from "../providers/instagram.provider.js";
import { data } from "../static/data.js";

export class InstagramService {
    getUserProfile = async (userId) => {
        return await instagramProvider.getUserProfile(userId);
    }

    getUserMedia = async (userId) => {
        return await instagramProvider.getUserMedia(userId);
    }

    searchByTag = async (userId, tag) => {
        return await instagramProvider.searchByTag(userId, tag);
    }

    /*
    The service to get the mocked data
     */
    getProfile = async () => {
        return data.loginUser;
    }

    getFeeds = async () => {
        return data.feed;
    }

    getStories = async () => {
        return data.stories;
    }
}

export const instagramService = new InstagramService();