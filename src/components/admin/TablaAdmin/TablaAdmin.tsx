'use client'
import React, {FC} from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button } from "@nextui-org/react";
import { IColumn, ILibro } from "@/interfaces/ILibros";
import {PlusIcon} from "./PlusIcon";
import Link from "next/link";
import { ModalForm } from "../../commons/ModalForm";
import { ColumnLibro } from "@/interfaces/ILibros";

interface Props {
    rows: ILibro[],
    columns: IColumn[],
    key: string
}

export const TablaAdmin:FC<Props> = ({rows, columns, key}) => {
    return (
    <div className="flex flex-col gap-4">
        <ModalForm campos={ColumnLibro}/>
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