export async function getAllAutores(){
    
  try{
        const res = await fetch('http://localhost:3001/api/autores', { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}