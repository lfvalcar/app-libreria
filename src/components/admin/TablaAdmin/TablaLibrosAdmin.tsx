'use client'
import React, {FC} from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button } from "@nextui-org/react";
import { IColumn, ILibro } from "@/interfaces/ILibros";
import { ModalFormLibro } from "../../commons/ModalFormLibro";
import { ColumnLibroNoRelations } from "@/interfaces/ILibros";
import TablaLibrosRow from "./TablaLibrosRow";

interface Props {
    rows: ILibro[],
    columns: IColumn[],
    key: string
}

export const TablaLibrosAdmin:FC<Props> = ({rows, columns, key}) => {
    return (
    <div className="flex flex-col gap-4">
        <ModalFormLibro campos={ColumnLibroNoRelations}/>
        <table className="w-full text-sm text-left rtl:text-right">
            <thead className="uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {
                    columns.map((column) => (
                            <th key={column.key} scope="col" className="px-6 py-3">{column.label}</th>
                    ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                rows.map( (libro) => (
                    <TablaLibrosRow key={libro.isbn} libro={libro} />
                ))
                }
            </tbody>
        </table>
      </div>
    );
}