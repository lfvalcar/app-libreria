import React from 'react'
import { ILibro } from '@/app/interfaces/ILibros'
import { getLibros } from '@/app/model/dataLibro'
import ColumnLibro from '@/app/interfaces/ILibros'
import CardLibroList from '@/app/components/public/libros/Cards/CardLibroList'

const PageLibros = async () => {
const libros: ILibro[] = await getLibros()

  return (
    <>
      <h1>Sección de Libros</h1>
      <CardLibroList libros={libros}/>
    </>
  )
}

export default PageLibros
