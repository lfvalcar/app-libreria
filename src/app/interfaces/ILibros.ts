export interface ILibro {
    isbn:             string;
    title:            string;
    pageCount:        number;
    publishedDate:    string;
    thumbnailUrl:     string;
    shortDescription: string;
    longDescription:  string;
    status:           string;
    precio:           number;
    autor:            string;
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
    },
];

export default ColumnLibro;
    