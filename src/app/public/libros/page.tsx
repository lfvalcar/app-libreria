import React from 'react'
import { ILibro } from '@/interfaces/ILibros'
import { getAllLibros } from '@/model/dataLibros'
import CardLibroList from '@/components/public/libros/CardLibroList'

const PageLibros = async () => {
const libros: ILibro[] = await getAllLibros()
  return (
        <CardLibroList libros={libros}/>
  )
}

export default PageLibros
