import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </header>
  )
}
export default Header
