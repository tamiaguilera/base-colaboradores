import React from 'react'

export const Add = ({submit}) => {
  return (
    <form onSubmit={submit}>
        <div className='row mb-3 mt-4'>
            <div className="col">
                <label for="inputNombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="inputNombre" placeholder="Ingresar Nombre" />
            </div>
        </div>
        <div className='row mb-3'>
            <div className="col">
                <label for="inputEmail" className="form-label">Correo</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Ingresar Email" />
            </div>
        </div>
            <div className='row'>
                <div className="col">
                <button type="submit" className="btn btn-danger mb-3">Agregar Colaborador</button>
            </div>
        </div>
    </form>
  )
}
