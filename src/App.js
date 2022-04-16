import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from "./components/Header"
import Landing from "./pages/Landing"
import Recipe from "./pages/Recipe"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  )
}

export default App
