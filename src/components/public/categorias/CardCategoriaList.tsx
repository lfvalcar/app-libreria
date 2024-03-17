import { ICategoria } from '@/interfaces/ICategorias'
import React, { FC } from 'react'
import CardCategoria from './CardCategoria'
import Link from 'next/link'

interface Props {
    categorias: ICategoria[]
}

const CardCategoriaList:FC<Props> = ({categorias}) => {
  return (
    <section className="flex flex-row flex-wrap">
        {
            categorias.map( (categoria) => (
                <article key={categoria.cod} className='basis-1/4 p-2'>
                    <Link href={`categorias/${categoria.cod}`}>
                        <CardCategoria key={categoria.cod} categoria={categoria} />
                    </Link>
                </article>
            ))
        }
    </section>
  )
}

export default CardCategoriaList
