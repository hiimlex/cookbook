import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import bcrypt from "bcryptjs";
import salt from "../utils/salt";
import Favorite from "./Favorite";

@Entity("users")
class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	name: string;

	@Column()
	phone: string;

	@Column()
	CEP: string;

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		this.password = bcrypt.hashSync(this.password, salt);
	}

	@OneToMany(() => Favorite, (favorite) => favorite.userid)
	favorites: Favorite[];
}

export default User;
