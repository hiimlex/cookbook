import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../models/User";

import bcrypt from "bcryptjs";

class UserController {
	async store(req: Request, res: Response) {
		const repository = getRepository(User);

		const { email, password } = req.body;

		const userExists = await repository.findOne({ where: { email } });

		if (userExists) {
			return res.sendStatus(409);
		}

		const user = repository.create({ email, password });
		await repository.save(user);

		return res.json(user);
	}

	async list(req: Request, res: Response) {
		const repository = getRepository(User);

		const allUsers = await repository.find();

		if (!allUsers) {
			return res.json({});
		}

		return res.json({ users: allUsers });
	}

	async index(req: Request, res: Response) {
		const repository = getRepository(User);

		const id = req.params.id;

		const user = await repository.findOne(id);

		if (!user) {
			return res.sendStatus(404);
		}

		return res.json({ user: user });
	}

	async delete(req: Request, res: Response) {
		const repository = getRepository(User);

		const id = req.params.id;

		const user = await repository.findOne(id);

		if (!user) {
			return res.sendStatus(404);
		}

		await repository.delete(user);

		return res.sendStatus(200);
	}

	async change(req: Request, res: Response) {
		const repository = getRepository(User);

		const id = req.params.id;

		const user = await repository.findOne(id);

		const { password } = req.body;

		if (!user) {
			return res.sendStatus(404);
		}

		if (bcrypt.compareSync(password, user.password)) {
			return res.sendStatus(409);
		}

		repository.merge(user, { password: password });

		const results = await repository.save(user);

		return res.json(results);
	}
}

export default new UserController();
