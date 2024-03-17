import CardLibroList from '@/components/public/libros/CardLibroList'
import { ILibro } from '@/interfaces/ILibros'
import { getNewsLibros } from '@/model/dataLibros'
import React from 'react'

const PublicPage = async () => {
  const libros: ILibro[] = await getNewsLibros()
  return (
    <>
      <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">NEWS!</h1>
      <CardLibroList libros={libros}/>
    </>
  )
}

export default PublicPage