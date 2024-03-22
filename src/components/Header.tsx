export function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark p-4" data-bs-theme="dark" style={{borderBottom: '1px solid #3C3C3C'}}>
                <div className="container">
                    <a className="navbar-brand" href="#">Lifters Shop</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <a className="nav-link active" aria-current="page" href="#">Shop</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link" href="#">Stories</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <form className="me-auto" role="search">
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">
                                    <i className="bi bi-search"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                            </div>
                        </form>
                        <div>
                            <span className="navbar-text me-5">Carrinho</span>
                            <button type="button" className="btn btn-outline-light">Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}