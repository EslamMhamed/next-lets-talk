'use server'

import { currentUser } from "@clerk/nextjs/server"
import { StreamClient } from "@stream-io/node-sdk"

const streamApiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
const streamSecretKey = process.env.STREAM_SECRET_KEY

export async function tokenProvider() {
    const user = await currentUser()

    if(!user) throw new Error('User is not authenticated')
    if(!streamApiKey) throw new Error('stream API Key is missing')
    if(!streamSecretKey) throw new Error('stream Secret Key is missing')

    const cleint = new StreamClient(streamApiKey, streamSecretKey)

    const useId :string = user.id

    const vaildity = 60 * 60
    const token = cleint.generateUserToken({
        user_id:useId,
        validity_in_seconds:vaildity
    })

    return token as string
}