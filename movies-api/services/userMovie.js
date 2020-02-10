const MongoLib = require('../lib/db');

class UserMovieService {
  constructor() {
    this._collection = 'user-movies'
    this._mongoLib = new MongoLib();
  }

  async getUserMovies(userId) {
    const query = userId && { userId };
    const userMovies = await this._mongoLib.getAll(this._collection, query);
    
    return userMovies || [];
  }

  async createUserMovies (userMovie) {
    const createdUserMovieId = await this._mongoLib.create(this._collection, userMovie);
    
    return createdUserMovieId;    
  }

  async deleteUserMovie (userMovieId) {
    const deletedUserMovieId = await this._mongoLib.delete(this._collection, { userMovieId });
    
    return deletedUserMovieId;
  }
}

module.exports = UserMovieService;
