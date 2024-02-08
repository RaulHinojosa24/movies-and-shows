import { redirect } from 'react-router-dom'
import Login from '../components/Login'
import { getRequestToken } from '../utils/http'

export default function LoginPage () {
  return (
    <Login />
  )
}

export async function action ({ request, params }) {
  console.log({ request, params })
  const res = await getRequestToken()
  const requestToken = await res.json()
  console.log(requestToken)

  // return redirect('https://www.themoviedb.org/authenticate/' + requestToken + '?redirect_to=http://www.yourapp.com/approved')

  return null
}
