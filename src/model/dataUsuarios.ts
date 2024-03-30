export async function getAllUsuarios(){
    
  try{
        const res = await fetch(`${process.env.API_PREFIX}/usuarios`, { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}