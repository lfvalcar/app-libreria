'use client'
import React, {FC} from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button } from "@nextui-org/react";
import { IColumn } from "@/interfaces/ILibros";
import { ColumnAutor, IAutor } from "@/interfaces/IAutores";
import { ModalFormAutores } from "./ModalFormAutores";

interface Props {
    rows: IAutor[],
    columns: IColumn[],
    key: string
}

export const TablaAdminAutores:FC<Props> = ({rows, columns, key}) => {
    return (
    <div className="flex flex-col gap-4">
        <ModalFormAutores campos={ColumnAutor}/>
        <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={`item.${key}`}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
      </div>
    );
}