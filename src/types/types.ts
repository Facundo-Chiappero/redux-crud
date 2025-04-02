export interface User {
  id: number
  name: string
  username: string
  email: string
}

export interface UserState {
  users: User[]
}

export type UpdateUser = Partial<Omit<User, 'id'>> & { id: number }
