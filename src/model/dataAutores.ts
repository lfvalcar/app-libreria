import { IAutor } from "@/interfaces/IAutores";
import axios from "axios";

export async function getAllAutores(){
    
  try{
        const res = await fetch(`${process.env.API_PREFIX}/autores`, { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}

export async function insertAutor(autor:IAutor, token:string) {
  try{
    const response = await axios.post(
      'http://localhost:10002/api/autores', 
      autor,
      { headers:{Authorization: `Bearer ${token}`}}
      );
    return response.data
  } catch (error){
    throw new Error('Failed to insert data')
  }
}