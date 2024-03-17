import { ILogin, IRespLogin } from '@/interfaces/ILogin';
import { IRegister, IRespRegister } from '@/interfaces/IRegister';
import axios from 'axios';

const apiBD = 'http://localhost:2401/api';

const apiAuth = {

    login: async (login:ILogin): Promise<IRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const {data} = await axios.post(`${ruta}`, login) 
        return data
    },

    register: async (register:IRegister): Promise<IRespRegister> => {
        const ruta = `${apiBD}/auth/register`;
        const {data} = await axios.post(`${ruta}`, register) 
        return data
    }
}

export default apiAuth;