export class Service {
    getProfile = async () => {
        return await fetch('/api/profile').then((response) => response.json());
    }

    getFeeds = async () => {
        return await fetch('/api/feeds').then((response) => response.json());
    }

    getStories = async () => {
        return await fetch('/api/stories').then((response) => response.json());
    }

    getSuggestions = async () => {
        return await fetch('/api/suggestions').then((response) => response.json());
    }
}

export default Service = new Service();