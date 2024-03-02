import React from 'react'
import { ILibros } from '@/app/interfaces/ILibros'
import { getLibros } from '@/app/model/dataLibro'
import ColumnLibro from '@/app/interfaces/ILibros'
import { Tabla } from '@/app/components/commons/Tabla/Tabla'

const PageLibros = async () => {
const libros: ILibros[] = await getLibros()

  return (
    <>
      <h1>Sección de libros</h1>
      <Tabla rows={libros} columns={ColumnLibro} />
    </>
  )
}

export default PageLibros
