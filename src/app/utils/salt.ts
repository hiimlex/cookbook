import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(8);

export default salt;
