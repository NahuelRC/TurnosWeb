import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <a className="navbar-brand" href="#home" >Turnos Web</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className='nav-item d-flex align-items-center'>
                                <a className='nav-link' href="/">Dashboard</a>
                            </li>
                            <li className='nav-item d-flex align-items-center'>
                                <a className='nav-link' href="/clases">Clases</a>
                            </li>
                            <li className='nav-item d-flex align-items-center'>
                                <a className='nav-link' href="/alumnos">Alumnos</a>
                            </li>
                            <li className='nav-item d-flex align-items-center'>
                                <a className='nav-link' href="/profesores">Profesores</a>
                            </li>
                            <li className='nav-item d-flex align-items-center'>
                                <a className='nav-link' href="/pagos">Pagos</a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link d-flex align-items-center" href="/usuario">
                                    <div className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center" style={{ width: "35px", height: "35px" }}>
                                        <i className="bi bi-person-fill"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;