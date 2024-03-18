import React from 'react'
import { IUser, ColumnUsuario } from '@/interfaces/IUser'
import { getAllUsuarios } from '@/model/dataUsuarios'
import { TablaAdminUsuarios } from '@/components/admin/usuarios/TablaAdminUsuarios'

const PageAdminUsuarios = async () => {
  const usuarios: IUser[] = await getAllUsuarios()

  return (
    <div className="p-4 sm:ml-64">
    <div className="p-4">
      <TablaAdminUsuarios rows={usuarios} columns={ColumnUsuario} key='id' />
    </div>
    </div>
  )
}

export default PageAdminUsuarios
