
import { getLibrosByAutor, getLibrosByEditorial } from '@/model/dataLibros';
import React from 'react'
import CardLibroList from '@/components/public/libros/CardLibroList';

const PageAutor = async ({params: {id}}: {params: {id:string}}) => {
    
  const libros = await getLibrosByAutor(id);

  return (
    <>
      <CardLibroList libros={libros}/>
    </>
  )
}

export default PageAutor