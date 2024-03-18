import React from 'react'
import ColumnLibro from '@/interfaces/ILibros'
import { ILibro } from '@/interfaces/ILibros'
import { getAllLibros } from '@/model/dataLibros'
import { TablaLibrosAdmin } from '@/components/admin/libros/TablaLibrosAdmin'

const PageAdminLibros = async () => {
  const libros: ILibro[] = await getAllLibros()

  return (
    <div className="p-4 sm:ml-64">
    <div className="p-4">
      <TablaLibrosAdmin rows={libros} columns={ColumnLibro}/>
    </div>
    </div>
  )
}

export default PageAdminLibros
