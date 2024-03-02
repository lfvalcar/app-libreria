import { IColumn } from "./ILibros";

export interface ICategoria {
    id: string;
    name: string;
    descripcion: string;
    logo: string;
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