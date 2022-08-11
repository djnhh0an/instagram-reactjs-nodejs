import { authService } from "../services/auth.service.js";
import { instagramService } from "../services/instagram.service.js";

class InstagramController {
    auth = async (req, res, next) => {
        try {
            if (req.query && req.query.code) {
                const code = req.query.code.replace('#_', '');
                const token = await authService.getAccessToken(code);
                res.status(200).send(token);
            }
            throw Error('Token code is empty');
        } catch (error) {
            next(error)
        }
    }

    getUserProfile = async (req, res, next) => {
        try {
            const userId = req.query.userId;
            const response = await instagramService.getUserProfile(userId);
            res.status(200).send(JSON.stringify(response));
        } catch (error) {
            next(error)
        }
    }

    getUserMedia = async (req, res, next) => {
        try {
            const userId = req.query.userId;
            const response = await instagramService.getUserMedia(userId);
            res.status(200).send(JSON.stringify(response));
        } catch (error) {
            next(error)
        }
    }

    searchByTag = async (req, res, next) => {
        try {
            const userId = req.query.userId;
            const tag = req.query.tag;
            const response = await instagramService.searchByTag(userId, tag);
            res.status(200).send(JSON.stringify(response));
        } catch (error) {
            next(error)
        }
    }
}

export default InstagramController = new InstagramController();