import { Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
                <div className="container">
                    <header className="main-header">
                        <nav className="main-header-nav">
                            <ul className="header-nav-list">
                                <li><Link className="main-header-nav-link" to='/'>About me</Link></li>
                                <li><Link className="main-header-nav-link" to='/skills'>Skills</Link></li>
                                <li><Link className="main-header-nav-link" to='/portfolio'>Portfolio</Link></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </header>
    )
}

export default Header;