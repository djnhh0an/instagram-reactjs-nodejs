import { instagramProvider } from "../providers/instagram.provider.js";
import { feeds, profile, stories, suggestions } from "../static/data/index.js";

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
    getProfile = () => profile;

    getFeeds = () => feeds;

    getStories = () => stories;

    getSuggestions = () => suggestions;
}

export const instagramService = new InstagramService();