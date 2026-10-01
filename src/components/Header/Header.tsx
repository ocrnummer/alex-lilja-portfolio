import { Link, NavLink } from "react-router-dom"
import { NAME, NAV_BASE_URL, NAV_WORKS_URL } from "../../utils/SharedConsts"
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav" aria-label="Main">
                <Link className="header-name" to={NAV_BASE_URL}>{NAME}</Link>
                <NavLink className="header-tab" to={NAV_WORKS_URL}>works</NavLink>
            </nav>
        </header>
    )
}

export default Header
