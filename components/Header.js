
export default function Header() {
    return (
        <header>
            <div className="px-3 py-2 text-bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <a href="#" className="nav-link text-secondary">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/" className="nav-link text-white">
                                    Register
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    Orders
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    Customers
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
