import React, { FC } from "react"
import Image from "next/image"
import { ILibro } from "@/app/interfaces/ILibros";

interface Props {
    libros: ILibro[];
  }

const LibrosList:FC<Props> = ({libros}) => {
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {libros.map((libro) => (
                <a key={libro.isbn} href={'libros/'+libro.isbn} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                    src={libro.thumbnailUrl}
                    alt='libro'
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    fill
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{libro.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{libro.precio}</p>
                </a>
            ))}
            </div>
        </div>
        </div>
    )
  }

export default LibrosList
  