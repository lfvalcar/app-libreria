import DetalleLibro from '@/components/public/libros/DetalleLibro'
import { getLibroByISBN } from '@/model/dataLibros';
import React from 'react'

const PageDetalle = async ({params: {isbn}}: {params: {isbn:string}}) => {

  const libro = await getLibroByISBN(isbn);

  return (
    <>
        <DetalleLibro libro={libro}/>
    </>
  )
}

export default PageDetalle
