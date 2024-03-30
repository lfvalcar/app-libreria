import { ILibro } from '@/interfaces/ILibros'
import { IAutor } from '@/interfaces/IAutores'
import React, { FC } from 'react'

interface Props {
    libro: ILibro,
}

const TablaLibroRow:FC<Props> = ({libro}) => {
  return (
    <tr className="bg-white border-b">
        <td className="px-6 py-4">
            {libro.isbn}
        </td>
        <td className="px-6 py-4">
            {libro.title}
        </td>
        <td className="px-6 py-4">
            {libro.pageCount}
        </td>
        <td className="px-6 py-4">
            {libro.publishedDate}
        </td>
        <td className="px-6 py-4">
            {libro.thumbnailUrl}
        </td>
        <td className="px-6 py-4">
            {libro.status}
        </td>
        <td className="px-6 py-4">
            {libro.precio}
        </td>
        <td className="px-6 py-4">
            {libro.autor.id}
        </td>
        <td className="px-6 py-4">
            {libro.categoria.cod}
        </td>
        <td className="px-6 py-4">
            {libro.editorial.id}
        </td>
    </tr>
  )
}

export default TablaLibroRow
