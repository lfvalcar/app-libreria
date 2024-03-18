export interface ILibro {
    isbn:              string;
    title:             string;
    pageCount:         number;
    publishedDate:     string;
    thumbnailUrl:      string;
    shortDescription?:  string;
    longDescription?:   string;
    status:            string;
    precio:            number;
    autor:            string;
    categoria:        string;
    editorial:        string;
}

export interface IColumn {
    key: string;
    label: string;
}

export const ColumnLibro:IColumn[] = [
    {
        key: "isbn",
        label: "ISBN"
    },
    {
        key: "title",
        label: "TÍTULO"
    },
    {
        key: "pageCount",
        label: "PÁGINAS"
    },
    {
        key: "publishedDate",
        label: "FECHA PUBLICACIÓN"
    },
    {
        key: "thumbnailUrl",
        label: "IMAGEN"
    },
    {
        key: "status",
        label: "ESTADO"
    },
    {
        key: "precio",
        label: "PRECIO"
    },
    {
        key: "autor.id",
        label: "AUTOR"
    },
    {
        key: "categoria.cod",
        label: "CATEGORIA"
    },
    {
        key: "editorial.id",
        label: "EDITORIAL"
    }
];
    
export default ColumnLibro