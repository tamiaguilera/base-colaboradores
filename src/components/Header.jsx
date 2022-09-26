import React from 'react'

export const Header = ({buscar}) => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand white" href="#">Buscador de Colaboradores</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={buscar}/>
                </form>
                </div>
            </div>
        </nav>
    </header>
  )
}
