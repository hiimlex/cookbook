import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity("favorites")
class Favorite {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	jokeID: number;

	@Column()
	ask: string;

	@Column()
	answer: string;

	@ManyToOne((type) => User, (user) => user.id)
	userid: User[];
}

export default Favorite;
