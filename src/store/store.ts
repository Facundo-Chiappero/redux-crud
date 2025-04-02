import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  loadUsersFromLocalStorage,
  saveUsersLocalStorage,
} from '../utils/localStorageUtils'
import { User, UserState, UpdateUser } from '../types/types'

const initialState: UserState = {
  users: loadUsersFromLocalStorage() ?? [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
  ],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
      saveUsersLocalStorage(state.users)
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
      saveUsersLocalStorage(state.users)
    },
    updateUser: (state, action: PayloadAction<UpdateUser>) => {
      const { id, ...updates } = action.payload
      const userIndex = state.users.findIndex((user) => user.id === id)

      if (userIndex === -1) return

      state.users[userIndex] = {
        ...state.users[userIndex],
        ...updates,
      }

      saveUsersLocalStorage(state.users)
    },
  },
})

export const { addUser, deleteUser, updateUser } = usersSlice.actions

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
