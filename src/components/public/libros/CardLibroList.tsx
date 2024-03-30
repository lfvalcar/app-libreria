import { ILibro } from '@/interfaces/ILibros'
import React, { FC } from 'react'
import CardLibro from './CardLibro'
import Link from 'next/link'

interface Props {
    libros: ILibro[]
}

const CardLibroList:FC<Props> = ({libros}) => {
  return (
    <section className="flex flex-row flex-wrap">
        {
            libros.map( (libro) => (
                <article key={libro.isbn} className='basis-1/4 p-2'>
                    <Link href={`http://localhost:10002/public/libros/${libro.isbn}`}>
                        <CardLibro key={libro.isbn} libro = {libro } />
                    </Link>
                </article>
            ))
        }
    </section>
  )
}

export default CardLibroList
