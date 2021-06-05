import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
	async authenticate(req: Request, res: Response) {
		try {
			const repository = getRepository(User);

			const { email, password } = req.body;

			const user = await repository.findOne({ where: { email } });

			if (!user) {
				return res.sendStatus(401);
			}

			const isValidPassword = await bcrypt.compare(
				password,
				user.password
			);

			if (!isValidPassword) {
				return res.sendStatus(401);
			}

			const token = jwt.sign({ id: user.id }, process.env.SECRET_JWT, {
				expiresIn: "1d",
			});

			delete user.password;

			res.status(200).json({
				user,
				token,
			});
		} catch (err) {
			throw new Error(err);
		}
	}
}

export default new AuthController();
