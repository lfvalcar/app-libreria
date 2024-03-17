export async function getAllEditoriales(){
    
    try{
        const res = await fetch('http://localhost:3001/api/editoriales', { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}