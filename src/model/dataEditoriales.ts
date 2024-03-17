const apiBD = 'http://localhost:3001/api';

export async function getAllEditoriales(){
    
    try{
        const res = await fetch(`${apiBD}/editoriales`, { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}