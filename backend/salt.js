import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';
import { userData } from './index.js';

function signup(username, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { username, password: `${salt}:${hashedPassword}` }

    return user;
}

function login(username, password) {
    return new Promise(async (resolve, reject) => {
        const user = await userData.find({ username: username })
        if (!user) return reject(new Error('User not found'))

        const [salt, key] = user[0].password.split(':');
        const hashedBuffer = scryptSync(password, salt, 64)

        const keyBuffer = Buffer.from(key, 'hex')
        const match = timingSafeEqual(hashedBuffer, keyBuffer)

        if (match) {
            return resolve('Login successful')
        }
        else {
            return reject('Login failed')
        }
    })

}

export { signup, login }