'use client'
import React, {FC} from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button } from "@nextui-org/react";
import { IColumn } from "@/interfaces/ILibros";
import { ModalFormCategorias } from "./ModalFormCategorias";
import ColumnCategoria, { ICategoria } from "@/interfaces/ICategorias";

interface Props {
    rows: ICategoria[],
    columns: IColumn[],
    key: string
}

export const TablaAdminCategorias:FC<Props> = ({rows, columns, key}) => {
    return (
    <div className="flex flex-col gap-4">
        <ModalFormCategorias campos={ColumnCategoria}/>
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