const apiBD = 'http://localhost:3001/api';

export async function getAllAutores(){
    
  try{
        const res = await fetch(`${apiBD}/autores`, { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}