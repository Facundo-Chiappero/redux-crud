export interface User {
  id: number
  name: string
  username: string
  email: string
}

export const loadUsersFromLocalStorage = (): User[] | null => {
  const users = localStorage.getItem('users')
  return users ? JSON.parse(users) : null
}

export const saveUsersLocalStorage = (users: User[]) => {
  localStorage.setItem('users', JSON.stringify(users))
}
