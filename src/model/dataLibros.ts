import { ILibro } from "../interfaces/ILibros"


export async function getAllLibros(){
    
    try{
        const res = await fetch('http://localhost:3001/api/libros', { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}

export async function getLibrosByCategoria(cod: string){
    
  try{
      const res = await fetch(`http://localhost:3001/api/libros/categorias/${cod}`, { cache: 'no-store' })
      return res.json()
}catch(error){
  throw new Error('Failed to fetch data')
}
}

export async function getLibroByISBN(isbn: string){
    
  try{
      const res = await fetch(`http://localhost:3001/api/libros/${isbn}`, { cache: 'no-store' })
      return res.json()
}catch(error){
  throw new Error('Failed to fetch data')
}
}

export async function createLibro(libro:ILibro, token:string) {
  console.log(libro)
}
