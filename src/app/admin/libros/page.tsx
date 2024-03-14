import React from 'react'
import ColumnLibro from '@/app/interfaces/ILibros'
import { Tabla } from '@/app/components/commons/Tabla'
import { ILibro } from '@/app/interfaces/ILibros'
import { getLibros } from '@/app/model/dataLibro'
import { TablaAdmin } from '@/app/components/admin/TablaAdmin/TablaAdmin'

const PageAdminLibros = async () => {
  const libros: ILibro[] = await getLibros()

  return (
    <div className="p-4 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <TablaAdmin rows={libros} columns={ColumnLibro} key='isbn' />
    </div>
    </div>
  )
}

export default PageAdminLibros
