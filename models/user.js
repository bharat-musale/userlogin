const db = require('../utils/db');

class User {
  static async createUser(username, password) {
    // Create a new user in the database
  }

  static async findUserByUsername(username) {
    // Find a user by username in the database
  }

  static async comparePasswords(plainPassword, hashedPassword) {
    // Compare plain password with hashed password
  }
}

module.exports = User;
