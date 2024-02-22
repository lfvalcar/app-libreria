import React from 'react'
import { ILibros } from '@/app/interfaces/ILibros'
import { getLibros } from '@/app/model/dataLibro'

const PageLibros = async () => {
const libros: ILibros[] = await getLibros()

  return (
    <>
      <h2>Sección de libros</h2>
      <ul>
        {
          libros.map ((libro: ILibros) => (
            <li key={libro.isbn}>
              { libro.title }
            </li>
          ))
        }
      </ul>

    
    </>
  )
}

export default PageLibros
