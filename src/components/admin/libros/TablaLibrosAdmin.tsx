'use client'
import React, {FC} from "react";
import { IColumn, ILibro } from "@/interfaces/ILibros";
import { ModalFormLibro } from "./ModalFormLibro";
import TablaLibrosRow from "./TablaLibrosRow";

interface Props {
    rows: ILibro[],
    columns: IColumn[],
}

export const TablaLibrosAdmin:FC<Props> = ({rows, columns}) => {
    return (
    <div className="flex flex-col gap-4">
        <ModalFormLibro/>
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