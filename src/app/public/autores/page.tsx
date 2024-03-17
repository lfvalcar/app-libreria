import React from 'react'
import ColumnCategoria from '@/interfaces/ICategorias'
import { IAutor } from '@/interfaces/IAutores'
import { getAllAutores } from '@/model/dataAutores'
import CardAutorList from '@/components/public/autores/CardAutorList'

const PageAutores = async () => {
const autores: IAutor[] = await getAllAutores()

  return (
    <>
      <CardAutorList autores={autores}/>
    </>
  )
}

export default PageAutores
