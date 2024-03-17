import { ILibro } from "../interfaces/ILibros"
import axios from "axios";

const apiBD = 'http://localhost:3001/api';

export async function getAllLibros(){
    
    try{
        const res = await fetch(`${apiBD}/libros`, { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}

export async function getLibrosByCategoria(cod: string){
    
  try{
      const res = await fetch(`${apiBD}/libros/categorias/${cod}`, { cache: 'no-store' })
      return res.json()
}catch(error){
  throw new Error('Failed to fetch data')
}
}

export async function getLibroByISBN(isbn: string){
    
  try{
      const res = await fetch(`${apiBD}/libros/${isbn}`, { cache: 'no-store' })
      return res.json()
}catch(error){
  throw new Error('Failed to fetch data')
}
}

export async function getNewsLibros(){
    
  try{
      const res = await fetch(`${apiBD}/libros/news`, { cache: 'no-store' })
      return res.json()
}catch(error){
  throw new Error('Failed to fetch data')
}
}

export async function insertLibro(libro:ILibro, token:string) {
  try{
    const response = await axios.post(
      'http://localhost:2401/api/libros', 
      libro,
      { headers:{Authorization: `Bearer ${token}`}}
      );
    return response.data
  } catch (error){
    throw new Error('Failed to insert data')
  }
}
