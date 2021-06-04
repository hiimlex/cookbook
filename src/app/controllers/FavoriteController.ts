import { Request, Response } from "express";
import { getRepository } from "typeorm";

class FavoriteController {
	async store(req: Request, res: Response) {
		const repository = getRepository(FavoriteController);

		const { user_id } = req.params;
	}
}

export default new FavoriteController();
