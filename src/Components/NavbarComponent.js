const NavbarComponent=()=>{
    return(
        <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
            <a className="navbar-brand" href="Dashboard.html">
                Car Rental Management System
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>
        </div>
    </nav>
        </div>
    )
}

export default NavbarComponent;