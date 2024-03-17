import { ILibro } from '@/interfaces/ILibros';
import { MenuItem } from '@nextui-org/react';
import React, { FC } from 'react';

interface Props {
    libro: ILibro;
  }
  
  const DetalleLibro2:FC<Props> = ({libro}) => {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{libro.title}</h2>
            <p className="mt-4 text-gray-500">
              {libro.shortDescription}
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div key={libro.isbn} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">PRECIO</dt>
                  <dd className="mt-2 text-sm text-gray-500">{libro.precio}€</dd>
                </div>
                <div key={libro.isbn} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">PUBLICACIÓN</dt>
                  <dd className="mt-2 text-sm text-gray-500">{libro.publishedDate}</dd>
                </div>
                <div key={libro.isbn} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">PÁGINAS</dt>
                  <dd className="mt-2 text-sm text-gray-500">{libro.pageCount}</dd>
                </div>
                <div key={libro.isbn} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">AUTOR</dt>
                  <dd className="mt-2 text-sm text-gray-500">{libro.autor.nombre}</dd>
                </div>
                <div key={libro.isbn} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">CATEGORIA</dt>
                  <dd className="mt-2 text-sm text-gray-500">{libro.categoria.name}</dd>
                </div>
            </dl>
          </div>
          <div>
            <img
              src={libro.thumbnailUrl}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }

  export default DetalleLibro2
  