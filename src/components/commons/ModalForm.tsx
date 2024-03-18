'use client'
import React, { FC, useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import PlusIcon from "./Icons/PlusIcon";
import { IColumn, ILibro } from "@/interfaces/ILibros";
import Cookie from "js-cookie";
import { useForm } from "react-hook-form";
import { insertLibro } from "@/model/dataLibros";

interface Props {
  campos: IColumn[]
}

export const ModalForm: FC<Props> = ({ campos }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<ILibro>();
  const onInsertLibro = async ({}:ILibro) => {
    const registro = {isbn,title,pageCount,publishedDate,thumbnailUrl,shortDescription,longDescription,status,precio,autor,categoria,editorial}
    console.log(registro)
    const token = Cookie.get('token');
    if (token) {
      await insertLibro(registro, token);
      console.log('Libro creado exitosamente.');
    } else {
      console.error('No se pudo obtener el token de acceso.');
      // Aquí puedes manejar el caso en que no se pueda obtener el token de acceso
    }
};


  return (
    <>
      <Button onPress={onOpen} color="primary" endContent={<PlusIcon />}>Add New</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={ handleSubmit(onInsertLibro) } noValidate>
              <ModalHeader className="flex flex-col gap-1">Nueva inserción</ModalHeader>
              <ModalBody>
              {
                campos.map((item) => (
                  <input key={item.key}
                  { ...register('isbn', {
                    required:`${item.label} es requerido`
                  })}
                  id={item.key}
                  name={item.key}
                  type="text"
                  placeholder={item.label}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              ))
              }
                  
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
                  Insertar
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
