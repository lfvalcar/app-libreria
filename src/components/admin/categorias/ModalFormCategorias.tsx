'use client'
import React, { FC } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import PlusIcon from "../icons/PlusIcon";
import { IColumn } from "@/interfaces/ILibros";
import Cookie from "js-cookie";
import { useForm } from "react-hook-form";
import { insertCategoria } from "@/model/dataCategorias";
import { ICategoria } from "@/interfaces/ICategorias";

interface Props {
  campos: IColumn[]
}

export const ModalFormCategorias: FC<Props> = ({ campos }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<ICategoria>();
  const onInsertCategoria = async ({cod,name,descripcion,logo}:ICategoria) => {
    const registro = {cod,name,descripcion,logo}
    const token = Cookie.get('token');
    if (token) {
      await insertCategoria(registro, token);
      console.log('Categoria creado exitosamente.');
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
            <form onSubmit={ handleSubmit(onInsertCategoria) } noValidate>
              <ModalHeader className="flex flex-col gap-1">Nueva inserción</ModalHeader>
              <ModalBody>
                  <input
                  { ...register('cod', {
                    required:'cod es requerido'
                  })}
                  id='cod'
                  name='cod'
                  type="text"
                  placeholder='COD'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                  { ...register('name', {
                    required:'name es requerido'
                  })}
                  id='name'
                  name='name'
                  type="text"
                  placeholder='NOMBRE'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                  { ...register('descripcion', {
                    required:'nombre es requerido'
                  })}
                  id='descripcion'
                  name='descripcion'
                  type="text"
                  placeholder='DESCRIPCION'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                  { ...register('logo', {
                    required:'logo es requerido'
                  })}
                  id='logo'
                  name='logo'
                  type="text"
                  placeholder='LOGO'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  
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
