import React, { FC } from 'react'
import CardLibro from './CardAutor'
import { IAutor } from '@/interfaces/IAutores'

interface Props {
    autores: IAutor[]
}

const CardAutorList:FC<Props> = ({autores}) => {
  return (
    <section className="flex flex-row flex-wrap">
        {
            autores.map( (autor) => (
                <article key={autor.nif} className='basis-1/4 p-2'>
                    <CardLibro key={autor.nif} autor = {autor } />
                </article>
            ))
        }
    </section>
  )
}

export default CardAutorList
