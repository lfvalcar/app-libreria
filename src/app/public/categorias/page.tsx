import React from 'react'
import ColumnCategoria, { ICategoria } from '@/interfaces/ICategorias'
import { getAllCategorias } from '@/model/dataCategorias'
import CardCategoriaList from '@/components/public/categorias/CardCategoriaList'

const PageCategorias = async () => {
  const categorias: ICategoria[] = await getAllCategorias()

  return (
    <>
    <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">CATEGORIAS</h1>
      <CardCategoriaList categorias={categorias}/>
    </>
  )
}

export default PageCategorias
