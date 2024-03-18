import { IUser } from "../interfaces/IUser"

const apiBD = 'http://localhost:3001/api';

export async function getAllUsuarios(){
    
    try{
        const res = await fetch(`${apiBD}/usuarios`, { cache: 'no-store' })
        return res.json()
  }catch(error){
    throw new Error('Failed to fetch data')
  }
}