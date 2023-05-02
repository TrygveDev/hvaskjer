import { scryptSync, randomBytes } from 'crypto';
import { userData } from './schemas.js';


export async function createUser(username, password) {

    return new promise(async (resolve, reject) => {
        // Check if username already exists
        const checkUsername = await userData.find({ username: data.username })
        if (checkUsername) return reject('Username already exists')

        // Create salt
        const salt = randomBytes(16).toString('hex');

        // Hash password with salt
        const hashedPassword = scryptSync(password, salt, 64).toString('hex');

        // Store user
        const entry = new userData({
            username: username,
            password: `${salt}:${hashedPassword}`,
            auth: 'user',
        });
        const result = await entry.save();

        return resolve(result)
    })


}
