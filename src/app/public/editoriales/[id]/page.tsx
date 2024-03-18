
import { getLibrosByEditorial } from '@/model/dataLibros';
import React from 'react'
import CardLibroList from '@/components/public/libros/CardLibroList';

const PageCategoria = async ({params: {id}}: {params: {id:string}}) => {
    
  const libros = await getLibrosByEditorial(id);

  return (
    <>
      <CardLibroList libros={libros}/>
    </>
  )
}

export default PageCategoria