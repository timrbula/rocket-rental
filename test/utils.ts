import { authenticator } from '~/services/auth.server'
import { commitSession, getSession } from '~/services/session.server'

export const BASE_URL = 'https://rocketrental.space'

export async function getUserCookie(
	user: { id: string },
	existingCookie?: string,
) {
	const session = await getSession(existingCookie)
	session.set(authenticator.sessionKey, user.id)
	const cookie = await commitSession(session)
	return cookie
}