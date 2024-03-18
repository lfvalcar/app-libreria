import React from 'react'
import { getAllCategorias } from '@/model/dataCategorias'
import ColumnCategoria, { ICategoria } from '@/interfaces/ICategorias'
import { TablaAdminCategorias } from '@/components/admin/categorias/TablaAdminCategorias'

const PageAdminCategorias = async () => {
  const categorias: ICategoria[] = await getAllCategorias()

  return (
    <div className="p-4 sm:ml-64">
    <div className="p-4">
      <TablaAdminCategorias rows={categorias} columns={ColumnCategoria} key='isbn' />
    </div>
    </div>
  )
}

export default PageAdminCategorias
