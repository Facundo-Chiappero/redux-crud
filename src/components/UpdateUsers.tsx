import { useDispatch } from 'react-redux'
import { updateUser } from '../store/store'

interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  id: number
}

export default function UpdateUsers({ setShowModal, id }: ModalProps) {
  const dispatch = useDispatch()

  const handleCancel = () => {
    setShowModal(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('newName') as string
    const username = formData.get('newUsername') as string
    const email = formData.get('newEmail') as string

    const updatedUser = {
      id,
      name,
      username,
      email,
    }

    dispatch(updateUser(updatedUser))

    setShowModal(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="modal-container">
      <form className="grid-form modal" onSubmit={handleSubmit}>
        <label className="grid-form-child1" htmlFor="newName">
          Name
        </label>
        <input
          required
          autoFocus={true}
          className="grid-form-child2"
          type="text"
          name="newName"
          id="newName"
          placeholder="John Doe"
          autoComplete="name"
        />
        <label className="grid-form-child3" htmlFor="newUsername">
          Username
        </label>
        <input
          required
          className="grid-form-child4"
          type="text"
          name="newUsername"
          id="newUsername"
          placeholder="john_doe"
          autoComplete="username"
        />
        <label className="grid-form-child5" htmlFor="newEmail">
          Email
        </label>
        <input
          required
          className="grid-form-child6"
          type="email"
          name="newEmail"
          id="newEmail"
          placeholder="John@gmail.com"
          autoComplete="email"
        />

        <button type="submit">Submit</button>
        <button onClick={handleCancel} type="button">
          Cancel
        </button>
      </form>
    </div>
  )
}
