import { ILibro } from '@/interfaces/ILibros'
import React, { FC } from 'react'
import CardLibro from './CardLibro'

interface Props {
    libros: ILibro[]
}

const CardList:FC<Props> = ({libros}) => {
  return (
    <section className="flex flex-row flex-wrap">
        {
            libros.map( (libro) => (
                <article key={libro.isbn} className='basis-1/4 p-2'>
                    <CardLibro key={libro.isbn} libro = {libro } />
                </article>
            ))
        }
    </section>
  )
}

export default CardList
