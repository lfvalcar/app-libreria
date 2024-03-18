import React from 'react'
import { ColumnEditorial } from '@/interfaces/IEditoriales'
import { getAllEditoriales } from '@/model/dataEditoriales'
import { IEditorial } from '@/interfaces/IEditoriales'
import { TablaAdminEditoriales } from '@/components/admin/editoriales/TablaAdminEditoriales'

const PageAdminAutores = async () => {
  const editoriales: IEditorial[] = await getAllEditoriales()

  return (
    <div className="p-4 sm:ml-64">
    <div className="p-4">
      <TablaAdminEditoriales rows={editoriales} columns={ColumnEditorial} key='isbn' />
    </div>
    </div>
  )
}

export default PageAdminAutores
