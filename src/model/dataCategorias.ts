import { ICategoria } from "@/interfaces/ICategorias";
import axios from "axios";

export async function getAllCategorias(){
    
    try{
        const res = await fetch(`${process.env.API_PREFIX}/categorias`, { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}

export async function insertCategoria(autor:ICategoria, token:string) {
  try{
    const response = await axios.post(
      'http://localhost:10001/api/categorias', 
      autor,
      { headers:{Authorization: `Bearer ${token}`}}
      );
    return response.data
  } catch (error){
    throw new Error('Failed to insert data')
  }
}