// components/LibrosPorCategoria.tsx
import { useEffect, useState } from 'react';
import { getLibrosByCategoria } from '@/model/dataLibros';

const LibrosPorCategoria = async (cod:string) => {
  const libros = await getLibrosByCategoria(cod);

  return (
    <div>
      <h2>Libros relacionados con la categoría {cod}</h2>
    </div>
  );
};

export default LibrosPorCategoria;
