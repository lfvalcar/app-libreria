const apiBD = 'http://localhost:3001/api';

export async function getAllCategorias(){
    
    try{
        const res = await fetch(`${apiBD}/categorias`, { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}