import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { TrashIcon, ClipboardIcon } from './Icons'
import { useState } from 'react'
import UpdateUsers from './UpdateUsers'
import Modal from './Modal'
import { User } from '../utils/localStorageUtils'

export default function UsersTable() {
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState<number>(0)
  const users = useSelector((state: RootState) => state.users.users)

  const handleDelete = (id: number) => {
    setShowDeleteModal(true)
    setSelectedUserId(id)
  }
  const handleUpdate = (id: number) => {
    setShowUpdateModal(true)
    setSelectedUserId(id)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td className="buttons-td">
                <div>
                  <button
                    className="clipboard"
                    onClick={() => handleUpdate(user.id)}
                  >
                    <ClipboardIcon />
                  </button>
                  <button
                    className="trash"
                    onClick={() => handleDelete(user.id)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showUpdateModal && (
        <UpdateUsers id={selectedUserId} setShowModal={setShowUpdateModal} />
      )}

      {showDeleteModal && (
        <Modal id={selectedUserId} setShowModal={setShowDeleteModal} />
      )}
    </div>
  )
}
