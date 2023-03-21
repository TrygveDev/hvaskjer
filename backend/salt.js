import { scryptSync, randomBytes } from 'crypto';

function signup(username, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { username, password: `${salt}:${hashedPassword}` }

    return user;
}

function login(username, password) {
    return new Promise((resolve, reject) => {
        const user = {} // get user from database
        const [salt, key] = user.password.split(':');
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

export default { signup, login }