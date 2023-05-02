import { scryptSync, timingSafeEqual } from 'crypto';
import { userData } from "./schemas.js";

export function authUser(username, password) {
    return new Promise(async (resolve, reject) => {

        // Check if user exists
        const user = await userData.find({ username: username })
        console.log(user.length)
        if (user.length === 0) return reject('Username or password is incorrect!')

        // Compare password
        const [salt, key] = user[0].password.split(':');
        const hashedBuffer = scryptSync(password, salt, 64)
        const keyBuffer = Buffer.from(key, 'hex')
        const match = timingSafeEqual(hashedBuffer, keyBuffer)

        // Return result
        if (match) return resolve('Login successful')
        return reject('Username or password is incorrect!')
    })

}