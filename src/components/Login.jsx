import { Form } from 'react-router-dom'
import Card from './UI/Card'

export default function Login () {
  return (
    <Card className='flex flex-col items-center gap-8 mx-auto mt-4 p-12 max-w-5xl'>
      <h2 className='text-4xl'>Login</h2>
      <p className='text-center'>You can authenticate using your TMDB account to increase the experience. This will let you do things like rate movies, maintain your favourite and watch lists as well as do things like create and edit custom lists. All while staying in sync with your account on TMDB.</p>
      <Form method='post'>
        <button type='submit'>Log in on TMDB</button>
      </Form>
    </Card>
  )
}
