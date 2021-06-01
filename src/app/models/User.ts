import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	BeforeInsert,
	BeforeUpdate,
} from "typeorm";
import bcrypt from "bcryptjs";
import salt from "../utils/salt";

@Entity("users")
class User {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		this.password = bcrypt.hashSync(this.password, salt);
	}
}

export default User;
