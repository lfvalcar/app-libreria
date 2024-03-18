'use client'
import React, {FC} from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button } from "@nextui-org/react";
import { IColumn } from "@/interfaces/ILibros";
import { IEditorial } from "@/interfaces/IEditoriales";

interface Props {
    rows: IEditorial[],
    columns: IColumn[],
    key: string
}

export const TablaAdminEditoriales:FC<Props> = ({rows, columns, key}) => {
    return (
    <div className="flex flex-col gap-4">
        {/* <ModalFormAutores campos={ColumnLibro}/> */}
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