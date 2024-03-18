import React from 'react'
import { ColumnAutor } from '@/interfaces/IAutores'
import { getAllAutores } from '@/model/dataAutores'
import { IAutor } from '@/interfaces/IAutores'
import { TablaAdminAutores } from '@/components/admin/autores/TablaAdminAutores'

const PageAdminAutores = async () => {
  const autores: IAutor[] = await getAllAutores()

  return (
    <div className="p-4 sm:ml-64">
    <div className="p-4">
      <TablaAdminAutores rows={autores} columns={ColumnAutor} key='isbn' />
    </div>
    </div>
  )
}

export default PageAdminAutores
