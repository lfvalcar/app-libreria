import { IEditorial } from '@/interfaces/IEditoriales'
import React, { FC } from 'react'
import Link from 'next/link'
import CardEditorial from './CardEditorial'

interface Props {
    editoriales: IEditorial[]
}

const CardEditorialList:FC<Props> = ({editoriales}) => {
  return (
    <section className="flex flex-row flex-wrap">
        {
            editoriales.map( (editorial) => (
                <article key={editorial.id} className='basis-1/4 p-2'>
                    <Link href={`editoriales/${editorial.id}`}>
                        <CardEditorial key={editorial.id} editorial={editorial} />
                    </Link>
                </article>
            ))
        }
    </section>
  )
}

export default CardEditorialList