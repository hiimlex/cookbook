import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("favorites")
class Favorite {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	joke_id: number;

	@Column()
	ask: string;

	@Column()
	answer: string;
}

export default Favorite;
