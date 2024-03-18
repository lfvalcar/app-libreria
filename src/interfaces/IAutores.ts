import { IColumn } from "./ILibros"

export interface IAutor {
    id: string
    nif: string
    nombre: string
    foto: string
    localidad: string
}

export const ColumnAutor:IColumn[] = [
    {
        key: "id",
        label: "ID"
    },
    {
        key: "nif",
        label: "NIF"
    },
    {
        key: "nombre",
        label: "NOMBRE"
    },
    {
        key: "foto",
        label: "FOTO"
    },
    {
        key: "localidad",
        label: "LOCALIDAD"
    }
];
  