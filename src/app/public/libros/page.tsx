import React from 'react'
import { ILibro } from '@/app/interfaces/ILibros'
import { getLibros } from '@/app/model/dataLibro'
import LibrosList from '@/app/components/public/libros/List/LibrosList'

const PageLibros = async () => {
const libros: ILibro[] = await getLibros()
  return (
        <LibrosList libros={libros}/>
  )
}

export default PageLibros
