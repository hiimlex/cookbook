import { Request, response, Response } from "express";
import { getRepository } from "typeorm";

import User from "../models/User";
import Favorite from "../models/Favorite";

class FavoriteController {
	async store(req: Request, res: Response) {
		try {
			const repository = getRepository(Favorite);
			const userRepository = getRepository(User);

			const userid = req.params.id;

			if (!userid) {
				res.sendStatus(404);
			}

			const verify = await userRepository.findOne(userid);

			if (!verify) {
				return res.sendStatus(403);
			}

			const joke = req.body;

			if (!joke) {
				return res.sendStatus(402);
			}

			const favorite = await repository.create({ ...joke, userid });

			await repository.save(favorite);

			return res.status(200).json({ favorite });
		} catch (err) {
			throw new Error(err);
		}
	}

	async index(req: Request, res: Response) {
		try {
			const repository = getRepository(Favorite);
			const userRepository = getRepository(User);

			const userid = req.params.id;

			if (!userid) {
				res.sendStatus(404);
			}

			const verify = await userRepository.findOne(userid);

			if (!verify) {
				return res.sendStatus(403);
			}

			const allFavorites = await repository.find({ where: { userid } });

			if (!allFavorites) {
				return res.sendStatus(404);
			}

			return res.status(200).json({ favorites: allFavorites });
		} catch (err) {
			throw new Error(err);
		}
	}

	async delete(req: Request, res: Response) {
		try {
			const repository = getRepository(Favorite);
			const userRepository = getRepository(User);

			const userid = req.params.id;
			const jokeID = req.query;

			if (!userid || !jokeID) {
				res.sendStatus(404);
			}

			const verify = await userRepository.findOne(userid);
			const verifyJoke = await repository.findOne(jokeID);

			if (!verify) {
				return res.sendStatus(403);
			}

			if (!verifyJoke) {
				res.sendStatus(402);
			}

			await repository.delete(jokeID);

			return res.sendStatus(200);
		} catch (err) {
			throw new Error(err);
		}
	}
}

export default new FavoriteController();
