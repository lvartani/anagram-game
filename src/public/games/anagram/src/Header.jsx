function Header() {

    return (
        <header>
        <div className="row">
            <h1 id="p2l-logo">
                <i className="fa-solid fa-frog"></i>
                <a href="../index.html" id="banner" title="Play2Learn Home Page">Play2Learn</a>
            </h1>
        </div>
        <div className="row">
            <ul className="nav nav-justified navbar-dark">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="../index.html">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-haspopup="true">Games</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="math-facts.html" target="_blank">Math Facts
                                Practice</a></li>
                        <li>
                            <hr className="dropdown-divider"></hr>
                        </li>
                        <li><a className="dropdown-item" href="anagram-hunt.html" target="_blank">Anagram
                                Hunt</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../about.html">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../login.html">Login</a>
                </li>
            </ul>
        </div>
    </header>

    )
}



export default Header;