import React, { FC } from 'react'
import CardLibro from './CardAutor'
import { IAutor } from '@/interfaces/IAutores'
import Link from 'next/link'

interface Props {
    autores: IAutor[]
}

const CardAutorList:FC<Props> = ({autores}) => {
  return (
    <section className="flex flex-row flex-wrap">
        {
            autores.map( (autor) => (
                <article key={autor.id} className='basis-1/4 p-2'>
                    <Link href={`autores/${autor.id}`}>
                        <CardLibro key={autor.id} autor = {autor } />
                    </Link>
                </article>
            ))
        }
    </section>
  )
}

export default CardAutorList
