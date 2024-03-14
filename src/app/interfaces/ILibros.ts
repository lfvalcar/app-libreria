export interface ILibro {
    isbn:              string;
    title:             string;
    pageCount:         number;
    publishedDate:     string;
    thumbnailUrl:      string;
    shortDescription:  string;
    longDescription:   string;
    status:            string;
    precio:            number;
    autor?:            string;
    categoria?:        string;
}

export interface IColumn {
    key: string;
    label: string;
}

const ColumnLibro:IColumn[] = [
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
        key: "precio",
        label: "PRECIO"
    },
    {
        key: "thumbnailUrl",
        label: "IMAGEN"
    }
];

export const ColumnLibroAdmin:IColumn[] = [
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
        key: "precio",
        label: "PRECIO"
    },
    {
        key: "publishedDate",
        label: "FECHA DE PUBLICACIÓN"
    },
    {
        key: "shortDescription",
        label: "DESCRIPCIÓN CORTA"
    },
    {
        key: "longDescription",
        label: "DESCRIPCIÓN LARGA"
    },
    {
        key: "status",
        label: "ESTADO"
    },
    {
        key: "thumbnailUrl",
        label: "IMAGEN"
    }
];
    
export default ColumnLibro