import { IColumn } from "./ILibros";

export interface ICategoria {
    cod: string
    name: string
    descripcion: string
    logo: string
}
  
const ColumnCategoria:IColumn[] = [
    {
        key: "cod",
        label: "COD"
    },
    {
        key: "name",
        label: "NOMBRE"
    },
    {
        key: "descripcion",
        label: "DESCRIPCIÓN"
    },
    {
        key: "logo",
        label: "LOGO"
    }
];

export default ColumnCategoria