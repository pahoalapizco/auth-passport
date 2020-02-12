const MongoLib = require('../lib/db');

class ApiKeysService {
  constructor () {
    this._collection = 'api-keys'
    this._mongoDB = new MongoLib();
  }

  async getApiKey({ token }) {
    const [apiKey] = await this._mongoDB.getAll(this._collection, { token });
    return apiKey;
  }
}

module.exports = ApiKeysService;