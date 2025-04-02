import { useDispatch } from 'react-redux'
import { deleteUser } from '../store/store'

interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  id: number
}

export default function Modal({ setShowModal, id }: ModalProps) {
  const dispatch = useDispatch()

  const handleCancel = () => {
    setShowModal(false)
  }

  const handleSubmit = () => {
    dispatch(deleteUser(id))
    setShowModal(false)
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <h3>Are you sure you want to delete that user?</h3>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '1rem',
          }}
        >
          <button onClick={handleSubmit}>Delete</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
