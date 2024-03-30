import { ILibro } from "../interfaces/ILibros"
import axios from "axios";

export async function getAllLibros(){
    
    try{
        const res = await fetch(`${process.env.API_PREFIX}/libros`, { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}

export async function getLibrosByCategoria(cod: string){
    
  try{
      const res = await fetch(`${process.env.API_PREFIX}/libros/categorias/${cod}`, { cache: 'no-store' })
      return res.json()
}catch(error){
  throw new Error('Failed to fetch data')
}
}

export async function getLibrosByEditorial(id: string){
    
  try{
      const res = await fetch(`${process.env.API_PREFIX}/libros/editoriales/${id}`, { cache: 'no-store' })
      return res.json()
}catch(error){
  throw new Error('Failed to fetch data')
}
}

export async function getLibrosByAutor(id: string){
    
  try{
      const res = await fetch(`${process.env.API_PREFIX}/libros/autores/${id}`, { cache: 'no-store' })
      return res.json()
}catch(error){
  throw new Error('Failed to fetch data')
}
}

export async function getLibroByISBN(isbn: string){
    
  try{
      const res = await fetch(`${process.env.API_PREFIX}/libros/${isbn}`, { cache: 'no-store' })
      return res.json()
}catch(error){
  throw new Error('Failed to fetch data')
}
}

export async function getNewsLibros(){
    
  try{
      const res = await fetch(`${process.env.API_PREFIX}/libros/news`, { cache: 'no-store' })
      return res.json()
}catch(error){
  throw new Error('Failed to fetch data')
}
}

export async function insertLibro(libro:ILibro, token:string) {
  try{
    const response = await axios.post(
      'http://localhost:10002/api/libros', 
      libro,
      { headers:{Authorization: `Bearer ${token}`}}
      );
    return response.data
  } catch (error){
    throw new Error('Failed to insert data')
  }
}