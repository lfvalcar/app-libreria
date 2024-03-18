import { IColumn } from "./ILibros"

export interface IEditorial {
    id: string
    nombre: string
    localidad: string
    telefono: string
    sitioweb: string
    imagen: string
}

export const ColumnEditorial:IColumn[] = [
    {
        key: "id",
        label: "ID"
    },
    {
        key: "nombre",
        label: "NOMBRE"
    },
    {
        key: "localidad",
        label: "LOCALIDAD"
    },
    {
        key: "telefono",
        label: "TELÉFONO"
    },
    {
        key: "sitioweb",
        label: "WEB"
    },
    {
        key: "imagen",
        label: "IMAGEN"
    },
];
  