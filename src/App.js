import {useGlobalContext} from "./reducer/context"

// Components
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"

function App() {
  const {loading} = useGlobalContext()
  if (loading) {
    return (
      <div className="loading">
        <h1>LoadinG...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar/>
      <CartContainer/>
    </main>
  )
}

export default App;
