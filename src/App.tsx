import AddUser from './components/AddUser'
import UsersTable from './components/UsersTable'
import ThemeChanger from 'simple-theme-changer'

function App() {
  return (
    <>
      <div className="container">
        <div className="themeChanger">
          <ThemeChanger defaultTheme="dark" />
        </div>
        <UsersTable />
        <AddUser />
      </div>
    </>
  )
}

export default App
