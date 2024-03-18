import React from 'react'
import { ILibro } from '@/interfaces/ILibros'
import { getAllLibros } from '@/model/dataLibros'
import CardLibroList from '@/components/public/libros/CardLibroList'

const PageLibros = async () => {
const libros: ILibro[] = await getAllLibros()
  return (
    <>
    <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">LIBROS</h1>
        <CardLibroList libros={libros}/>
        </>
  )
}

export default PageLibros
