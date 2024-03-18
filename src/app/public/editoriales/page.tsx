import React from 'react'
import CardEditorialList from '@/components/public/editoriales/CardEditorialList';
import { getAllEditoriales } from '@/model/dataEditoriales';
import { IEditorial } from '@/interfaces/IEditoriales';

const PageEditorial = async () => {
    
  const editoriales: IEditorial[] = await getAllEditoriales();

  return (
    <>
      <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">EDITORIALES</h1>
      <CardEditorialList editoriales={editoriales}/>
    </>
  )
}

export default PageEditorial