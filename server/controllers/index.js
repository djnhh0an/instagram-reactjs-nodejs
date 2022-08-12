import { data } from "../static/data.js";
import { instagramService } from "../services/instagram.service.js";

class ApiController {
    healthCheck = (req, res) => {
        return res.status(200).send('OK');
    }

    getProfile = async (req, res, next) => {
        try {
            const response = await instagramService.getProfile();
            res.status(200).send(JSON.stringify(response));
        } catch (error) {
            next(error)
        }
    }

    getFeeds = async (req, res) => {
        const response = await instagramService.getFeeds();
        res.status(200).send(JSON.stringify(response));
    }

    getStories = async (req, res) => {
        const response = await instagramService.getStories();
        res.status(200).send(JSON.stringify(response));
    }
};
export default ApiController = new ApiController();