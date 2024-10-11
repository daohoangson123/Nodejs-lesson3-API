import { connectToDatabase } from '../../../lesson3 API/src/configDatabase.js';

const db = await connectToDatabase();

class UserRepository {
    constructor() {
        this.db = db;
    }

    async getUser() {
        const [result] = await this.db.query('SELECT * FROM users');
    }

    async postUser() {
        const [result] = await this.db.query(
            'INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `age`, `phone`, `isActive`) VALUE(?, ?, ?, ?, ?, ?, ?)',
            [
                request.id,
                request.firstName,
                request.lastName,
                request.email,
                request.age,
                request.phone,
                true,
            ]
        );
    }
}

export default new UserRepository();
