import { IAutor } from '@/interfaces/IAutores';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React, { FC } from 'react'

interface Props {
  autor: IAutor;
}

const CardAutor:FC<Props> = ({autor}) => {
  return (
    <Card className='py-4 min-h-72 max-h-72'>
      <CardHeader className='pb-0 pt-2 px-4 h-10 flex-col items-start'>
        <h5 className='font-bold text-sm'>{autor.nombre}</h5>
      </CardHeader>
      <CardBody className='overflow-visible h-48 py-2 flex flex-row flex-wrap justify-center'>
        <Image 
          alt='Card background'
          className='object-cover rounded-xl max-h-44'
          src={autor.foto}
        />
      </CardBody>
      <CardFooter className='pb-0 pt-2 px-4 h-10 flex-col items-start'>
        <p className='text-tiny uppercase font-bold'>
          {autor.localidad}
        </p>
      </CardFooter>
    </Card>
  )
}

export default CardAutor
