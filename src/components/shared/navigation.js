import React from 'react';

const MenuItem = ({ label, active, disabled }) => {
    return (
        <li className={`nav-item ${active ? 'active' : ''}`}>
            <a className={`nav-link ${disabled ? 'disabled' : ''}`} href="#">{label}</a>
        </li>
    );
}
const Navigation = ({ links }) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Carousel</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    {
                        links.map((link, i) => (
                            <MenuItem key={i} {...link} />
                        ))
                    }
                </ul>
                <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
};

export default Navigation;