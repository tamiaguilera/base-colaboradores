import React from 'react'

export const List = ({listado = []}) => {
  return (
    <ul className="list-group">
        <h2>Listado de Colaboradores</h2>
        {listado.map( objeto => <li class="list-group-item">{objeto.nombre} - {objeto.correo}</li> )}
     </ul>
  )
}
