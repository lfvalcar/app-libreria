import React from 'react'
import ColumnCategoria, { ICategoria } from '@/interfaces/ICategorias'
import { getAllCategorias } from '@/model/dataCategorias'
import CardCategoriaList from '@/components/public/categorias/CardCategoriaList'

const PageCategorias = async () => {
  const categorias: ICategoria[] = await getAllCategorias()

  return (
    <>
      <CardCategoriaList categorias={categorias}/>
    </>
  )
}

export default PageCategorias
