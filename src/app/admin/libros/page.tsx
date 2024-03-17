import React from 'react'
import ColumnLibro from '@/interfaces/ILibros'
import { ILibro } from '@/interfaces/ILibros'
import { getAllLibros } from '@/model/dataLibros'
import { TablaAdmin } from '@/components/admin/TablaAdmin/TablaAdmin'

const PageAdminLibros = async () => {
  const libros: ILibro[] = await getAllLibros()

  return (
    <div className="p-4 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <TablaAdmin rows={libros} columns={ColumnLibro} key='isbn' />
    </div>
    </div>
  )
}

export default PageAdminLibros
