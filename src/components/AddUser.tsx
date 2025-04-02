import { useDispatch } from 'react-redux'
import { addUser } from '../store/store'

export default function AddUser() {
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name') as string
    const username = formData.get('username') as string
    const email = formData.get('email') as string

    const newUser = {
      id: Date.now(),
      name,
      username,
      email,
    }

    dispatch(addUser(newUser))
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div>
      <form className="grid-form" onSubmit={handleSubmit}>
        <label className="grid-form-child1" htmlFor="name">
          Name
        </label>
        <input
          required
          className="grid-form-child2"
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          autoComplete="name"
        />
        <label className="grid-form-child3" htmlFor="username">
          Username
        </label>
        <input
          required
          className="grid-form-child4"
          type="text"
          name="username"
          id="username"
          placeholder="john_doe"
          autoComplete="username"
        />
        <label className="grid-form-child5" htmlFor="email">
          Email
        </label>
        <input
          required
          className="grid-form-child6"
          type="email"
          name="email"
          id="email"
          placeholder="John@gmail.com"
          autoComplete="email"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
