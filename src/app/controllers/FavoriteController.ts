import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../models/User";
import Favorite from "../models/Favorite";

import https from "https";
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

			const favorite = await repository.create({ ...joke, userid });

			await repository.save(favorite);

			return res.json({ favorite });
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

			return res.json({ favorites: allFavorites });
		} catch (err) {
			throw new Error(err);
		}
	}

	async opa(req: Request, res: Response) {
		try {
			return res.send({ oi: "oi" });
		} catch (err) {
			return res.send();
		}
	}
}

export default new FavoriteController();
