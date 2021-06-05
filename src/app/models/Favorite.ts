import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";

@Entity("favorites")
class Favorite {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	jokeID: number;

	@Column()
	type: string;

	@Column()
	setup: string;

	@Column()
	punchline: string;

	@ManyToOne((type) => User, (user) => user.id)
	userid: User[];

	@CreateDateColumn({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP(6)",
	})
	createdAt: Date;
}

export default Favorite;
