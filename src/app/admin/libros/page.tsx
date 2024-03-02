import React from 'react'
import ColumnLibro from '@/app/interfaces/ILibros'
import { Tabla } from '@/app/components/commons/Tablas/Tabla'
import { ILibro } from '@/app/interfaces/ILibros'
import { getLibros } from '@/app/model/dataLibro'

const PageAdminLibros = async () => {
    const libros: ILibro[] = await getLibros()

  return (
    <>
      <h1>Administracion de Libros</h1>
      <Tabla rows={libros} columns={ColumnLibro} key='isbn' />
    </>
  )
}

export default PageAdminLibros
