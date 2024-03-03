import React from 'react'
import { ILibro } from '@/app/interfaces/ILibros'
import { getLibros } from '@/app/model/dataLibro'
import ColumnLibro from '@/app/interfaces/ILibros'
import CardLibroList from '@/app/components/public/libros/Cards/CardLibroList'
import LibrosList from '@/app/components/public/libros/List/LibrosList'

const PageLibros = async () => {
const libros: ILibro[] = await getLibros()

  return (
    <>
      <h1>Sección de Libros</h1>
      <LibrosList libros={libros}/>
    </>
  )
}

export default PageLibros
