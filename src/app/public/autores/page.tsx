import React from 'react'
import ColumnCategoria from '@/interfaces/ICategorias'
import { IAutor } from '@/interfaces/IAutores'
import { getAllAutores } from '@/model/dataAutores'
import CardAutorList from '@/components/public/autores/CardAutorList'

const PageAutores = async () => {
const autores: IAutor[] = await getAllAutores()

  return (
    <>
    <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AUTORES</h1>
      <CardAutorList autores={autores}/>
    </>
  )
}

export default PageAutores
