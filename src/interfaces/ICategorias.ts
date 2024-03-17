import { IColumn } from "./ILibros";

export interface ICategoria {
    cod: string
    name: string
    descripcion: string
    logo: string
    libros: string
}
  
const ColumnCategoria:IColumn[] = [
    {
        key: "name",
        label: "NOMBRE"
    },
    {
        key: "descripcion",
        label: "DESCRIPCION"
    },
    {
        key: "logo",
        label: "IMAGEN"
    }
];

export default ColumnCategoria