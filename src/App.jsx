import './App.css'
import Login from './components/Login'
import GlobalProvider from './context/Global'

function App() {

  return (
    <>
      <GlobalProvider>
        <Login/>
      </GlobalProvider>
      
    </>
  )
}

export default App
