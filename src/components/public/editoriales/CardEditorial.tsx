import { IEditorial } from '@/interfaces/IEditoriales';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React, { FC } from 'react'

interface Props {
  editorial: IEditorial;
}

const CardEditorial:FC<Props> = ({editorial}) => {
  return (
    <Card className='py-4 min-h-72 max-h-72'>
      <CardHeader className='pb-0 pt-2 px-4 h-10 flex-col items-start'>
        <h5 className='font-bold text-sm'>{editorial.nombre}</h5>
      </CardHeader>
      <CardBody className='overflow-visible h-48 py-2 flex flex-row flex-wrap justify-center'>
        <Image 
          alt='Card background'
          className='object-cover rounded-xl max-h-44'
          src={editorial.imagen}
        />
      </CardBody>
      <CardFooter className='pb-0 pt-2 px-4 h-10 flex-col items-start'>
        <p className='text-tiny uppercase font-bold'>
          {editorial.localidad}
        </p>
      </CardFooter>
    </Card>
  )
}

export default CardEditorial