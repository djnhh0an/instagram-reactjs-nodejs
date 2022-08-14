import { instagramService } from "../services/instagram.service.js";

class ApiController {
    healthCheck = (req, res) => {
        return res.status(200).send('OK');
    }

    getProfile = async (req, res, next) => {
        try {
            const response = instagramService.getProfile();
            res.status(200).send(JSON.stringify(response));
        } catch (error) {
            next(error)
        }
    }

    getFeeds = async (req, res) => {
        try {
            const response = instagramService.getFeeds();
            res.status(200).send(JSON.stringify(response));
        } catch (error) {
            next(error)
        }
    }

    getStories = async (req, res) => {
        try {
            const response = instagramService.getStories();
            res.status(200).send(JSON.stringify(response));
        } catch (error) {
            next(error)
        }
    }

    getSuggestions = async (req, res) => {
        try {
            const response = instagramService.getSuggestions();
            res.status(200).send(JSON.stringify(response));
        } catch (error) {
            next(error)
        }
    }
};
export default ApiController = new ApiController();