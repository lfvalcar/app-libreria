
import { getLibrosByCategoria } from '@/model/dataLibros';
import React from 'react'
import CardLibroList from '@/components/public/libros/CardLibroList';

const PageCategoria = async ({params: {cod}}: {params: {cod:string}}) => {
    
  const libros = await getLibrosByCategoria(cod);

  return (
    <>
      <CardLibroList libros={libros}/>
    </>
  )
}

export default PageCategoria