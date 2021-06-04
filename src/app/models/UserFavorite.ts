import { Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import Favorite from "./Favorite";
import User from "./User";

@Entity()
class UserFavorite {
	@OneToOne((type) => User, { primary: true })
	@JoinColumn({ name: "id" })
	user_id: User;

	@ManyToOne((type) => Favorite, (favorite) => favorite.joke_id)
	joke_id: Favorite[];
}

export default UserFavorite;
