const MongoLib = require('../lib/db');
const bcrypt = require('bcrypt');

class UserService {
  constructor() {
    this._collection = 'users';
    this._mongoLib = new MongoLib();
  }

  async getUser(email) {
    const [user] = await this._mongoLib.getAll(this._collection, { email });
    return user;
  }

  async createUser(user) {
    const { name, email, password } = user;

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUserId = await this._mongoLib.create(this._collection, {
      name,
      email,
      password: hashedPassword
    });
    return createdUserId;
  }  
}

module.exports = UserService;
