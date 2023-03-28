import { scryptSync, timingSafeEqual } from 'crypto';
import { userData } from "./schemas.js";

export function authUser(username, password) {
    return new Promise(async (resolve, reject) => {

        // Check if user exists
        const user = await userData.find({ username: username })
        if (!user) return reject(new Error('User not found'))

        // Compare password
        const [salt, key] = user[0].password.split(':');
        const hashedBuffer = scryptSync(password, salt, 64)
        const keyBuffer = Buffer.from(key, 'hex')
        const match = timingSafeEqual(hashedBuffer, keyBuffer)

        // Return result
        if (match) return resolve('Login successful')
        return reject(new Error('Login failed'))
    })

}