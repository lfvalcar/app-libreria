export async function getAllEditoriales(){
    
    try{
        const res = await fetch(`${process.env.API_PREFIX}/editoriales`, { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}