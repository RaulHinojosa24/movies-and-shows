import { json, redirect, useLoaderData } from 'react-router-dom'
import Login from '../components/Login'
import { createSessionID, getRequestToken } from '../utils/http'

export default function LoginPage () {
  const { success, session_id: sessionID } = useLoaderData() || {}

  if (success) {
    localStorage.removeItem('request_token_data')
    localStorage.setItem('sessionID', sessionID)
  }

  return (
    <Login />
  )
}

export async function action ({ request }) {
  let { expiresAt, requestToken } = JSON.parse(localStorage.getItem('request_token_data') || '{}')

  const expireDate = new Date(expiresAt || null)
  const remainingTime = expireDate.getTime() - new Date().getTime()

  if (!requestToken || remainingTime <= 10000) {
    const res = await getRequestToken()
    const { success, expires_at: newExpiresAt, request_token: newRequestToken } = await res.json()

    if (!res.ok || !success) {
      throw json({ message: 'Couldn\'t create the request token.' }, { status: 505 })
    }

    localStorage.setItem('request_token_data', JSON.stringify({ expiresAt: newExpiresAt, requestToken: newRequestToken }))
    expiresAt = newExpiresAt
    requestToken = newRequestToken
  }

  const { origin } = new URL(request.url)

  return redirect('https://www.themoviedb.org/authenticate/' + requestToken + '?redirect_to=' + origin + '/login')
}

export async function loader ({ request }) {
  if (localStorage.getItem('sessionID')) return redirect('/')

  const { searchParams } = new URL(request.url)
  const approved = searchParams.get('approved')
  const denied = searchParams.get('denied')
  const requestToken = searchParams.get('request_token')

  if (!approved && !denied) return null

  if (denied) {
    localStorage.removeItem('request_token_data')
    return redirect('/login')
  }

  const res = await createSessionID(requestToken)

  if (!res.ok) {
    throw json({ message: 'Something went wrong while creating your session. Try again later.' }, { status: 505 })
  }

  return res
}
